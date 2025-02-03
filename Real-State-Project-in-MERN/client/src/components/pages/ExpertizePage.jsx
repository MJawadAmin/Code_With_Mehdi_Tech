import React, { useEffect, useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import axios from 'axios';


const ExpertizePage = () => {

    const [agents, setAgents] = useState([]);


    useEffect(()=>{
        const fetchAgents =  async () =>{
            const agentsResponse = await axios.get('http://localhost:8080/api/fetch');
            if(agentsResponse.data.status === 'success'){
                setAgents(agentsResponse.data.agentdata);
            } else {
                console.log('Agents not found!')
            }
        }

        if(agents.length === 0){
            fetchAgents();
        }
    },[])

    // Testing by logging data in agents
    useEffect(()=> {
        console.log('Agents', agents);
    },[agents])

    const AgentsDataObject= [
        {
            image:"AgentImage.png",
            experience:"3 Years Experience",
            name : "David Wing",
            expertise: "Eco Builders",
            contact: "+1234567890"
        },
        {
            image:"AgentImage.png",
            experience:"5 Years Experience",
            name : "Mike Hue",
            expertise: "Eco Builders",
            contact: "+1234567890"
        }, 
        {
            image:"AgentImage.png",
            experience:"3 Years Experience",
            name : "Ela Steven",
            expertise: "Eco Builders",
            contact: "+1234567890"
        },
        {
            image:"AgentImage.png",
            experience:"5 Years Experience",
            name : "Billi Buther",
            expertise: "Eco Builders",
            contact: "+1234567890"
        },
        {
            AgentImage:'AgentLogoImage.png'
        }
    ]
  return (
    <div>
        <div className='p-32 h-[100vh]'>
            <div className='text-center '>
            <p className='text-blue-500'>Expertize here </p>
            <h1 className='font text-3xl'>our Growing Agents</h1>
            </div>
           
            <div className='px-72 shadow-md flex gap-7 justify-center '>
                {agents.map((services, index)=>(
                    <div key={index} className='relative'>
                        <img src="AgentImage.png" alt="img" />
                        <div className='absolute bottom-40  text-blue-500'>
                        <h2>{services.experience}</h2> 
                        </div>
                        <div className='p-6 '> 
                            <h1 className='font text-2xl'>{services.name}</h1>
                            <h3>{services.company}</h3>
                            <h3 className='font-semibold text-gray-400 flex items-center'><IoCallOutline className='text-blue-600' />Call:{services.number}</h3></div>


                    </div>
                ))
                    
                }
                </div>
            </div>

{AgentsDataObject.map((services, index)=>(
     <div key={index}>
                
     <img src={services.AgentImage} alt="" />

 </div>

))}
           
      
    </div>
  )
}

export default ExpertizePage
