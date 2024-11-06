import React from "react";
import { siteContent } from "../constants/content";
import "../styles/main.css"; // Your custom CSS
import VisionMission from "../components/VisionMission";
import Objective from "../components/Objective";
import Journey from "../components/Journey";
import Achievements from "../components/Achievements";
import VisionCard from "../components/VisionCard";

function AboutIBITF() {
  const { title, description, nodalCenter, vision } = siteContent.aboutPage;

  return (
    <div className="about-ibitf-page">
      <section className="about-hero">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <Journey />
      <section className="nodal-center">
        <h2>{nodalCenter.title}</h2>
        <p>{nodalCenter.description}</p>
      </section>
      <VisionMission />
      <VisionCard />
      {/* Nodal Center Section */}
      

      {/* Vision Section */}
    
     
      <Objective />
    
    </div>
  );
}

export default AboutIBITF;
