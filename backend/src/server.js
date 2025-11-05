import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
import cors from 'cors';
import { connectToDatabase } from './config/db.js';
import { clerkMiddleware } from "@clerk/express";


//middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/health', (req, res) => {
  res.status(200).json('server is fucking healthy!');
})


app.listen(PORT,() => {
  console.log(`server is running on ${PORT}`);
  connectToDatabase();
})
