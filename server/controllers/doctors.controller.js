import { Doctor } from "../models/doctors.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcryptjs'


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
        res.send("uhgvhjkgjkhgkhihgkjh");
    } catch (error) {
        console.error(error)
    }
}