import React from 'react'
import AboutImage from '/aboutImage.png'
import icon from '/AboutIcon.svg'
import prizeIcon from '/aboutprizeIcon.svg'

const AboutUs = () => {
  return (
    <div className='flex flex-row h-[80vh]'>
      
      {/* Left Dev */}
      <div className='w-[35%] '>
        <div className='relative items-end ml-48'>
        <img src={AboutImage} alt=""  />
        <div className='absolute bottom-[-30px] left-[-30px]  bg-white w-[50%] shadow-md py-10'>
            <img src={prizeIcon} className='w-[30%] '></img>
            <div className='mr-6 ml-2'>
            <h1 className=''>National Real Estate Awards</h1>
            <p className='normal_font text-[rgb(124,136,147)]'>Analysis</p>
            </div>
           
        </div>
        </div>
        
      
      </div>
      <div className='ml-7 w-[65%] '>
        <div className='mr-56 space-y-5'>
            <h1 className='text-blue-600 pt-6'>ABOUT US</h1>
            <h1 className='font text-3xl '>We're on a Mission to Change View of RealEstate Field.</h1>
            <p className='normal_font text-[rgb(124,136,147)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed eiusmod tempor incididunt ut labore et dolore.enim admix minim veniam quis nostrud.</p>
            <div className='flex felx-row'>
        <div>
            <img src={icon} alt="" />
            <h1 className=' text-base leading-6 font-bold'>Modern Villa</h1>
            <p className='normal_font text-[rgb(124,136,147)]'>When unknown printer took galley of type and scrambled.</p>
            </div>
        <div>
        <img src={icon} alt="" />
        <h1 className='text-base leading-6 font-bold'>Secure Payment</h1>
            <p className='normal_font text-[rgb(124,136,147)]'>When unknown printer took galley of type and scrambled.</p>
        </div>
        </div>
       
        </div>
        
     
      
      </div>
    </div>
  )
}

export default AboutUs
