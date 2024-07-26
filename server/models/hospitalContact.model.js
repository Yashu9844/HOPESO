import mongoose  from "mongoose";

const hospitalContact = new mongoose.Schema({
 hospital_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
 },
 phone_no: {
    type: String,
    required: true,
    validate: {
        validator: function(v) {
            return /\d{10}/.test(v); // Example pattern, adjust as needed
        },
        message: props => `${props.value} is not a valid phone number!`
    }
},
email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
}
},{timestamps:true})


export const HospitalContact = mongoose.model("HospitalContact", hospitalContact)