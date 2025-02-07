
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditListing() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/listings/${id}`)
      .then(response => setTitle(response.data.title))
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/listings/${id}`, { title });
    navigate('/listings');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Listing</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Listing Title" 
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Update</button>
      </form>
    </div>
  );
}

export default EditListing;
