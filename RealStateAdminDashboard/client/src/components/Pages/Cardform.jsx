import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Papa from 'papaparse';

function Cardform() {
  const navigate = useNavigate()
  const [data , setData]= useState([])
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

  const regexPatterns = {
    statename: /^[A-Za-z\s]+$/, // Only letters and spaces
    statevalue:  /^[A-Za-z\s]+$/,   // Either "For Sale" or "Rent   /^(For Sale|Rent)$/,"
    stateplace: /^[A-Za-z0-9\s]+$/, // Letters, spaces, and commas
    statescale: /^[A-Za-z0-9\s]+$/, // Numbers followed by optional unit /^\d+\s?(Square Feet|sq ft|sqft)?$/
    stategarages: /^\d+$/, // Only digits
    statesbedroom: /^\d+$/, // Only digits
    statebatbrooms: /^\d+$/, // Only digits
    statesalername: /^[A-Za-z\s]+$/, // Only letters and spaces /^[A-Za-z\s]+$/,
    daybefore: /^\d+$/,  // Example: "1 day ago", "3 days ago  /^\d+\s?(day|days) ago$/,"
    stateprice:  /^\d+$/,  // Price format e.g., $5,304,000 or 5304000 /^\$?\d{1,3}(,\d{3})*(\.\d{1,2})?$/,
  };
  const handleFileUplaod =(e)=>{
    const file= e.target.files[0]
    Papa.parse(file,{
      header: true,
      complete: (results)=>{
        setData(results.data)
      }
    })

  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (regexPatterns[name] && !regexPatterns[name].test(value) && value !== "") {
      alert(`Invalid input for ${name}`);
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, stataimage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "stataimage") {
        if (formData.stataimage) {
          data.append("stataimage", formData.stataimage);
        }
      } else {
        data.append(key, formData[key]?.toString() || "");
      }
    });

    try {
      const response = await axios.post("http://localhost:8080/api/createcard", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        alert("Card added successfully!");
      
        // ✅ Ensure state update happens first before navigation
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
      
        setTimeout(() => {
          navigate('/dashboard');
        }, 100); 
      
      } else {
        alert("Failed to add card! Backend may not be receiving all fields.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while adding card.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Card</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-5 w-full gap-2">
          <input type="text" name="statename" placeholder="State Name" value={formData.statename} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statevalue" placeholder="For Sale / Rent" value={formData.statevalue} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="stateplace" placeholder="Location" value={formData.stateplace} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statescale" placeholder="Size (e.g., 2350 Square Feet)" value={formData.statescale} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="stategarages" placeholder="Garages" value={formData.stategarages} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statesbedroom" placeholder="Bedrooms" value={formData.statesbedroom} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statebatbrooms" placeholder="Bathrooms" value={formData.statebatbrooms} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="statesalername" placeholder="Seller Name" value={formData.statesalername} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="daybefore" placeholder="Days Ago (e.g., 1 day ago)" value={formData.daybefore} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="stateprice" placeholder="Price (e.g., $5,304,000)" value={formData.stateprice} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="file" name="statefiles" placeholder="Files" value={formData.stateprice} onChange={handleFileUplaod} required className="border p-2 rounded w-full" />
        </div>
        <div className="flex items-center justify-center w-full mt-4">
          <label className="flex flex-col items-center px-4 py-6 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-100 transition">
            <svg
              className="w-10 h-10 text-gray-500 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V4m0 0L3 8m4-4l4 4M16 16v-4m0 0l-4 4m4-4l4 4M3 20h18"
              ></path>
            </svg>
            <input type="file" name="stataimage" accept="image/*" onChange={handleImageChange} required />
          </label>
        </div>

        <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add Card
        </button>
      </form>
    </div>
  );
}

export default Cardform;
