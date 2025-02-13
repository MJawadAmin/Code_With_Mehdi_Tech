import { useState } from 'react'

import './index.css'
import TestimonialPractice from './components/TestimonialPractice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TestimonialPractice/>       
    </>
  )
}

export default App
