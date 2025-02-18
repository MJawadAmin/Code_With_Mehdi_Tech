import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddCard from "./Cardform";
import AgentCard from "./AgentCard";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Show only 3 cards per page

  const toggleAddCard = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/fetchcard");
        if (response.data.status === "success") {
          setCards(response.data.carddata);
          setFilteredCards(response.data.carddata);
        } else {
          console.log("No cards found!");
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = cards.filter((card) =>
      card.statename.toLowerCase().includes(query)
    );
    setFilteredCards(filtered);
    setCurrentPage(1);
  };

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
        setFilteredCards(filteredCards.filter((card) => card._id !== id));
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

  // Pagination Logic
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const paginationNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationNumbers.push(i);
    } else if (paginationNumbers[paginationNumbers.length - 1] !== "...") {
      paginationNumbers.push("...");
    }
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="p-6">
      <div className="absolute top-5 right-5">
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Logout
        </button>
      </div>

      <div className="relative w-96 mb-6 mt-10 mx-auto">
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          className="h-10 w-full pl-10 pr-4 rounded-3xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search properties..."
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">Properties</h1>
      <div className="flex justify-center">
  <button onClick={toggleAddCard} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
    Toggle Add Card
  </button>
</div>
      {isOpen && <AddCard />}

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {currentCards.length > 0 ? (
          currentCards.map((service) => (
            <div key={service._id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border bg-white rounded-lg shadow-md">
              <img
                src={`http://localhost:8080${service.stataimage}`}
                alt="property"
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = "fallback.jpg")}
              />
              <div className="text-center mt-3">
                <h1 className="text-lg font-bold">{service.statename}</h1>
                <p className="text-gray-400">{service.stateplace}</p>
              </div>
              <button className="bg-blue-700 text-white w-full h-10 mt-4 rounded-md">
                {service.stateprice}
              </button>
              <button className="bg-yellow-600 text-white w-full h-10 mt-2 rounded-md" onClick={() => navigate(`/edit-card/${service._id}`)}>
                Update
              </button>
              <button className="bg-red-600 text-white w-full h-10 mt-2 rounded-md" onClick={() => handleDelete(service._id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg">No matching properties found.</p>
        )}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {paginationNumbers.map((num, index) => (
          <button key={index} onClick={() => typeof num === 'number' && setCurrentPage(num)} className={`px-4 py-2 ${currentPage === num ? "bg-blue-500 text-white" : "bg-gray-300"} rounded-md`}>{num}</button>
        ))}
      </div>
      <AgentCard />
    </div>
  );
};

export default Dashboard;
