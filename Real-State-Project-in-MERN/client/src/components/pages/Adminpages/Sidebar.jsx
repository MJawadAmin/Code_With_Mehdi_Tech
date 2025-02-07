
// Sidebar Component
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul>
        <li className="mb-4"><Link to="/dashboard">Dashboard</Link></li>
        <li className="mb-4"><Link to="/listings">Manage Listings</Link></li>
        <li className="mb-4"><Link to="/listings/create">Create Listing</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
