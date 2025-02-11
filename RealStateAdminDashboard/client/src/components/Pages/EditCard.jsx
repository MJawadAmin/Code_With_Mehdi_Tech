import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCard = () => {
  const { id } = useParams(); // ✅ Get the ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    statename: "",
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
    statevalue: /^[A-Za-z0-9\s,]+$/, // Must be exactly "For Sale" or "Rent"
    stateplace: /^[A-Za-z0-9\s,]+$/, // Letters, numbers, spaces, and commas
    statescale:  /^[A-Za-z0-9\s,]+$/, // Number + optional unit
    stategarages: /^\d+$/, // Only digits
    statesbedroom: /^\d+$/, // Only digits
    statebatbrooms: /^\d+$/, // Only digits
    statesalername: /^[A-Za-z\s]+$/, // Only letters and spaces
    daybefore: /^\d+$/, // Example: "3 days ago"
    stateprice: /^[\d$,€£₹]+$/, // Only digits
  };

  const [loading, setLoading] = useState(true);

  // ✅ Fetch card details when component loads
  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/fetchcard/${id}`);
        if (response.data.status === "success") {
          setFormData(response.data.carddata);
        } else {
          console.log("Card not found!");
        }
      } catch (error) {
        console.error("Failed to fetch card data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCardDetails();
  }, [id]);

  // ✅ Handle form field changes with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate input against regex pattern
    if (regexPatterns[name] && !regexPatterns[name].test(value) && value !== "") {
      alert(`Invalid input for ${name}`);
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/updatecard/${id}`, formData);
      if (response.data.status === "success") {
        alert("Card updated successfully!");
        navigate("/dashboard"); // Redirect after update
      }
    } catch (error) {
      console.error("Failed to update card", error);
      alert("Failed to update card. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Edit Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="statename" value={formData.statename} onChange={handleChange} className="border p-2 w-full" placeholder="State Name" required />
        <input type="text" name="statevalue" value={formData.statevalue} onChange={handleChange} className="border p-2 w-full" placeholder="State Value (For Sale/Rent)" required />
        <input type="text" name="stateplace" value={formData.stateplace} onChange={handleChange} className="border p-2 w-full" placeholder="State Place" />
        <input type="text" name="statescale" value={formData.statescale} onChange={handleChange} className="border p-2 w-full" placeholder="State Scale (e.g., 5000 sqft)" />
        <input type="text" name="stategarages" value={formData.stategarages} onChange={handleChange} className="border p-2 w-full" placeholder="Garages" />
        <input type="text" name="statesbedroom" value={formData.statesbedroom} onChange={handleChange} className="border p-2 w-full" placeholder="Bedrooms" />
        <input type="text" name="statebatbrooms" value={formData.statebatbrooms} onChange={handleChange} className="border p-2 w-full" placeholder="Bathrooms" />
        <input type="text" name="statesalername" value={formData.statesalername} onChange={handleChange} className="border p-2 w-full" placeholder="Seller Name" />
        <input type="text" name="daybefore" value={formData.daybefore} onChange={handleChange} className="border p-2 w-full" placeholder="Days Before (e.g., 3 days ago)" />
        <input type="text" name="stateprice" value={formData.stateprice} onChange={handleChange} className="border p-2 w-full" placeholder="Price" />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditCard;
