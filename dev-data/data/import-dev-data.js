import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Tour from '../../models/tourModel.js';
dotenv.config();
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB);
const tours = JSON.parse(
  fs.readFileSync('dev-data/data/tours-simple.json', 'utf-8')
);

const importToursData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteToursData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
if (process.argv[2] === '--import') {
  importToursData();
}
if (process.argv[2] === '--delete') {
  deleteToursData();
}
