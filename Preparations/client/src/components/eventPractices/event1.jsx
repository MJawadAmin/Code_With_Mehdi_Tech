import React, { useState } from 'react'

const event1 = () => {
    const [name , setName]= useState(0)
    const handleChange=(e)=>{
setName(e.target.value);
    }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default event1
