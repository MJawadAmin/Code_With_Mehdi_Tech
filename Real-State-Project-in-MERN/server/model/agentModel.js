import mongoose from "mongoose";
const agentSchema= new mongoose.Schema({
    photo :{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    company :{
        type: String,
        require: true
    },
    number :{
        type: String,
        require: true
    },
    experience:{
        type: String,
        require: true
    },
   
    
})
const AgentModel= mongoose.model('agent', agentSchema, 'agents');
export default AgentModel;