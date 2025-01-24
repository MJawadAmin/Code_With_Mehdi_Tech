import express from 'express'
import mongoose  from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()


const PORT = process.env.PORT ||8000
const MONGO_CONN= process.env.MONGO_URL

mongoose.connect(MONGO_CONN)
.then(()=>(console.log("DB are connecting succesfully ")))
.catch(()=>(console.log("Connection Error ")))


app.listen(PORT, ()=>{
    console.log(`Server connected on hhtp//:localhost:${PORT}`)
})