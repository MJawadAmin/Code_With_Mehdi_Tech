import React from 'react'
import footer from '/footer.png'
import facebook from '/facebook.jpg'
import twitter from '/twitter.webp'
import linkedin from '/linkedin.jpg'
import instagram from '/intagram.webp'


const Footer = () => {
  return (
    <div>
        {/*Before Footer div*/}
      <div className='h-auto lg:h-[25vh] bg-[rgb(0,97,224)] gap-6 flex flex-col lg:flex lg:flex-row text-center items-center justify-center '>
        <div className=' text-gray-300'>
            <h1 className='font-bold text-3xl'> Join Our Newsletter Now
            </h1>
            <p className='text-xl'> Register now to gets updates on promotions...</p>

        </div>
        <span className='lg:mt-0 mt-5 flex flex-nowrap  '>
            <input type="text" placeholder=" enter your Email" id="" className='bg-amber-50 rounded-l-lg h-12' />
            <button className=' text-white bg-gray-900 rounded-r-lg   h-12 px-2 border-r-2 border'>SUBSCRIBE</button>

        </span>

      </div>

       {/* Main footer Div */}
      <div className='bg-[rgb(14,31,81)] h-auto lg:h-[70vh] text-gray-200 '>
      <div className="w-full flex flex-wrap lg:flex-nowrap px-6 sm:px-8 lg:px-28 space-y-8 lg:space-y-0 space-x-0 lg:space-x-28 pt-48">
  {/* Left Section */}
   {/* Address Section */}
   <div className="w-full lg:w-1/3 space-y-5">
    {/* <h2 className="text-center lg:text-left text-[24px] sm:text-[28px] lg:text-[32px]">Address</h2> */}
    <img src={footer} alt="" />
    <ul className="space-y-5 text-sm">
      <li className="flex items-start gap-3">
        {/* Image Removed */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </li>
    </ul>
    <div className='flex flex-row gap-2 mr-5'>
        <img src={facebook} alt="" className='h-8 w-9'  />
        <img src={twitter} alt=""  className='h-8 w-9'/>
        <img src={linkedin} alt="" className='h-8 w-9' />
        <img src={instagram} alt=""  className='h-8 w-9' />


    </div>
  </div>

  {/* Middle Section */}
  <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 space-y-5">
    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px]">Quick Links</h2>
    <ul className="space-y-2 sm:space-y-5">
      <li>
        <a href="#" className="hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          About
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Our Services
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Our Team
        </a>
      </li>
    </ul>
  </div>

  {/* Social Links */}
  <div className="w-full sm:w-1/2  space-y-5">
    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px]">  Services</h2>
    <ul className=" sm:space-y-5">
      <li>
        <a href="#" className="hover:underline">
        Wish List
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
        Login
        </a>
        </li>
        <li>
        <a href="#" className="hover:underline">
        Sbmit a Request
        </a>
        </li>
        
        <li>
        <a href="#" className="hover:underline">
        Achievment
        </a>
        </li>
       
        <li>
        <a href="#" className="hover:underline">
        Promotionals Offers
        </a>
        </li>
        
      
      <li>
       
      </li>
    </ul>
  </div>

 
</div>
<hr className='text-gray-200 w-full pt-7 '/>
<div className='justify-between px-72 flex flex-row '>
    <h1> &copy; 2025  All rights reserved.</h1>
    <p>terms of useprivacy policy</p>

</div>

      </div>
    </div>
  )
}

export default Footer
