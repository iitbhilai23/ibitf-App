import React from "react";
import SSS1 from "../assets/PDF/incubation/SSS1.pdf";
import SSS2 from "../assets/PDF/incubation/SSS2.pdf";
import "./IncubationServices.css";

const IncubationServices = () => {
  return (
    <div className="incubation-wrapper">
      <h1 className="incubation-title">Incubation Services</h1>
      <div className="incubation-panels">
        <div className="panel glass-card">
          <h2>📊 Banking Panel</h2>
          <p>
            Explore insights and documentation for our financial and banking
            services collaboration.
          </p>
          <a href={SSS1} target="_blank" rel="noopener noreferrer" className="glass-button">
            View PDF
          </a>
        </div>
        <div className="panel glass-card">
          <h2>⚖️ CA / Legal Panel</h2>
          <p>
            Access legal compliance guidelines and CA partnership resources.
          </p>
          <a href={SSS2} target="_blank" rel="noopener noreferrer" className="glass-button">
            View PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default IncubationServices;
