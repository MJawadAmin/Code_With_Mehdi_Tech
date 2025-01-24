import express from 'express'
import mongoose  from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

app.set('view engine', 'ejs')

app.get('/', (req , res )=>(res.render('login')))

app.set ('src/view', (req, res)=>(res.render('')))

const PORT = process.env.PORT ||8000
const MONGO_CONN= process.env.MONGO_URL

mongoose.connect(MONGO_CONN)
.then(()=>(console.log("DB are connecting succesfully ")))
.catch(()=>(console.log("Connection Error ")))


app.listen(PORT, ()=>{
    console.log(`Server connected on hhtp//:localhost:${PORT}`)
})