import React, { useState } from 'react'

const Event1= () => {
  const details = [
    { name: 'Jawad Amin', age: 25, image: 'image1.png', from: 'Swabi' },
    { name: 'Fida', age: 24, image: 'image2.png', from: 'Multan' },
    { name: 'Muhammad', age: 14, image: 'image3.png', from: 'Peshawar' },
    { name: 'Ibn-E-Amin', age: 15, image: 'image4.png', from: 'Mardan' },
    { name: 'Zeeshan', age: 22, image: 'image5.png', from: 'Gilgit' },
    { name: 'Yousaf', age: 23, image: 'image6.png', from: 'Islamabad' },
];
const [change , setChange]= useState(0)
const handleChange=(e)=>{
const index = e.target.value
setChange(index)
}
  return (
    <div>
      <select name="" id="" onChange={handleChange} value={change}>
        {details.map((service , index)=>(
          <option value={index} key={index}>{service.name}</option>
        ))}
      </select>
      <div>
        <h1 className='text-3xl flex flex-col items-center'>
          {details[change].name}
        </h1>
      </div>
    </div>
  )
}

export default Event1