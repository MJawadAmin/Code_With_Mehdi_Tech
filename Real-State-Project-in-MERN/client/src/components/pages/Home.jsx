import React from 'react'
import Homeimage from '/HomeImage.png'
import { IoIosSearch} from 'react-icons/io';
import { GoChevronDown } from 'react-icons/go';





const Home = () => {
  return (
    <div className='bg-[rgb(244,249,255)] felx flex-col h-[100vh]'>
     <div> <div className='items-center px-72 pt-32 flex '>
        <div className='text-center space-x-3.5 space-y-10'>
            <h1 className='font text-5xl'>Discover A place You'll Love To Live</h1>
            <p className='normal_font text-[rgb(124,136,147)]'>Homie is a real estate solution that gives you the local scoop about homes. Search confidently with your trusted source of homes for sale or rent.</p>
            <button className='bg-[rgb(0,97,224)] text-white h-12 w-40'>Make An Enquiry</button>
        </div>
        <div>
          <img src={Homeimage} alt="" />
        </div></div>
        <div className="flex justify-center items-center relative md:py-16 py-5 h-24 mt-24 md:mt-3">
          <div className="flex flex-col md:flex-row justify-center w-[24rem] lg:w-[60rem] md:w-[50rem] bg-white gap-4 py-8 shadow-lg">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="border border-black font-thin py-2 px-2 flex">
                <input type="text" placeholder="Choice Location" className="" />
                <GoChevronDown />
              </div>
              <div className="border border-black font-thin py-2 px-2 flex">
                <input type="text" placeholder="Bedrooms" className="" />
                <GoChevronDown />
              </div>
              <div className="border border-black font-thin py-2 px-2 flex">
                <input type="text" className="" placeholder="For Rent" />
                <GoChevronDown />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="py-2 px-4 bg-[#0061E0] text-white font-thin ml-4 flex">
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
