import User from './models/User';
import express from 'express'
const app = express()
const mongoose = require('mongoose');
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.error(err));



// Create
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
});

// Read
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

// Update
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
});

// Delete
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: 'User deleted' });
});
app.listen(3000, ()=>{
    console.log("Server are running ")
})
