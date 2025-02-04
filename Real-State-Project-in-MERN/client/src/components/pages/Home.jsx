import React from 'react'
import Homeimage from '/HomeImage.png'
import { IoIosSearch} from 'react-icons/io';
import { GoChevronDown } from 'react-icons/go';





const Home = () => {
  return (
    <div className='bg-[rgb(244,249,255)] flex flex-col h-auto lg:h-[100vh]'>
    <div> 
      <div className='items-center px-8 md:px-72 pt-16 md:pt-32 flex flex-col md:flex-row text-center md:text-left'>
        
        {/* Left Section - Text */}
        <div className='space-x-3.5 space-y-6 md:space-y-10 text-center'>
          <h1 className='font text-3xl md:text-5xl '>Discover A place You'll Love To Live</h1>
          <p className='normal_font text-[rgb(124,136,147)] text-sm md:text-base'>
            Homie is a real estate solution that gives you the local scoop about homes. 
            Search confidently with your trusted source of homes for sale or rent.
          </p>
          <button className='bg-[rgb(0,97,224)] text-white h-10 md:h-12 w-36 md:w-40'>
            Make An Enquiry
          </button>
        </div>
  
        {/* Right Section - Image */}
        <div className='mt-6 md:mt-0'>
          <img src={Homeimage} alt="" className="w-full md:w-auto" />
        </div>
  
      </div>
  
      {/* Search Filter Section */}
      <div className="flex justify-center items-center relative md:py-16 py-5 h-auto lg:h-24 mt-24 md:mt-3">
        <div className="flex flex-col md:flex-row justify-center w-[90%] md:w-[40rem] lg:w-[60rem] bg-white gap-4 py-8 shadow-lg">
          
          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <div className="border border-black font-thin py-2 px-2 flex w-full md:w-auto">
              <input type="text" placeholder="Choice Location" className="w-full md:w-auto" />
              <GoChevronDown />
            </div>
            <div className="border border-black font-thin py-2 px-2 flex w-full md:w-auto">
              <input type="text" placeholder="Bedrooms" className="w-full md:w-auto" />
              <GoChevronDown />
            </div>
            <div className="border border-black font-thin py-2 px-2 flex w-full md:w-auto">
              <input type="text" className="w-full md:w-auto" placeholder="For Rent" />
              <GoChevronDown />
            </div>
          </div>
  
          {/* Search Button */}
          <div className="flex justify-center md:justify-start items-center">
            <button className="py-2 px-4 bg-[#0061E0] text-white font-thin flex w-full md:w-auto">
              <IoIosSearch className="text-white w-5 h-5 mt-1" /> Search
            </button>
          </div>
  
        </div>
      </div>
  
    </div>
  </div>
  
  )
}

export default Home
