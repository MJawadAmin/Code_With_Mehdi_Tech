import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddCard from "./Cardform";
import AgentCard from "./AgentCard";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/fetchcard");
        if (response.data.status === "success") {
          setCards(response.data.carddata);
        } else {
          console.log("No cards found!");
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
      const response = await axios.delete(`http://localhost:8080/api/removecard/${id}`);
      if (response.data.status === "success") {
        alert("Card deleted successfully!");
        setCards(cards.filter((card) => card._id !== id));
      } else {
        alert("Failed to delete card: " + response.data.message);
      }
    } catch (error) {
      alert("Error deleting card. Please try again.");
      console.error("Error deleting card:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/logout");
      localStorage.removeItem("authToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="absolute top-5 right-5">
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Logout
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-96 mb-6 mx-auto">
        <input
          type="search"
          className="h-10 w-full pl-10 pr-4 rounded-3xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">Properties</h1>
      <div className="flex flex-col items-center justify-center relative">
        <button onClick={toggleButton} className="rounded-xl bg-blue-400 px-5 py-3 z-50">
          Add Property
        </button>

        {/* Add Card Form */}
        {isOpen && (
          <div className="absolute top-0 z-50 flex flex-col items-center bg-white p-5 shadow-lg">
            <AddCard />
            <button onClick={toggleButton} className="rounded-xl bg-red-400 px-5 py-3 mt-2">
              Close
            </button>
          </div>
        )}

        {/* Listings */}
        <div className={`${isOpen ? "blur-md" : ""} w-full`}>
          <div className="p-10 text-center">
            <h1 className="text-blue-500">Featured Listings</h1>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">We Bring Your Dreams to Life</h1>
          </div>

          <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-10 md:px-16 lg:px-32 h-[100vh] overflow-y-scroll">
            {cards.map((service) => (
              <div key={service._id} className="relative p-4 w-full h-[80vh] sm:w-1/2 md:w-1/3 lg:w-[25%] border bg-white rounded-lg shadow-md">
                {/* Property State */}
                <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs sm:text-sm md:text-base p-1 sm:p-2 rounded-md">
                  {service.statevalue}
                </div>

                {/* Property Image */}
                <img
                  src={`http://localhost:8080${service.stataimage}`} // Ensure correct URL
                  alt="property"
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = "fallback.jpg")}
                />

                {/* Property Details */}
                <div className="text-center mt-3">
                  <h1 className="text-sm sm:text-base md:text-lg font-bold">{service.statename}</h1>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">{service.stateplace}</p>
                  <hr className="text-gray-400 w-full mt-3" />
                </div>

                {/* Additional Info */}
                <div className="flex justify-between mt-2 text-xs sm:text-sm md:text-base">
                  <p className="text-gray-600">{service.statescale}</p>
                  <p className="text-gray-600">{service.stategarages}</p>
                </div>
                <div className="flex justify-between text-xs sm:text-sm md:text-base">
                  <p className="text-gray-600">{service.statesbedroom}</p>
                  <p className="text-gray-600">{service.statebatbrooms} Baths</p>
                </div>

                <hr className="text-gray-400 w-full mt-3" />

                {/* Seller Info */}
                <div className="flex justify-between text-xs sm:text-sm md:text-base">
                  <p className="text-gray-600">{service.statesalername}</p>
                  <p className="text-gray-600">{service.daybefore} </p>
                </div>

                {/* Price Button */}
                <button className="bg-blue-700 text-white w-full h-10 mt-4 rounded-md">
                  {service.stateprice}
                </button>

                {/* Update & Delete Buttons */}
                <button className="bg-yellow-600 text-white w-full h-10 mt-2 rounded-md" onClick={() => navigate(`/edit-card/${service._id}`)}>
                  Update
                </button>
                <button className="bg-red-600 text-white w-full h-10 mt-2 rounded-md" onClick={() => handleDelete(service._id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AgentCard />
    </div>
  );
};

export default Dashboard;
