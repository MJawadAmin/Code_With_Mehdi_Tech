import express from "express";
import dotenv from 'dotenv'
import  mongoose from "mongoose";
import cors from 'cors';
import route from "./routes/routes.js";

dotenv.config()
const PORT=process.env.PORT;
const MONGODB= process.env.MONGO_DB_URL
const app = express()
app.use(cors());


app.use(express.json())

mongoose.connect(MONGODB)
.then(()=>(console.log('Database connected succesdfully')))
.catch(()=>(console.log("Connection error")))
app.use('/api', route)

app.listen(PORT, ()=>{
    console.log("http//localhost:", PORT)
})


