import React, { useState } from 'react'

const Practice = () => {
    const details = [
        { name: "Name 1", image: "image1.png", location: "Mardan" },
        { name: "name 2", image: 'image2.png', location: "islamabad" },
        { name: "name 3", image: 'image3.png', location: "karachi" },
        { name: "name 4", image: 'image4.png', location: "swabi" },
        { name: "name 5", image: 'image5.png', location: "lahore" },
    ]
    const [active, setActive] = useState(details[0]);
    const handleUpdate =(obj)=>{
        setActive(obj)
    }
    return (
        <div className='flex justify-start items-center'>
            <div className='w-[25%] shadow-lg bg-gray-400 pt-24'>
                <ul name="" id="" className='space-y-6'>
                    {details.map((detail, index) => (
                        <li value="" className='ml-9 ' key={index} onClick={()=>handleUpdate(detail)}> {detail.name}</li>
                    ))}
                </ul>
            </div>
            <div>
              <p>{active.name}  </p>
              <img src={active.image} className='w-10 h-10' alt='name' /> 
              <p>{active.location}  </p>
            </div>
        </div>
    )
}

export default Practice
