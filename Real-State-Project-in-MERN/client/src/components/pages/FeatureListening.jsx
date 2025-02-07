import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCard from './AddCard';

const FeatureListening = () => {
    const [cards, setCards] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

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

    const handleDelete = async (id) => {
        if (!id) {
            alert("Invalid card ID!");
            return;
        }
    
        try {
            console.log("id to delete", id);
            const response = await axios.delete(`http://localhost:8080/api/removecard/${id}`); // Fix: Use 'removecard' instead of 'deletecard'
    
            if (response.data.status === 'success') {
                alert("Card deleted successfully!");
                setCards(cards.filter(card => card._id !== id)); // Fix: Ensure _id is used
            } else {
                alert("Failed to delete card: " + response.data.message);
            }
        } catch (error) {
            alert("Error deleting card. Please try again.");
            console.error("Error deleting card:", error);
        }
    };
    
    
    
    return (
        <div className='border-4 flex flex-col items-center justify-center relative'>
            <button onClick={toggleButton} className='rounded-xl bg-blue-400 px-5 py-3 z-50'>
                Click me Add States
            </button>
            <div className='absolute top-0 z-50 flex flex-col items-center'>
                {isOpen && <AddCard />}
                <button onClick={toggleButton} className='rounded-xl bg-blue-400 px-5 py-3 z-50'>Back</button>
            </div>

            <div className={`${isOpen ? "blur-md" : ""}`}>
                <div className='p-10 sm:p-16 md:p-28 lg:p-44 text-center'>
                    <h1 className='text-blue-500'>Featured Listings</h1>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>We Bring Your Dreams to Life</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-10 md:px-16 lg:px-32">
                    {cards.map((service, index) => (
                        <div key={index} className="relative p-4 w-full sm:w-1/2 md:w-1/3 lg:w-[25%]">
                            <div className="relative">
                                <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs sm:text-sm md:text-base p-1 sm:p-2 rounded-md">
                                    {service.statevalue}
                                </div>
                                <img 
                                    src={`http://localhost:8080${service.stataimage}`} 
                                    alt="property" 
                                    className="w-full h-auto rounded-lg" 
                                    onError={(e) => e.target.src = "fallback.jpg"}
                                />
                            </div>

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
{/* 
                            <button 
    className='bg-red-600 text-white w-full h-10 mt-2 rounded-md'
    onClick={() => handleDelete(service._id)} // Fix: Use _id instead of id
>
    Delete
</button> */}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureListening;
