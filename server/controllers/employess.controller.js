import { Employee } from "../models/employess.model.js"
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signUp = async(req,res,next)=>{
    try {
    
        const {employee_id,password,name,gender,phno,salary,department} = req.body;

        if(!employee_id || !password || !name || !gender || !phno || !salary || !department){
            return next(errorHandler(400,"All fildes must required"));
        }

        const existingEmployee = await Employee.findOne({employee_id:employee_id});

        if(existingEmployee){
            return next(errorHandler(400,"Employee already exists"));
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newEmployee = await Employee.create({
            employee_id,
            password: hashedPassword,
            name,
            gender,
            phno,
            salary,
            department
        })


        res.status(201).json({message: 'Employee Created Successfully'});


  

    } catch (error) {
        next(error)
    }
}

export const signIn = async (req,res,next) => {
    try {
         const {employee_id, password} = req.body; 

         if(!employee_id ||!password){
             return next(errorHandler(400,"All fildes must required"));
         }

         const validUser = await Employee.findOne({employee_id})

         if(!validUser){
             return next(errorHandler(404,"User not found"));
         }

         const isPasswordValid = await bcrypt.compare(password,validUser.password);

         if(!isPasswordValid){
            return next(errorHandler(401,'Wrong creadentials'))
         }
        const {password:pass , ...rest } = validUser._doc;

         const token  = jwt.sign({id:employee_id}, process.env.JWT_SECRET,{
            expiresIn:'1h'
         })

         res.status(200).cookie("access_token",token,{
            httpOnly:true
         }).json(rest)



    } catch (error) {
        next(error);
    }
}

export const signOut =async (req,res,next)=>{
    try {
         res.clearCookie("access_token").status(200).json("User Succesfully signed out")


    } catch (error) {
        next(error);
    }
}

export const google = async (req,res,next)=>{
    try {
        
  const {name,email,googlePhotoUrl} = req.body;

  const user = await Employee.findOne({email});

  if(user){

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    const {password , ...rest} = user._doc

    res.status(200).cookie("access_token",token,{
        httpOnly:true
    }).josn(rest);
  }else{
const  genratePassword = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);

const hashedPassword = await bcrypt.hash(genratePassword,10)

   const newUser = new Employee({
    name,
    email,
    password: hashedPassword,
    profilePicture:googlePhotoUrl
   })

   const {password , ...rest} = newUser._doc;
  
    await newUser.save();

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.status(200).cookie("access_token",token,{
        httpOnly:true
    }).josn(rest);
 
  }


    } catch (error) {
        next(error);
    }
}