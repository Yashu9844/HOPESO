import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum:['Male', 'Female', 'Other']
    },
     phno:{
        type: String,
        required: true,
        unique: true
     },
     department:{
        type: String,
        required: true
     },
     salary:{
        type: Number,
        required: true
     },
     employee__id:{
        type: String,
        required: true,
        unique: true
     }

},{timestamps:true})

export const Employee = mongoose.model("Employee",employeeSchema)