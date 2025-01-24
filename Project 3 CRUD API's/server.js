import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from "body-parser"

 const app = express()

 app.use(bodyParser.json())
 app.use(cors())

 dotenv.config()
 
 
const PORT = process.env.PORT||8080
const MONGO_URL= process.env.MONGO_URL
mongoose.connect(MONGO_URL)
.then(()=>(console.log("DB connected succesfully ")))
.catch(()=>(console.log("Error in db connection")))


app.listen(PORT, ()=>(console.log("Server are connected on http//localhost:",PORT)))