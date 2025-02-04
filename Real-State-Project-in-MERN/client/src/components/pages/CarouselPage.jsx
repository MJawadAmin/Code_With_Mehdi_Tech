import React from 'react'
import { Carousel } from "flowbite-react";
import absoluteRight from '/quoteDown.svg'
import absoluteleft from '/quoteUpper.svg'


const CarouselPage = () => {
    const Testimonials=[
        {
            name:"Grace Hall",
            image:"Avatar.svg",
            description:"Customer",
            review:"I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best"
        },
        {
            name:"Grace Hall",
            image:"Avatar.svg",
            description:"Customer",
            review:"I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best"
        },
        {
            name:"Grace Hall",
            image:"Avatar.svg",
            description:"Customer",
            review:"I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best"
        },
    ]
  return (
    <div>
    <div className="h-auto sm:h-auto xl:h-[80vh] 2xl:[80vh] mt-20 " >
      <Carousel pauseOnHover>
       <div className=' bg-[rgb(233,243,255)] h-full w-full relative'>
{/*Absolute divs */}
<div className='absolute right-0 lg:right-28 bottom-0'>
    <img src={absoluteRight} alt="" />

</div>
<div className='absolute left-0 top-10 ml-28'>
    <img src={absoluteleft} alt="" />

</div>


        <div className='text-center pt-32'>
            <h1 className='text-blue-500 normal_font'>OUR TESTIMONIALS</h1>
            <h1 className='text-3xl'>What Our Customers Says</h1>
            </div>
            <div className='flex flex-col lg:flex lg:flex-row  justify-between ml-10 lg:ml-52'>
            {Testimonials.map((service, index)=>(
                <div key={index} className='mt-10'><div className='w-[80%] '>
                    <div className=' rounded-2xl  h-[20vh] bg-white flex text-center p-3 '>
                    <h1 className='px-2 normal_font text-gray-500'>{service.review}</h1>
                    </div>
                    <div className='flex justify-between px-11 mt-5'>
                        <div>  <img src={service.image} alt="" className='' /></div>
                   
                    <div className='mt-[-10px]'>    <h1 className='font'>{service.name}</h1>
                        <h1>{service.description}</h1>
                        </div>
                 
                    </div>
                
                   
                   
                    
                    
                    
                </div>
                </div>
            ))}
          
        </div>

       </div>

       {/*2nd Div */}
       <div className=' bg-[rgb(233,243,255)] h-full w-full relative'>
{/*Absolute divs */}
<div className='absolute right-0 lg:right-28 bottom-0'>
    <img src={absoluteRight} alt="" />

</div>
<div className='absolute left-0 top-10 ml-28'>
    <img src={absoluteleft} alt="" />

</div>


        <div className='text-center pt-32'>
            <h1 className='text-blue-500 normal_font'>OUR TESTIMONIALS</h1>
            <h1 className='text-3xl'>What Our Customers Says</h1>
            </div>
            <div className='flex flex-col lg:flex lg:flex-row  justify-between ml-10 lg:ml-52'>
            {Testimonials.map((service, index)=>(
                <div key={index} className='mt-10'><div className='w-[80%] '>
                    <div className=' rounded-2xl  h-[20vh] bg-white flex text-center p-3 '>
                    <h1 className='px-2 normal_font text-gray-500'>{service.review}</h1>
                    </div>
                    <div className='flex justify-between px-11 mt-5'>
                        <div>  <img src={service.image} alt="" className='' /></div>
                   
                    <div className='mt-[-10px]'>    <h1 className='font'>{service.name}</h1>
                        <h1>{service.description}</h1>
                        </div>
                 
                    </div>
                
                   
                   
                    
                    
                    
                </div>
                </div>
            ))}
          
        </div>

       </div>
       {/*3rd carousel */}

       <div className=' bg-[rgb(233,243,255)] h-full w-full relative'>
{/*Absolute divs */}
<div className='absolute right-0 lg:right-28 bottom-0'>
    <img src={absoluteRight} alt="" />

</div>
<div className='absolute left-0 top-10 ml-28'>
    <img src={absoluteleft} alt="" />

</div>


        <div className='text-center pt-32'>
            <h1 className='text-blue-500 normal_font'>OUR TESTIMONIALS</h1>
            <h1 className='text-3xl'>What Our Customers Says</h1>
            </div>
            <div className='flex flex-col lg:flex lg:flex-row  justify-between ml-10 lg:ml-52'>
            {Testimonials.map((service, index)=>(
                <div key={index} className='mt-10'><div className='w-[80%] '>
                    <div className=' rounded-2xl  h-[20vh] bg-white flex text-center p-3 '>
                    <h1 className='px-2 normal_font text-gray-500'>{service.review}</h1>
                    </div>
                    <div className='flex justify-between px-11 mt-5'>
                        <div>  <img src={service.image} alt="" className='' /></div>
                   
                    <div className='mt-[-10px]'>    <h1 className='font'>{service.name}</h1>
                        <h1>{service.description}</h1>
                        </div>
                 
                    </div>
                
                   
                   
                    
                    
                    
                </div>
                </div>
            ))}
          
        </div>

       </div>
      </Carousel>
    </div>
    </div>
  );
}
export default CarouselPage;
 
