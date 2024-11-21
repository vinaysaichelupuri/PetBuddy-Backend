import express from 'express';
import mongoose from 'mongoose';
import doctorData from './routes/getDoctorsData'; 
import  trainingData  from './routes/getTrainingData';
import  groomingData  from './routes/getGroomingData';
import  boardingData  from './routes/getBoardingData';
import login from './routes/login';
import register from './routes/register';
import petRegister from './routes/petRegister';
import petData from './routes/petData'
import getProfile from './routes/getProfile'
import addReminder from './routes/addReminder'
import addActivity from './routes/addActivity'
import addGallery from './routes/addGallery'
import getGallery from './routes/getGallery'
const app = express()
app.use(express.json());
const connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/PetBuddy');
    console.log('Database connection established');
  } catch (error) {
    console.error('Database connection failed:', error); 
  }
};
connection();
app.use('/api/doctorData', doctorData);
app.use('/api/trainingData',trainingData);
app.use('/api/groomingData',groomingData);
app.use('/api/boardingData',boardingData);
app.use('/api/login',login);
app.use('/api/register',register);
app.use('/api/petRegister',petRegister);
app.use('/api/petData',petData);
app.use('/api/getProfile',getProfile);
app.use('/api/addReminder',addReminder);
app.use('/api/addActivity',addActivity);
app.use('/api/addGallery',addGallery);
app.use('/api/getGallery',getGallery)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

