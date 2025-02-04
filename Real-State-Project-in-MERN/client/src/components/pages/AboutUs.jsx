import React from 'react'
import AboutImage from '/aboutImage.png'
import icon from '/AboutIcon.svg'
import prizeIcon from '/aboutprizeIcon.svg'

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row h-auto md:h-[80vh]'>
  
    {/* Left Section */}
    <div className='w-full md:w-[35%] flex justify-center md:justify-start'>
      <div className='relative items-end md:ml-48 flex flex-col md:block'>
        <img src={AboutImage} alt="" className="w-[80%] md:w-auto mx-auto md:mx-0" />
        
        {/* Award Box */}
        <div className='absolute bottom-[-30px] left-0 md:left-[-30px] bg-white w-[70%] md:w-[50%] shadow-md py-10 flex flex-col md:flex-row items-center md:items-start'>
          <img src={prizeIcon} className='w-[30%] mx-auto md:mx-0' alt="" />
          <div className='mr-6 ml-2 text-center md:text-left'>
            <h1 className='text-sm md:text-base'>National Real Estate Awards</h1>
            <p className='normal_font text-[rgb(124,136,147)] text-xs md:text-sm'>Analysis</p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Right Section */}
    <div className='w-full md:w-[65%] px-5 md:ml-7 flex flex-col justify-center'>
      <div className='md:mr-56 space-y-3 md:space-y-5 text-center md:text-left'>
        <h1 className='text-blue-600  pt-20 lg:pt-6 text-sm md:text-base'>ABOUT US</h1>
        <h1 className='font text-2xl md:text-3xl'>We're on a Mission to Change View of Real Estate Field.</h1>
        <p className='normal_font text-[rgb(124,136,147)] text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed eiusmod tempor incididunt ut labore et dolore.enim admix minim veniam quis nostrud.
        </p>
  
        {/* Features */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10'>
          <div className='text-center md:text-left'>
            <img src={icon} alt="" className="mx-auto md:mx-0" />
            <h1 className='text-base leading-6 font-bold'>Modern Villa</h1>
            <p className='normal_font text-[rgb(124,136,147)] text-xs md:text-sm'>When unknown printer took galley of type and scrambled.</p>
          </div>
          
          <div className='text-center md:text-left'>
            <img src={icon} alt="" className="mx-auto md:mx-0" />
            <h1 className='text-base leading-6 font-bold'>Secure Payment</h1>
            <p className='normal_font text-[rgb(124,136,147)] text-xs md:text-sm'>When unknown printer took galley of type and scrambled.</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  
  )
}

export default AboutUs
