import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    report_id: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed', 'Cancelled']
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    }
}, {timestamps: true});

export const Report = mongoose.model("Report", reportSchema);
