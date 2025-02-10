
import AgentModel from "../model/agentModel.js"

const STATIC_EMAIL = "jjawadamn883@gmail.com";
const STATIC_PASSWORD = "Jawadamin12";

export const loginadmin = (req, res) => {
    const { email, password } = req.body;
  
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      return res.json({ message: "Login Successful" });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  };
  export const logoutadmin= (req, res) => {
    return res.json({ message: "Logout Successful" });
  };
  



export const addAgent = async(req , res) => {
    try{ 
       const {photo ,name ,company , number , experience   }=req.body;
       const newAgent= new AgentModel({
        photo: photo,
        name: name ,
        company: company,
        number: number,
        experience: experience
       })

       await newAgent.save()
       return res.status(200).json({
        status: 'success',
        message: 'created successfully'
       })
    }catch(error){
        console.log(error)
        return res.status(200).json({
            status:'failed',
            message: 'server error'
        })
        
    }
}

export const removeAgent = async (req, res ) => {
    try{
        const {agentId}= req.body;
        const agent = await AgentModel.findById(agentId);
        if(!agent){
            return res.status(200).json({
                status: 'failed',
                message: 'agent not found'
            })
        }else{
            await AgentModel.findByIdAndDelete(agentId);
            return res.status(200).json({
                status:" success",
                message: 'deleted successfully'
            })
        }

    }catch(error){
        return res.status(200).json({
            status: 'failed',
            message: 'internal error'
    })
}}

export const updateAgent = async ( req, res) => {
    try{
        const {agentId, newphoto ,newname ,newcompany , newnumber , newexperience   }=req.body;
        const agent=await AgentModel.findById(agentId);
        if(!agent){
            return res.status(200).json({
                status: ' failed',
                message: 'Updation failed'
            })
        }
        else{
            agent.photo= newphoto;
            agent.name= newname;
            agent.company= newcompany;
            agent.experience= newexperience;
            agent.number= newnumber;
            await agent.save();
            return res.status(200).json({
                status: 'succeed',
                message: 'Agent updated succesfully'
            })
        }
    }catch(error){
        console.log(error)
        return res.json(200).json({
            status: 'failed',
            message:'Internal error'
        })

    }
}

export const fetchAgents =async (req, res) => {
    try{
        const agentdata= await AgentModel.find();
        if(!agentdata){
            return res.status(200).json({
                status : 'failed',
                message:'did not found'
            })
        }
        else{
            res.status(200).json({
                status: 'success', 
                agentdata
            })
        }
    }catch(error){
        console.log(error)
        res.status(200).json({
            status: ' failed ',
            message:'did not fetched the data'
        })

    }
}