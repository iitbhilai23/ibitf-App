import React from "react";
import { siteContent } from "../constants/content";
import {
  FaLightbulb,
  FaGraduationCap,
  FaHandshake,
  FaClipboardList,
} from "react-icons/fa"; // Importing React Icons
import "./AboutSection.css";

const iconMapping = {
  "Entrepreneurship and Startup Ecosystem": <FaLightbulb />,
  "HRD and Skilling": <FaGraduationCap />,
  Collaborations: <FaHandshake />,
  "Research & Development": <FaClipboardList />,
};

const ObjectivesPage = () => {
  return (
    <div className="objectives-container">
      <h1 className="objectives-title">Objectives</h1>
      <div className="objectives-list">
        {siteContent.objective.map((item, index) => (
          <div key={index} className="objective-card">
            <h2 className="objective-heading">
              {iconMapping[item.heading]}
              {item.heading}
            </h2>
            <ul className="objective-subheading">
              {item.subHeading.map((subItem, subIndex) => (
                <li key={subIndex} className="objective-point">
                  {subItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectivesPage;
