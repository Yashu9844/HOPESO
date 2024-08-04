import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import doctorRoutes from './routes/doctores.route.js'
import employeeRoutes from './routes/employyees.route.js'
import pastientRoutes from './routes/patients.route.js'


dotenv.config();
const app = express();

app.use(express.json())
app.use('/api/doctors',doctorRoutes)
app.use('/api/employess',employeeRoutes);
app.use('/api/patients',pastientRoutes);

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('Connected to Database')
}).catch((err)=>{
    console.error(err)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000!!')
})
app.get('/home',(req,res)=>{
   res.send("Hello")});

   app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });