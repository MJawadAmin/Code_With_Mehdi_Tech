
// Listings Page
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('/api/listings')
      .then(response => setListings(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Listings</h1>
      <ul>
        {listings.map(listing => (
          <li key={listing.id} className="mb-4">
            {listing.title} 
            <Link to={`/listings/edit/${listing.id}`} className="text-blue-500 ml-4">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;