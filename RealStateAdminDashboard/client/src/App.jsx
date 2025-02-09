
import { useState, useEffect } from 'react';
import './index.css';
import { Sidebar } from 'react-pro-sidebar';
import Dashboard from './components/pages/Dashboard';



function App() {
  

  return (
    <div className='bg-sky-100 p-5 '>
 <Dashboard/>

 {/* <Sidebar/> */}

 </div>
  );
}

export default App;


