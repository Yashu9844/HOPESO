import mongoose from "mongoose";


const medRepSchema = new mongoose.Schema({
    med_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicines"
    },
    med_name:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    is_stock:{
        type: Boolean,
        required: true
    },
    product_details:{
        type: String,
        
    },
    expiry_date:{
        type: Date,
        required: true
    },
    supply_id:{
        type:String,

    }
},
    {timestamps:true});

    export const MedicinesReport = mongoose.model('MedicinesReport',medRepSchema)