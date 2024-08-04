import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    username:{
            type: String,
            required: true,
            unique: true,
    },
    name: {
        type: String,
        
    },
    age: {
        type: Number,
       
    },
    gender: {
        type: String,
       
        enum: ['male', 'female', 'other']
    },
    phone_no: {
        type: String,
       
    },
    address: {
        type: String,
        
    },
    blood_group: {
        type: String,
       
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    dob: {
        type: Date,
       
    },
    allergies: {
        type: String,
    },
    diagnosis: {
        type: String,
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);
