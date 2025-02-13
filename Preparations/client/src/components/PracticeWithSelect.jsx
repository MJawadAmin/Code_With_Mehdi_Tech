// import React, { useState } from 'react'

// const PracticeWithSelect = () => {
//     const data=[
//         {name :'jawad ', age: 25, from: 'peshawar'},
//         {name :'jawad Amin ', age: 23, from: 'Peshawar Board'},
//         {name :'jawad khan ', age: 22, from: 'peshawar1'}
//     ]
//     const [value , setValue]= useState(data[0])
//     const handleVlaue=(object)=>{
//         console.log(object)
//     }
//   return (
//     <div>
//       <select name="" id="" onChange={(e)=>handleVlaue(data[e.target.value])}></select>
//       {}
//     </div>
//   )
// }

// export default PracticeWithSelect
import React, { useState } from 'react';

const PracticeWithSelect = () => {
    const details = [
        { name: 'Jawad Amin', age: 25, image: 'image1.png', from: 'Swabi' },
        { name: 'Fida', age: 24, image: 'image2.png', from: 'Multan' },
        { name: 'Muhammad', age: 14, image: 'image3.png', from: 'Peshawar' },
        { name: 'Ibn-E-Amin', age: 15, image: 'image4.png', from: 'Mardan' },
        { name: 'Zeeshan', age: 22, image: 'image5.png', from: 'Gilgit' },
        { name: 'Yousaf', age: 23, image: 'image6.png', from: 'Islamabad' },
    ];

    const [selectedPerson, setSelectedPerson] = useState(details[0]);

    const handleSelect = (e) => {
        setSelectedPerson(details[e.target.value]); // Get the selected person from the array
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Dropdown Select */}
            <select
                onChange={handleSelect}
                className="block w-[50%] p-2 border bg-gray-200 hover:bg-gray-300"
            >
                {details.map((detail, index) => (
                    <option key={index} value={index}>
                        {detail.name}
                    </option>
                ))}
            </select>

            {/* Display Selected Person */}
            <div className="mt-5 text-center border p-4 shadow-lg w-[50%] bg-gray-100 rounded-lg">
                <img
                    src={selectedPerson.image} 
                    alt={selectedPerson.name}
                    className="h-[200px] w-[200px] mx-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-2">{selectedPerson.name}</h1>
                <h2 className="text-gray-700">{selectedPerson.age} years old</h2>
                <p className="text-gray-500">From {selectedPerson.from}</p>
            </div>
        </div>
    );
};

export default PracticeWithSelect;

