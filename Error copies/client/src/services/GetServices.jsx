import React from 'react'
import axios from 'axios'

const GetServices = () => {
    const API= axios.create({
        baseURL:'api'
    });
    const GetApiDAta= async()=>{
        try {
            const res = await axios.get(API)
            
        } catch (error) {
            console.log("error message :",error.message)
            console.log("error status:", error.response.status);
            console.log("error  data:", error.response.data)
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default GetServices
