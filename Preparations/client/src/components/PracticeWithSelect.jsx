// import React, { useState } from 'react'

// const PracticeWithSelect = () => {
//     const data=[
//         {name :'jawad ', age: 25, from: 'peshawar'},
//         {name :'jawad Amin ', age: 23, from: 'Peshawar Board'},
//         {name :'jawad khan ', age: 22, from: 'peshawar1'}
//     ]
//     const [value , setValue]= useState(data[0])
//     const handleVlaue=(object)=>{
//         console.log(object)
//     }
//   return (
//     <div>
//       <select name="" id="" onChange={(e)=>handleVlaue(data[e.target.value])}></select>
//       {}
//     </div>
//   )
// }

// export default PracticeWithSelect
import React, { useState } from 'react';

const PracticeWithSelect = () => {
    const details = [
        { name: 'Jawad Amin', age: 25, image: 'image1.png', from: 'Swabi' },
        { name: 'Fida', age: 24, image: 'image2.png', from: 'Multan' },
        { name: 'Muhammad', age: 14, image: 'image3.png', from: 'Peshawar' },
        { name: 'Ibn-E-Amin', age: 15, image: 'image4.png', from: 'Mardan' },
        { name: 'Zeeshan', age: 22, image: 'image5.png', from: 'Gilgit' },
        { name: 'Yousaf', age: 23, image: 'image6.png', from: 'Islamabad' },
    ];
const [select , setSelect]= useState(details[0]);
const handleChange=(e)=>{
   setSelect(e)
}


    return (
       <>
{/* <select name="" id="" onChange={handleChange}>
    {details.map((service , index)=>(
        <option key={index} value={index}>{service.name}</option>
    ))}
</select> */}
{details.map((service , index)=>(
    <ul key={index}>
<li onClick={()=>handleChange(service)}>{service.name} </li>
    </ul>
))}
       
       <div>{select.name}
        {select.age}
       </div>
       </>
    );
};

export default PracticeWithSelect;

