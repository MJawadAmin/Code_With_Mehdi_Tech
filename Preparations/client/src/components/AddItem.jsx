import React, { useState } from 'react'

function AddItem() {
    const [todo, setTodo] = useState("")
    const [listItem,setListItem]=useState([])
    const handleSubmit =(e)=>{
        e.preventDefault()


    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='p-10'>
            <input type="text" className='border p-2 border-gray-500' value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
            <button type='submit' className='bg-blue-400 p-2 rounded-sm'>submit</button></div>
        </form>
    )
}

export default AddItem
