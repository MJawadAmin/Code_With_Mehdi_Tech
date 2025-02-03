import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import OurServices from './components/pages/OurServices';
import ExpertizePage from './components/pages/ExpertizePage';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other components */}
      <Home/>
      <AboutUs/>
      <OurServices/>
      <ExpertizePage/>
    </Router>
  );
}
export default App