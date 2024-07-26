import mongoose from "mongoose";

const prescribedSchema = new mongoose.Schema({
    report_id:{
     type:   mongoose.Schema.Types.ObjectId,
    ref:"Doctor"
    },
    med_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Medicines"
    },
    med_name:{
        type: String,
        required:true
    }


},{timestamps:true})

export const PrescribedMed = mongoose.model('PrescribedMed', prescribedSchema);