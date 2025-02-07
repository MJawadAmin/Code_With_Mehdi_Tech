import React, { useEffect, useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import axios from 'axios';
import svgImage from '/svgImage.svg'



const ExpertizePage = () => {

   const [agents, setAgents] = useState([]);
  


    useEffect(()=>{
        const fetchAgents =  async () =>{
            const agentsResponse = await axios.get('http://localhost:8080/api/fetch');
            if(agentsResponse.data.status === 'success'){
                setAgents(agentsResponse.data.agentdata);
            } else {
                console.log('Agents not found!')
            
                const showIfAgentNotAvailable=[{
                    image:"AgentImage.png"
                }]
            }
        }

        if(agents.length === 0){
            fetchAgents();
        }
    },[])

    // Testing by logging data in agents
    useEffect(()=> {
        console.log('Agents');
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
    ]
  return (
    <div>
        <div className='p-32 h-auto  '>
            <div className='text-center  '>
            <p className='text-blue-500'>Expertize here </p>
            <h1 className='font text-3xl'>our Growing Agents</h1>
            </div>
           
            

                 Database connected 
                 <div className=' lg:flex gap-6 items-center h-[100vh] md:overflow-y-scroll lg:overflow-x-scroll lg:flex-row '>
                {agents.map((services, index)=>(
                    <div key={index} className='relative '>
                        <img src="AgentImage.png" alt="img" />
                        <div className='absolute bottom-40  text-blue-500'>
                        <h2>{services.experience}</h2> 
                        </div>
                        <div className='p-6 '> 
                            <h1 className='font text-2xl'>{services.name}</h1>
                            <h3 >{services.company}</h3>
                            <h3 className='font-semibold text-gray-400 flex items-center'><IoCallOutline className='text-blue-600' />Call:{services.number}</h3></div>


                    </div>
                ))
                   
                
                }
                 </div>  </div></div>


/* <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-10 md:px-16 lg:px-32">
    {AgentsDataObject.map((services, index) => (
        <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-auto">
            <img src={services.image} alt="img" className="w-full h-auto rounded-lg" />
            <div className="absolute bottom-20 lg:bottom-28 left-0 bg-gray-400 text-blue-500 text-sm sm:text-base md:text-lg p-2 ">
                <h2>{services.experience}</h2>
            </div>
            <div className="mt-3 text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{services.name}</h1>
                <h3 className="text-sm sm:text-base md:text-lg">{services.expertise}</h3>
                <h3 className="font-semibold text-gray-400 flex items-center justify-center text-sm sm:text-base md:text-lg">
                    <IoCallOutline className="text-blue-600 mr-2" /> Call: {services.contact}
                </h3>
            </div>
        </div>
    ))}
</div>

<div className="h-auto md:h-[20vh] bg-[rgb(226,239,255)] w-[90%] sm:w-[85%] md:w-[80%] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between p-6 sm:p-10 md:p-16 mt-20 sm:mt-32 md:mt-44 rounded-lg">
    <img src={svgImage} alt="" className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24" />
    <div className="text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Become An Agent</h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Agent hen an unknown printer took a galley scramble
        </p>
    </div>
    <button className="w-24 sm:w-28 h-10 bg-blue-600 text-white rounded-md mt-4 md:mt-0">
        Join
    </button>
</div>



      </div>      
      
    </div> */
  )
}

export default ExpertizePage
