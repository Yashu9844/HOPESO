import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
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
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    total_no_patient_Consultations: {
        type: Number,
        required: true,
    },
 },
    {timestamps:true})

    export const Doctor = mongoose.model("Doctor",doctorSchema)