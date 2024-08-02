import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
 room_no:{
    type: String,
    required: true,
    unique: true
 },
 room_type:{
    type: String,
    required: true,
    enum: ['Single', 'Double', 'Triple', 'ICU',"General"]
 },
 status:{
    type: String,
    required: true,
    enum: ['Vacant', 'Occupied', 'Maintenance']
 },
 date_of_join:{
    type: Date,
    required: true
 }
  

},{timestamps:true})

export const Room = mongoose.model('Room', roomSchema)