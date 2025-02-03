import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other components */}
      <Home/>
      <AboutUs/>
    </Router>
  );
}
export default App