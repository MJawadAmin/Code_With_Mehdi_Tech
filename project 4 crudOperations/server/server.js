import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routePage from './routes/userRoutes.js'

const app = express()
app.use (bodyParser.json())
app.use(cors())
dotenv.config()



const PORT= process.env.PORT || 3000;
const MONGO_URL=process.env.MONGO_URL


mongoose.connect(MONGO_URL)
.then (()=>(console.log("DB connectred succesfully ")))
.catch(()=>("DB connection Error"))
app.use('/api', routePage)

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ${PORT}`)
})