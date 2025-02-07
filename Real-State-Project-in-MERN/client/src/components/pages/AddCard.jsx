import React, { useState } from "react";
import axios from "axios";

function AddCard() {
  const [formData, setFormData] = useState({
    statename: "",
    stataimage: null,
    statevalue: "",
    stateplace: "",
    statescale: "",
    stategarages: "",
    statesbedroom: "",
    statebatbrooms: "",
    statesalername: "",
    daybefore: "",
    stateprice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, stataimage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    
    // Append all form data to the FormData object
    Object.keys(formData).forEach((key) => {
      if (key === "stataimage") {
        if (formData.stataimage) {
          data.append("stataimage", formData.stataimage); // Image field handling
        }
      } else {
        data.append(key, formData[key]?.toString() || ""); // Convert to string
      }
    });

    try {
      // Send form data with POST request to the backend
      const response = await axios.post("http://localhost:8080/api/createcard", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        alert("Card added successfully!");
        setFormData({
          statename: "",
          stataimage: null,
          statevalue: "",
          stateplace: "",
          statescale: "",
          stategarages: "",
          statesbedroom: "",
          statebatbrooms: "",
          statesalername: "",
          daybefore: "",
          stateprice: "",
        });
      } else {
        alert("Failed to add card! Backend may not be receiving all fields.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while adding card.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-96">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Card</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="statename" placeholder="State Name" value={formData.statename} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="file" name="stataimage" accept="image/*" onChange={handleImageChange} required />

          <input type="text" name="statevalue" placeholder="For Sale / Rent" value={formData.statevalue} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="stateplace" placeholder="Location" value={formData.stateplace} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statescale" placeholder="Size (e.g., 2350 Square Feet)" value={formData.statescale} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="stategarages" placeholder="Garages" value={formData.stategarages} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statesbedroom" placeholder="Bedrooms" value={formData.statesbedroom} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statebatbrooms" placeholder="Bathrooms" value={formData.statebatbrooms} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statesalername" placeholder="Seller Name" value={formData.statesalername} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="daybefore" placeholder="Days Ago (e.g., 1 day ago)" value={formData.daybefore} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="stateprice" placeholder="Price (e.g., $5,304,000)" value={formData.stateprice} onChange={handleChange} required className="border p-2 rounded w-full" />
        </div>

        <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add Card
        </button>
      </form>
    </div>
  );
}

export default AddCard;
