import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    bill_no: {
        type: String,
        required: true,
        unique: true
    },
    pat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    pat_type: {
        type: String,
    },
    doctor_charge: {
        type: Number,
    },
    medicine_charge: {
        type: Number,
    },
    operation: {
        type: Number,
    },
    no_of_days: {
        type: Number,
    },
    necessary_charge: {
        type: Number,
    },
    lab_charge: {
        type: Number,
    },
    advance: {
        type: Number,
    },
    total_charge: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export const Bill = mongoose.model("Bill", billSchema);
