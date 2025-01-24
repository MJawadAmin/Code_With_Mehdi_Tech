import express from "express";
import { createUser, deletData, getAll, getOne, updateData } from '../controllers/userControllers.js';

const route = express.Router();
route.get('/create', createUser);
route.put('/update', updateData)
route.delete('/delete', deletData)
route.post('/getone', getOne)
route.post("/getall",getAll)


export default route;