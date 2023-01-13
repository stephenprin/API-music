import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from "cors"



dotenv.config();
const app= express();
app.use(express.json());

app.use(cors({origin:true}))

import userRoute from './routes/usersRoute';

app.use('/api/v1/users', userRoute);


//error handling
app.all('*', (req: Request, res: Response) => { 
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  })
  
})



 
//connecting too database and server
const PORT = process.env.PORT || 3500;

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL as string, () => { 
  try {
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
    console.log('Connected to Database');
  }catch (err) {
    console.log(err);
  }
});




