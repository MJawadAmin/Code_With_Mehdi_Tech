
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({ listings: 0 });

  useEffect(() => {
    axios.get('/api/listings/count')
      .then(response => setStats({ listings: response.data.count }))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Total Listings: {stats.listings}</p>
    </div>
  );
}

export default Dashboard;
