import express  from "express";
import { addAgent, removeAgent, updateAgent, fetchAgents } from '../controller/agentController.js';

const router = express.Router()


router.post('/create', addAgent);
router.delete('/remove/:id', removeAgent);
router.put('update', updateAgent);
router.get('/fetch', fetchAgents)


export default router;
