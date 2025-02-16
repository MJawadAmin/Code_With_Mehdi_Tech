import React, { useEffect, useState } from 'react'

const Todo1 = () => {
    const [name , useName ]= useState([]);
    useEffect(()=>{
       
    },[])
    const handleAdd=(e)=>{
        e.preventDefault();
        console.log(name)
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">
            <input type="text" placeholder='Enter Items' onChange={handleAdd} />
        </label>
      </form>
    </div>
  )
}

export default Todo1
