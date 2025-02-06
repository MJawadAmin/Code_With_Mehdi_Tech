import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddCard from './AddCard';

const FeatureListening = () => {

  const [cards , setCards] = useState([]);
  


  useEffect(()=>{
      const fetchcards =  async () =>{
          const cardResponse = await axios.get('http://localhost:8080/api/fetchcard');
          if(cardResponse.data.status === 'success'){
              setCards(cardResponse.data.carddata);
          } else {
              console.log('Agents not found!')
          
              const showIfCardNotAvailable=[{
                  image:"AgentImage.png"
              }]
          }
      }

      if(cards.length === 0){
          fetchcards();
      }
  },[])

  // Testing by logging data in agents
  useEffect(()=> {
      console.log('Agents');
  },[cards])



    const FeatureDetails = [
        {
            stateName: "1963 S Crescent Heights Blvd",
            image: 'RentAHomeImage.svg',
            value: "For Sale",
            statePlac: "Hills, CA 90210",
            stateScale: "2350 Square Feet",
            stateGarages: "2 Garages",
            stateBedrooms: "20 Bedrooms",
            stateBathrooms: "8 Bathrooms",
            stateSalerName: "Michel Smith",
            dayBefore: "1 days ago",
            stateprice: "$5,304,000"
        },
        {
            stateName: "28 Ridge Road, Manhasset",
            image: 'RentAHomeImage.svg',
            value: "For Rent",
            statePlac: "Hills, CA 90210",
            stateScale: "2350 Square Feet",
            stateGarages: "2 Garages",
            stateBedrooms: "20 Bedrooms",
            stateBathrooms: "8 Bathrooms",
            stateSalerName: "Michel Smith",
            dayBefore: "1 days ago",
            stateprice: "$5,304,000"
        },
        {
            stateName: "1963 S Crescent Heights Blvd",
            image: 'RentAHomeImage.svg',
            value: "For Sale",
            statePlac: "Hills, CA 90210",
            stateScale: "2350 Square Feet",
            stateGarages: "2 Garages",
            stateBedrooms: "20 Bedrooms",
            stateBathrooms: "8 Bathrooms",
            stateSalerName: "Michel Smith",
            dayBefore: "1 days ago",
            stateprice: "$5,304,000"
        },
        {
            stateName: "1963 S Crescent Heights Blvd",
            image: 'RentAHomeImage.svg',
            value: "For Sale",
            statePlac: "Hills, CA 90210",
            stateScale: "2350 Square Feet",
            stateGarages: "2 Garages",
            stateBedrooms: "20 Bedrooms",
            stateBathrooms: "8 Bathrooms",
            stateSalerName: "Michel Smith",
            dayBefore: "1 days ago",
            stateprice: "$5,304,000"
        },
        {
            stateName: "28 Ridge Road, Manhasset",
            image: 'RentAHomeImage.svg',
            value: "For Rent",
            statePlac: "Hills, CA 90210",
            stateScale: "2350 Square Feet",
            stateGarages: "2 Garages",
            stateBedrooms: "20 Bedrooms",
            stateBathrooms: "8 Bathrooms",
            stateSalerName: "Michel Smith",
            dayBefore: "1 days ago",
            stateprice: "$5,304,000"
        },
        {
            stateName: "1963 S Crescent Heights Blvd",
            image: 'RentAHomeImage.svg',
            value: "For Sale",
            statePlac: "Hills, CA 90210",
            stateScale: "2350 Square Feet",
            stateGarages: "2 Garages",
            stateBedrooms: "20 Bedrooms",
            stateBathrooms: "8 Bathrooms",
            stateSalerName: "Michel Smith",
            dayBefore: "1 days ago",
            stateprice: "$5,304,000"
        }
    ];

    return (
        <div>
          stataimage: stataimage,
          <AddCard />
            {/** Header Section **/}
            <div className='p-10 sm:p-16 md:p-28 lg:p-44 text-center'>
                <h1 className='text-blue-500'>Featured Listings</h1>
                <h1 className=' text-lg md:text-xl lg:text-2xl font-bold'>  We Bring Your Dreams to Life</h1>
            </div>

            {/** Listings Grid **/}
            <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-10 md:px-16 lg:px-32">
                {cards.map((service, index) => (
                    <div key={index} className="relative p-4 w-full sm:w-1/2 md:w-1/3 lg:w-[25%]">
                        {/** Image & Label **/}
                        <div className="relative">
                            <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs sm:text-sm md:text-base p-1 sm:p-2 rounded-md">
                                {service.statevalue}
                            </div>
                            <img src={service.image} alt="service" className="w-full h-auto rounded-lg" />
                        </div>

                        {/** Property Details **/}
                        <div className="text-center mt-3">
                            <h1 className="text-sm sm:text-base md:text-lg font-bold">{service.statename}</h1>
                            <p className='text-xs sm:text-sm md:text-base text-gray-400'>{service.stateplace}</p>
                            <hr className='text-gray-400 w-full mt-3' />
                        </div>

                        <div className='flex justify-between mt-2 text-xs sm:text-sm md:text-base'>
                            <p className='text-gray-600'>{service.statescale}</p>
                            <p className='text-gray-600'>{service.stategarages}</p>
                        </div>

                        <div className='flex justify-between text-xs sm:text-sm md:text-base'>
                            <p className='text-gray-600'>{service.statesbedroom}</p>
                            <p className='text-gray-600'>{service.statebatbrooms}</p>
                        </div>

                        <hr className='text-gray-400 w-full mt-3' />

                        <div className='flex justify-between text-xs sm:text-sm md:text-base'>
                            <p className='text-gray-600'>{service.statesalername}</p>
                            <p className='text-gray-600'>{service.daybefore}</p>
                        </div>

                        <button className='bg-blue-700 text-white w-full h-10 mt-4 rounded-md'>
                            {service.stateprice}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureListening;