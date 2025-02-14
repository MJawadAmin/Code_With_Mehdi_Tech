import { useState } from 'react'

import './index.css'
import TestimonialPractice from './components/TestimonialPractice'
import Practice from './components/Practice'
import AddItem from './components/AddItem'
import Practice2 from './components/Practice2'
import PracticeWithSelect from './components/PracticeWithSelect'
import TodoList from './components/todoApp/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <AddItem/>
     {/* <TestimonialPractice/>       
     <Practice/> */} 
     {/* <Practice2/> */}
     <PracticeWithSelect/>
     <TodoList/>
    </>
  )
}

export default App
