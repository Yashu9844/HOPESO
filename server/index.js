import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'



dotenv.config();
const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('Connected to Database')
}).catch((err)=>{
    console.error(err)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
app.get('/home',(req,res)=>{
   res.send("Hello")});