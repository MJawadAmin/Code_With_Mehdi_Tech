import React, { useEffect, useState } from 'react'

const UseEffectPractice = () => {
    const [count , setCount]=useState(0);
    useEffect(()=>{
        console.log("UseEffect are working")
  
    },[count])
  return (
    <div>
      <h1>Counting here : {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increase</button>
      <button onClick={()=>setCount(count- 1)}> Decrease </button>
    </div>
  )
}

export default UseEffectPractice
