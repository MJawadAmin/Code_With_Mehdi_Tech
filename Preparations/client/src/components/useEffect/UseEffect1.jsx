import React, { useEffect, useState } from 'react'

const useEffect1 = () => {
    const [count , setCount]=useState(0);
    const [total , setTotal]=useState(3)
    useEffect(()=>{
       console.log("UseEffect are working properly ")
    },[count,total])
    const handleCOunt=()=>{
        setCount(count+1)
    }
    const handleTotal=()=>{
        setTotal(total+ 1)
    } 
   
        
 
  return (
    <div>Count : {count}
<button onClick={handleCOunt}> Click me</button> 
<br/>
<h1>Total {total}</h1>
<button  onClick={handleTotal}> Click for Total</button>     
    </div>

  )
}

export default useEffect1
