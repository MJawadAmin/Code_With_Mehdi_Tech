import express  from "express";
import { addAgent, removeAgent, updateAgent, fetchAgents } from '../controller/agentController.js';

const router = express.Router()


router.post('/create', addAgent);
router.get('/remove', removeAgent);
router.put('update', updateAgent);
router.get('/fetch', fetchAgents)


export default router;
