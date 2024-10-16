
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; 
import Career from './pages/Career';      
import Contact from './pages/Contact';    
import Team from './pages/Team';
import './components/Navbar.css'; 


const App = () => {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Services" element={<Services />} />  
        <Route path="/Career" element={<Career />} />       
        <Route path="/Contact" element={<Contact />} />     
        <Route path="/Team" element={<Team />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
