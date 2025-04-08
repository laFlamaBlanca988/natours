import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB);
