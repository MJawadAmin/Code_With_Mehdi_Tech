import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
    email: String,
    password: String
})
const loginModel= mongoose.loginSchema('login', loginSchema)
export default loginModel;