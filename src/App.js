
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
import AboutIBITF from './pages/AboutIBITF';
import OrgStructure from './pages/OrgStructure';
import Thematic from './pages/Thematic';
import Schemes from './pages/Schemes';
import CallForProposal from './pages/CallForProposal';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Static Routes */}
        <Route path="/*" element={<Home />} />
        {/* <Route path="/about us" element={<About />} /> */}
        <Route path="/about-ibitf" element={<AboutIBITF />} />Organizational Structure
        <Route path="/organizational-structure" element={<OrgStructure />} />
        <Route path="/call-for-proposals" element={<CallForProposal/>} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/Projects" element={<ProjectsList />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/thematic-areas" element={<Thematic />} />
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
