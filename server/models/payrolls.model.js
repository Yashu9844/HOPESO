import mongoose from "mongoose";

const payRollSchema = new mongoose.Schema({
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    account_no: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const PayRoll = mongoose.model('PayRoll', payRollSchema);
