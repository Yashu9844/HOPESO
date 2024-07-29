import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    phone_no: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    blood_group: {
        type: String,
        required: true,
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
        required: true,
    },
    allergies: {
        type: String,
    },
    diagnosis: {
        type: String,
    }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);
