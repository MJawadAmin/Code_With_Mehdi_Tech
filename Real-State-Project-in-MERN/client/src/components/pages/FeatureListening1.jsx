import React, { useEffect, useState } from 'react';

const FeatureListening = () => {
    const [featureDetails, setFeatureDetails] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/fetchcard");
                const data = await response.json();
                if (data.status === "success") {
                    setFeatureDetails(data.data);
                }
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        };

        fetchListings();
    }, []);

    return (
        <div>
            {/** Header Section **/}
            <div className='p-10 sm:p-16 md:p-28 lg:p-44 text-center'>
                <h1 className='text-blue-500'>Featured Listings</h1>
                <h1 className=' text-lg md:text-xl lg:text-2xl font-bold'>  We Bring Your Dreams to Life</h1>
            </div>

            {/** Listings Grid **/}
            <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-10 md:px-16 lg:px-32">
                {featureDetails.map((service, index) => (
                    <div key={index} className="relative p-4 w-full sm:w-1/2 md:w-1/3 lg:w-[25%]">
                        {/** Image & Label **/}
                        <div className="relative">
                            <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs sm:text-sm md:text-base p-1 sm:p-2 rounded-md">
                                {service.value}
                            </div>
                            <img src={service.image} alt="service" className="w-full h-auto rounded-lg" />
                        </div>

                        {/** Property Details **/}
                        <div className="text-center mt-3">
                            <h1 className="text-sm sm:text-base md:text-lg font-bold">{service.stateName}</h1>
                            <p className='text-xs sm:text-sm md:text-base text-gray-400'>{service.statePlac}</p>
                            <hr className='text-gray-400 w-full mt-3' />
                        </div>

                        <div className='flex justify-between mt-2 text-xs sm:text-sm md:text-base'>
                            <p className='text-gray-600'>{service.stateScale}</p>
                            <p className='text-gray-600'>{service.stateGarages}</p>
                        </div>

                        <div className='flex justify-between text-xs sm:text-sm md:text-base'>
                            <p className='text-gray-600'>{service.stateBedrooms}</p>
                            <p className='text-gray-600'>{service.stateBathrooms}</p>
                        </div>

                        <hr className='text-gray-400 w-full mt-3' />

                        <div className='flex justify-between text-xs sm:text-sm md:text-base'>
                            <p className='text-gray-600'>{service.stateSalerName}</p>
                            <p className='text-gray-600'>{service.dayBefore}</p>
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
