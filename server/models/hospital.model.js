import mongoose from "mongoose";


const HospitalSchema = new  mongoose.Schema({
   
    hospital_name:{
        type:String,
        required:true
    },
    type:{
        type: String,
        required: true,
        enum: ['General', 'Specialized', 'Clinic', 'Other']
    },
    area:{
        type:String,
        required:true
    },
    road:{
        type:String,
        required:true
    },
    building:
    {
        type:String,
         required:true
        },
    country:{
        type:String,
        required:true
    },
    owner:{
        type:String,
    
    }    
},{timestamps:true});

export const Hospital = mongoose.model('Hospital',HospitalSchema);