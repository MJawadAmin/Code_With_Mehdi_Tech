import React, { useState } from 'react'

const Practice2 = () => {
    const details=[
        {name : 'Jawad Amin', age :25 , image :'image1.png', from: 'Swabi'},
        {name : 'Fida', age :24 , image :'image2.png', from: 'Multan'},
        {name : 'Muhammad ', age :14 , image :'image3.png', from: 'peshawar'},
        {name : 'Ibn- E - Amin', age :15 , image :'image4.png', from: 'Mardan'},
        {name : 'Zesshan', age :22 , image :'image5.png', from: 'gilgit'},
        {name : 'Yousaf', age :23 , image :'image6.png', from: 'islamabad'},
    ]
const [change, setChange]=useState(details[0])
const handleChange=(obj)=>{
setChange(obj)
}
  return (
     <div>
       
      { details.map((service, index)=>(
           <ul key={index} className='space-y-10 ' >
                <li  className=' hover:bg-amber-300 w-2xs ' onClick={()=>handleChange(service)}>{service.name}</li>
                {/* /onClick={ ()=>handleChange(service)} */}
             </ul>
        ))}
       <div className='flex flex-col justify-center items-center'>
         <img src={change.image} alt="" className='h-[20%] w-[20%] ' />
         <h1>{change.name}</h1>
         <h1>{change.age}</h1>
         <h1>{change.from}</h1>
        
        </div>
{/* <select 
    onChange={(e) => handleChange(details[e.target.value])} 
    className="block w-[50%] mx-auto p-2 border bg-gray-200 hover:bg-gray-300"
>
    {details.map((detail, index) => (
        <option key={index} value={index} >
            {detail.name}
        </option>
    ))}
</select>
<div className='flex flex-col justify-center items-center mt-36'>
    <img src={change.image} alt="" className='h-[20%] w-[20%]' />
    <h1>{change.name}</h1>
    <h1>{change.age}</h1>
    <h1>{change.from}</h1>
</div> */}

      </div>
   
  )
}

export default Practice2


// 2nd Method 
// import React, { useState } from 'react';

// const Practice2 = () => {
//     const details = [
//         { name: 'Jawad Amin', age: 25, image: 'image1.png', from: 'Swabi' },
//         { name: 'Fida', age: 24, image: 'image2.png', from: 'Multan' },
//         { name: 'Muhammad', age: 14, image: 'image3.png', from: 'Peshawar' },
//         { name: 'Ibn-E-Amin', age: 15, image: 'image4.png', from: 'Mardan' },
//         { name: 'Zeeshan', age: 22, image: 'image5.png', from: 'Gilgit' },
//         { name: 'Yousaf', age: 23, image: 'image6.png', from: 'Islamabad' },
//     ];

//     const [change, setChange] = useState(0); // Fix: change should be a number (index)

//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <ul className="w-[25%] shadow-lg bg-gray-200 h-[100vh] p-4">
//                 {details.map((service, index) => (
//                     <li
//                         key={index}
//                         onClick={() => setChange(index)} // Fix: Pass index properly
//                         className={`cursor-pointer p-2 mb-2 ${
//                             change === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                         } rounded-md`}
//                     >
//                         {service.name}
//                     </li>
//                 ))}
//             </ul>

//             {/* Main Content */}
//             <div className="w-[75%] flex flex-col items-center justify-center p-10">
//                 <img src={details[change].image} alt={details[change].name} className="w-32 h-32 rounded-full" />
//                 <h1 className="text-2xl font-bold mt-4">{details[change].name}</h1>
//                 <h2 className="text-lg">{details[change].from}</h2>
//                 <h3 className="text-md">{details[change].age} years old</h3>
//             </div>
//         </div>
//     );
// };

// export default Practice2;

