import React from "react";
import image1 from '/buyAHomeImage.png'


const ServicesData = [
  {
    imgSrc: "buyAHomeImage.png", 
    title: "Buy a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
   
  },
  {
    imgSrc: "RentAHomeImage.png",
    title: "Rent a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
    
  },
  {
    imgSrc: "sellAHomeImage.png",
    title: "Sell a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
   
  }
];
const detailsServices=[ {
    svgImage: 'image1.svg'
  },
  
  {
    svgImage: 'image2.svg'
  },
  
  {
    svgImage: 'image3.svg'
  },
  {
    svgImage: 'image4.svg'
  },]

const OurServices = () => {
  return (
    <><div className="text-center">
    <p className="normal_font mt-10 lg:mt-0 text-blue-600">Our Services</p>
    <h1 className="font text-3xl">Our Main Focus</h1>
  </div>
  
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6 px-6 md:px-80">
    {ServicesData.map((service, index) => (
      <div key={index} className="bg-white shadow-lg overflow-hidden flex flex-col items-center p-6 relative">
        <div className="w-full bg-blue-500 h-1 absolute bottom-0"></div>
  
        {/* Circular Image Container with Shadow */}
        <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center">
          <img src={service.imgSrc} alt={service.title} className="rounded-full" />
        </div>
  
        {/* Card Content */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <button className="text-black px-4 py-2 rounded-lg hover:bg-gray-300">
            Find a Home
          </button>
        </div>
      </div>
    ))}
  </div>
  
  {/* 2nd Main Div */}
  <div className="h-[30vh] py-32 flex justify-between px-6 md:px-72 bg-[rgb(226,239,255)] items-center">
    {detailsServices.map((service, index) => (
      <div key={index}>
        <img src={service.svgImage} alt="" />
      </div>
    ))}
  </div>
  
  </>
  
  );
};

export default OurServices;
