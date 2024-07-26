import mongoose from "mongoose";

const medicinesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    
    type: {
        type: String,
        required: true,
        enum: ['tablet', 'capsule', 'injection', 'ointment']
    },
    description:{
        type: String,
        required: true
    }
   
}
    ,{timestamps:true})

    export const Medicines = mongoose.model("Medicines", medicinesSchema);

// example usage: