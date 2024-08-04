import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
       
       
    },
    password:{
        type:String,
        required: true,
        minlength: 6,
       
    },
    specialization: {
        type: String,
        required: true,
    },
  
   
    phone_no: {
        type: String,
        required: true,
    },
    consultation_fee: {
        type: Number,
   
    },
    qualifications: {
        type: String,
   
    },
    total_no_patient_Consultations: {
        type: Number,

    },
 },
    {timestamps:true})

    export const Doctor = mongoose.model("Doctor",doctorSchema)