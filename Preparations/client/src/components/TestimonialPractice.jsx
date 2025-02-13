// import React, { useState } from 'react';
// import SmileImage from '../assets/TestimonialImages/smileImage.png';

// const TestimonialPractice = () => {
//   const detailsAndImages = [
//     {
//       image: SmileImage,
//       name: 'John Doe',
//       age: 23,
//       from: 'Mardan',
//     },
//     {
//       image: SmileImage,
//       name: 'Jane Smith',
//       age: 25,
//       from: 'Peshawar',
//     },
//     {
//       image: SmileImage,
//       name: 'Alice Johnson',
//       age: 30,
//       from: 'Islamabad',
//     },
//   ];

//   const [active, setActive] = useState(0);

//   const handlePrev = () => {
//     setActive((prevIndex) =>
//       prevIndex === 0 ? detailsAndImages.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActive((prevIndex) =>
//       prevIndex === detailsAndImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div>
//       {/* Dropdown to Navigate Testimonials */}
//       <select onChange={(e) => {
//         if (e.target.value === 'prev') handlePrev();
//         if (e.target.value === 'next') handleNext();
//       }}>
//         <option value="prev">Previous</option>
//         <option value="next">Next</option>
//       </select>

//       <h1 className="text-2xl font-bold">
//         Hello, This is a Practice Page for Testimonial
//       </h1>

//       {/* Display Active Testimonial */}
//       <div>
//         <img src={detailsAndImages[active].image} alt="Profile" />
//         <h1>{detailsAndImages[active].name}</h1>
//         <h1>{detailsAndImages[active].age} years old</h1>
//         <h1>From {detailsAndImages[active].from}</h1>
//       </div>

//       {/* Manual Navigation Buttons */}
//       <button onClick={handlePrev}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default TestimonialPractice;

// import React, { useState } from 'react';
// import SmileImage from '../assets/TestimonialImages/smileImage.png';

// const TestimonialPractice = () => {
//   const detailsAndImages = [
//     { image: SmileImage, name: 'John Doe', age: 23, from: 'Mardan' },
//     { image: SmileImage, name: 'Jane Smith', age: 25, from: 'Peshawar' },
//     { image: SmileImage, name: 'Alice Johnson', age: 30, from: 'Islamabad' },
//     { image: SmileImage, name: 'Bob Martin', age: 28, from: 'Karachi' },
//     { image: SmileImage, name: 'Charlie Brown', age: 32, from: 'Lahore' },
//     { image: SmileImage, name: 'David Wilson', age: 29, from: 'Quetta' },
//     { image: SmileImage, name: 'Emma Watson', age: 27, from: 'Faisalabad' },
//   ];

//   const [visibleCount, setVisibleCount] = useState(0); // Default to showing 3 testimonials

//   return (
//     <div>
//       {/* Dropdown for Selecting Number of Testimonials */}
//       <select
//         onChange={(e) => setVisibleCount(parseInt(e.target.value, 10))}
//         className="border p-2"
//       >
//         <option value="1">Show 1</option>
//         <option value="2">Show 2</option>
//         <option value="3">Show 3</option>
//         <option value="4">Show 4</option>
//         <option value="5">Show 5</option>
//         <option value="6">Show 6</option>
//         <option value="7">Show 7</option>
//       </select>

//       <h1 className="text-2xl font-bold mt-4">
//         Hello, This is a Practice Page for Testimonial
//       </h1>

//       {/* Display Selected Number of Testimonials */}
//       {detailsAndImages.slice(0, visibleCount).map((service, index) => (
//         <div key={index} className="border p-4 mt-2 rounded shadow">
//           <img src={service.image} alt="Profile" className="w-16 h-16 rounded-full" />
//           <h1 className="font-bold">{service.name}</h1>
//           <h2>{service.age} years old</h2>
//           <h3>From {service.from}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestimonialPractice;

// import React, { useState } from 'react';
// import SmileImage from '../assets/TestimonialImages/smileImage.png';

// const TestimonialPractice = () => {
//   const detailsAndImages = [
//     { image: SmileImage, name: 'John Doe', age: 23, from: 'Mardan' },
//     { image: SmileImage, name: 'Jane Smith', age: 25, from: 'Peshawar' },
//     { image: SmileImage, name: 'Alice Johnson', age: 30, from: 'Islamabad' },
//     { image: SmileImage, name: 'Bob Martin', age: 28, from: 'Karachi' },
//     { image: SmileImage, name: 'Charlie Brown', age: 32, from: 'Lahore' },
//     { image: SmileImage, name: 'David Wilson', age: 29, from: 'Quetta' },
//     { image: SmileImage, name: 'Emma Watson', age: 27, from: 'Faisalabad' },
//   ];

//   const [visibleCount, setVisibleCount] = useState(0);
//   const [selectedName, setSelectedName] = useState(null);

//   const filteredTestimonials = selectedName
//     ? detailsAndImages.filter((item) => item.name === selectedName)
//     : detailsAndImages.slice(0, visibleCount);

//   return (
//     <div>
//       {/* Dropdown for Selecting Number of Testimonials */}
//       <select
//         onChange={(e) => setVisibleCount(parseInt(e.target.value, 10))}
//         className="border p-2"
//       >
//         <option value="1">Show 1</option>
//         <option value="2">Show 2</option>
//         <option value="3">Show 3</option>
//         <option value="4">Show 4</option>
//         <option value="5">Show 5</option>
//         <option value="6">Show 6</option>
//         <option value="7">Show 7</option>
//       </select>

//       <h1 className="text-2xl font-bold mt-4">
//         Hello, This is a Practice Page for Testimonial
//       </h1>

//       {/* Display Filtered Testimonials */}
//       {filteredTestimonials.map((service, index) => (
//         <div key={index} className="border p-4 mt-2 rounded shadow">
//           <img src={service.image} alt="Profile" className="w-16 h-16 rounded-full" />
//           <h1
//             className="font-bold cursor-pointer text-blue-500"
//             onClick={() => setSelectedName(service.name)}
//           >
//             {service.name}
//           </h1>
//           <h2>{service.age} years old</h2>
//           <h3>From {service.from}</h3>
//         </div>
//       ))}

//       {/* Reset Button to Show All */}
//       {selectedName && (
//         <button
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           onClick={() => setSelectedName(null)}
//         >
//           Show All
//         </button>
//       )}
//     </div>
//   );
// };

// export default TestimonialPractice;



import React, { useState } from 'react';
import image1 from '../../public/image1.png'
import image2 from '../../public/image2.png'
import image3 from '../../public/image3.png'
import image4 from '../../public/image4.png'
import image5 from '../../public/image5.png'
import image6 from '../../public/image6.png'
import image7 from '../../public/image7.png'

const TestimonialPractice = () => {
  const detailsAndImages = [
    { image: image1, name: 'John Doe', age: 23, from: 'Mardan' },
    { image: image2, name: 'Jane Smith', age: 25, from: 'Peshawar' },
    { image: image3, name: 'Alice Johnson', age: 30, from: 'Islamabad' },
    { image:image4, name: 'Bob Martin', age: 28, from: 'Karachi' },
    { image:image5, name: 'Charlie Brown', age: 32, from: 'Lahore' },
    { image: image6, name: 'David Wilson', age: 29, from: 'Quetta' },
    { image:image7, name: 'Emma Watson', age: 27, from: 'Faisalabad' },
  ];

  const [selectedPerson, setSelectedPerson] = useState(detailsAndImages[0]); // Default to first person

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-lg font-bold mb-4">Select a Person</h2>
        <ul>
          {detailsAndImages.map((person, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer hover:bg-blue-100 rounded ${
                selectedPerson.name === person.name ? 'bg-blue-200' : ''
              }`}
              onClick={() => setSelectedPerson(person)}
            >
              {person.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white shadow-lg p-6 rounded-lg w-[300px] text-center">
          <img
            src={selectedPerson.image}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h1 className="font-bold text-xl mt-2">{selectedPerson.name}</h1>
          <h2 className="text-gray-600">{selectedPerson.age} years old</h2>
          <h3 className="text-gray-500">From {selectedPerson.from}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPractice;
