import mongoose from "mongoose";

const labSchema = new mongoose.Schema({

 empolyee_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employees"
 },
 lab_no:{
    type: String,
    required: true
 },
 data_id:{
    type:String,

 },
 weight:{
    type: Number,
    required: true
 },
 height:{
        type: Number,
        
 },
 temprature:{
    type: double,
    required: true
 },
 date:{
    type: Date,
    default: Date.now()
 },
 category:{
    type: String,
    required: true,
    enum: ['blood_test', 'urine_test', 'x_ray', 'ecg', 'chest_xray']
 },
 test_result:{
    type: String,
    required: true
 },
 patient_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reports"

 }

},{timestamps:true})

export const Lab = mongoose.model("Lab", labSchema)