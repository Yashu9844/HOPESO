import mongoose from "mongoose";

const appointementSchema = new mongoose.Schema({
    register_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    register_type:{
        type: String,
        required: true
    },
    application_number:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    doctor_consulted:{
        type: String,
        required: true
    },
    room_no:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
    }
},{timestamps:true})

export const Appointment = mongoose.model('Appointment', appointementSchema);