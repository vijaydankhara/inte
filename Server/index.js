import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/UserRoutes.js'; 

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 1111;
const URL = process.env.MONGODBURL;

mongoose.connect(URL)
  .then(() => {
    console.log("DB is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
