
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Team from './pages/Team';
import ProjectsList from './pages/ProjectsList'; 
import ProjectTemplate from './pages/ProjectTemplate'; 
import { pagesConfig } from './constants/pagesConfig'; 
import './components/Navbar.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Static Routes */}
        <Route path="/*" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects-list" element={<ProjectsList />} />
        {/* <Route path="/career" element={<Career />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />

        {/* Dynamic Routes for each page based on pagesConfig */}
        {pagesConfig.map(({ path }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectTemplate />
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
