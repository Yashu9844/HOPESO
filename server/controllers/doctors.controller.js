import { Doctor } from "../models/doctors.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const signup  = async (req, res, next) =>{
    try {
        const {name , email , password,specialization, phone_no} = req.body;

       const existingDoctor = await Doctor.findOne({email});
       if(existingDoctor){
        return next(errorHandler(400,"User Already Registered"));
       }
       if(!name || !email || !password || name === ''|| email === ''|| password === ''){
        next(errorHandler(400,'All fields required plz'))
     }

       const hasedPassword = bcrypt.hashSync(password,10);

       const newUser = new Doctor({
        name,
        email,
        password: hasedPassword,
        specialization, 
        phone_no
       })

       

       await newUser.save();
       res.status(201).json({message: 'User Created Successfully'});

    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) =>{
    try {
    const {email,password} = req.body;

    if(!email || !password){
      return next(errorHandler(401,"All field requried"));
    }

    const validUser = await Doctor.findOne({email});


    if(!validUser){
        return next(errorHandler(400,"User not Found"));
    }



    const isPasswordValid =await bcrypt.compare(password,validUser.password);

    if(!isPasswordValid){
        return next(errorHandler(401,"Invalid Credentials"));
    }
    
  const {password:pass , ...rest} = validUser._doc;

    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET,{
        expiresIn: '1h',
    })
  res.status(200).cookie("access_token",token,{
    httpOnly:true,
  }).json(rest)

    } catch (error) {
        next(error);
    }
}

export const  signout = (req,res,next)=>{
    try {
        res.status(200).clearCookie("access_token").json("User succesfully logged out")
    } catch (error) {
        next(error);
        
    }
}

export const google =async (req,res,next)=>{
    try {
        
    const {name , email ,  googlePhotoUrl} = req.body;

    const user = await Doctor.findOne({email});

    if(user){

        const token = jwt.sign({id:user._id },process.env.JWT_SECRET);
       
        const {password , ...rest} = user._doc;

        res.status(200).cookie("access_token",token,{
            httpOnly:true,
        }).json(rest);
        
    }else{
        const genratePassword = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);

        const hasedPassword = await bcrypt.hash(genratePassword,10);

        const newUser  = new Doctor({
            email,
            name,
            password: hasedPassword,
            profilePicture:googlePhotoUrl
        })

        await newUser.save();

        const {password , ...rest} = newUser._doc;

      const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);

        res.status(200).cookie("access_token",token,{
            httpOnly:true,
        }).json(rest)
    }


    } catch (error) {
        next(error);
    }
}



