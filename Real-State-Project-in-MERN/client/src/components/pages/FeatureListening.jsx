import React, { useEffect, useState } from 'react';
import axios from 'axios';
const FeaturedListings = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardResponse = await axios.get('http://localhost:8080/api/fetchcard');
        if (cardResponse.data.status === 'success') {
          setCards(cardResponse.data.carddata);
        } else {
          console.log('No cards found!');
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center relative p-6'>
      <div className='w-full max-w-7xl'>
        <div className='text-center py-10'>
          <h1 className='text-blue-500 text-lg sm:text-xl'>Featured Listings</h1>
          <h2 className='text-xl sm:text-2xl font-bold'>We Bring Your Dreams to Life</h2>
        </div>

        <div className="gap-6 flex flex-col px-40 sm:px-10 place-items-center 
        lg:flex lg:flex-row justify-center">
          {cards.map((service, index) => (
            <div key={index} className='relative p-4 w-full sm:w-1/2 md:w-1/3 lg:w-[25%]  border  overflow-hidden bg-white  rounded-lg shadow-md'>
              <div className='relative'>
                <span className='absolute top-2 left-2 bg-gray-900 text-white text-sm px-2 py-1 rounded-md'>
                  {service.statevalue}
                </span>
                <img
                  src={`http://localhost:8080${service.stataimage}`}
                  alt='property'
                  className='w-full h-48 object-cover'
                  onError={(e) => (e.target.src = 'fallback.jpg')}
                />
              </div>

              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{service.statename}</h3>
                <p className='text-gray-500 text-sm'>{service.stateplace}</p>
                <hr className='my-2' />

                <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                  <p>{service.statescale}</p>
                  <p>{service.stategarages}</p>
                  <p>{service.statesbedroom} Beds</p>
                  <p>{service.statebatbrooms} Baths</p>
                </div>

                <hr className='my-2' />
                <div className='flex justify-between text-sm text-gray-600'>
                  <p>{service.statesalername}</p>
                  <p>{service.daybefore}</p>
                </div>

                <button className='bg-blue-700 text-white w-full py-2 mt-4 rounded-md font-semibold'>
                  {service.stateprice}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
