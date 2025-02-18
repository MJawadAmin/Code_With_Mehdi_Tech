import React, { useState } from "react";

const Event1 = () => {
  const details = [
    { name: "Red", color: "red" },
    { name: "Blue", color: "blue" },
    { name: "Green", color: "green" },
    { name: "Yellow", color: "yellow" },
    { name: "Purple", color: "purple" },
  ];

  const [change, setChange] = useState(0);

  const handleChange = (event) => {
    const index = event.target.value;
    setChange(index);
    document.body.style.backgroundColor = details[index].color; // Change background color
  };

  return (
    <div>
      <select name="" id="" onChange={handleChange} value={change}>
        {details.map((service, index) => {
          return <option value={index} key={index}>{service.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Event1;
