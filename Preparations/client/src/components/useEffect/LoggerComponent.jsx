import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const [count , setCount]= useState(0)
    useEffect(()=>{
        console.log("Count are working: ", count)
    })
   const handleClick=()=>{
    setCount(count+ 1);
   }
  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={handleClick}>Click me </button>
    </div>
  )
}

export default LoggerComponent
