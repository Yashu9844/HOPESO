import { Patient } from "../models/paitent.model.js";
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signUp = async (req, res, next) => {
    try {

        const {username,email,password} = req.body;
        
        if(!username ||!email ||!password){
            return next(errorHandler(400,"All fields are required"));
        }

        const existingUserByEmail = await Patient.findOne({ email });
        const existingUserByUsername = await Patient.findOne({ username });

        if (existingUserByEmail) {
            return next(errorHandler(400, "Email is already in use"));
        }

        if (existingUserByUsername) {
            return next(errorHandler(400, "Username is already in use"));
        }

  
        const hashedPassword = await  bcrypt.hash(password,10)

        const newUser = new Patient(
            {
                username,
                email,
                password: hashedPassword
            }
        )
        await newUser.save();

        res.status(201).json(
           {
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            },
            message:"User created Successfully"
           }
        )
         
    } catch (error) {
        next(error);
    }
}

export const signIn = async (req,res,next) => {
 try {
    const {email,password} = req.body;

   if(!email || !password){
     return next(errorHandler(401,"All fields are required"));
   }

   const user = await Patient.findOne({email});

   if(!user){
    return next(errorHandler(404,"User not Found"))
   }

   const isPasswordMatch = await bcrypt.compare(password,user.password);

   if(!isPasswordMatch){
    return next(errorHandler(401,"Invalid credentials"));
   }
 
const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
const {password:pass, ...rest} = user._doc;

res.status(200).cookie("access_token",token,{
    httpOnly:true,
}).json(rest)




 } catch (error) {
    next(error);
 }

}
export const signOut = async (req, res,next) => {
    try{
        res.status(200).clearCookie("access_token").json({message:"User signed out"})
             
    }catch(error){
        next(error);
    }
}