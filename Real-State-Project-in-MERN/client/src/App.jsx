import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import OurServices from './components/pages/OurServices';
import ExpertizePage from './components/pages/ExpertizePage';
import FeatureListening from './components/pages/FeatureListening';
import CarouselPage  from './components/pages/CarouselPage';
import Footer from './components/pages/Footer';
import AddCard from './components/pages/AddCard';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other components */}
      <Home/>
      <AboutUs/>
      <OurServices/>
      <ExpertizePage/>
      <AddCard/>
      <FeatureListening/>
      {/* <FeatureListening/> */}
      <CarouselPage/>
      <Footer/>
    </Router>
  );
}
export default App