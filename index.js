// imported modules(dependencies) and assign into variables

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


//import dotenv file


//created application object via express function
const app = express();

// assign available or 8070 port num into variable
const PORT = process.env.PORT || 5000;

//What it really does. Calling use(cors()) will enable the express server to respond to preflight requests.
// A preflight request is basically an OPTION request sent to the server before the actual request is sent, 
//in order to ask which origin and which request options the server accepts.
app.use(cors())

//basically tells the system that you want json to be used
app.use(bodyParser.json())

//get mono db database url from .env file
// const URL= process.env.MONGODB_URI;
const URL= "mongodb+srv://adminMenaka:Malith12@samplecluster1.hdbf9.mongodb.net/class_db?retryWrites=true&w=majority";

//configure mongoose database and connect to database
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set("useFindAndModify", false);
