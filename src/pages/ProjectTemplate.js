import React from "react";
import { useLocation } from "react-router-dom";
import { pagesConfig } from "../constants/pagesConfig";
import "./ProjectTemplate.css";
import objectiveLogo from '../assets/vector image/objective.svg';
import workshopLogo from '../assets/vector image/workshop.svg';
import progressLogo from '../assets/vector image/progress.svg';
import publicationLogo from '../assets/vector image/publication.svg';
import AchievementLogo from '../assets/vector image/Achievement.svg';
import { Box } from "@mui/material";

const ProjectTemplate = () => {
  const location = useLocation();
  const currentPage = pagesConfig.find(
    (page) => page.path === location.pathname
  );



  if (!currentPage) {
    return <div style={styles.notFound}>Page not found</div>;
  }

  const renderDescription = (description) => {
    // If description is a string, split by newline and return lines with <br />
    if (typeof description === "string") {
      return description.split("/n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }

    // If description is an array, map through it
    if (Array.isArray(description)) {
      return description.map((section, index) => (
        <div key={index} style={styles.section}>
          <h2 style={styles.sectionHeading}>{section.heading}</h2>
          <p style={styles.sectionDescription}>
            {section.description.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ));
    }
    return null;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{currentPage.title}</div>
      <div style={styles.divider}></div>
      <div className="sub-text-title">
        <div className={currentPage.category !== "event" ? "pi-section" : ""}>
        <span className="pi-name">=&gt; {currentPage.piName}</span>
        </div>
        <div  className={currentPage.category !== "event" ? "duration-section" : ""}>
        <div className="dates-subTxt">
          <span className="date">{currentPage.date}</span>
          {currentPage.category !== "event" && (
            <span className="date">
              Project Duration :&nbsp;
              <strong>{currentPage.duration}</strong>
            </span>
          )}
        </div>
        </div>
      </div>
      {/* Image Gallery */}
      <div
        className="contents"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div style={styles.imageContainer}>
          {currentPage.images.length > 0 ? (
            currentPage.images.map((image, index) => (
              <div
                key={index}
                style={styles.imageWrapper}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={require(`../${image || ""}`)}
                  alt={`${currentPage.title} image ${index + 1}`}
                  style={styles.image}
                />
              </div>
            ))
          ) : (
            <p style={styles.noImages}>No images available for this {currentPage.category}.</p>
          )}
        </div>
        <Box 
          sx={{
            backgroundColor: 'rgba(58, 16, 120, 0.8)', // Reduced opacity
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            padding: "30px", // Add padding for content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundImage: "linear-gradient(135deg, rgba(58, 16, 120, 0.8), rgba(255, 64, 129, 0.7))", // Subtle gradient for modern look
            color: "#fff", // White text color for contrast
          }}
        >
        {currentPage.category !== "event" && (
          <Box sx={{fontSize: "30px", textTransform: 'uppercase'}}>
            Project Objectives
            <div style={styles.divider}></div>
            </Box>
        )}
        <div
          className={
            currentPage.category !== "event"
              ? "obj-container"
              : "obj-container-event"
          }
        >
          {Array.isArray(currentPage.description) ? (
            currentPage.description.map((section, index) => (
              <div key={index} style={styles.section}>
                <h2 style={styles.sectionHeading}>{section.heading}</h2>
                <p style={styles.sectionDescription}>{section.description}</p>
              </div>
            ))
          ) : (
            <span style={styles.boxDescription}>
              {renderDescription(currentPage.description)}
            </span>
          )}
          {currentPage.category !== "event" && (
            <div className="obj-img">
              <img
                src={objectiveLogo}
                alt="project objective logo"
                style={styles.image}
              />
            </div>
          )}
        </div>
        </Box>
        {currentPage.workshop !== "" && currentPage.category !== "event" && (
          <>
          <Box sx={{
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            padding: "30px", // Add padding for content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
        
          }}>
            <div className="obj-cls">
              Work Shop Details
              <div style={styles.divider}></div>
            </div>
            <div className="obj-container">
            <div className="obj-img">
              <img
                src={workshopLogo}
                alt="project objective logo"
                style={styles.image}
              />
            </div>
              <span style={styles.description}>{currentPage.workshop}</span>
            </div>
            </Box>
          </>
        )}
        {currentPage.technicalDetails !== "" &&
          currentPage.category !== "event" && (
            <>
            <Box sx={{
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            padding: "30px", // Add padding for content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
        
          }}>
              <div className="obj-cls">
                Technical Progress
                <div style={styles.divider}></div>
              </div>
              <div className="obj-container">
                <span style={styles.description}>
                  {currentPage.technicalDetails}
                </span>
                <div className="obj-img">
              <img
                src={progressLogo}
                alt="project objective logo"
                style={styles.image}
              />
            </div>
              </div>
              </Box>
            </>
          )}
        {currentPage.publications !== "" &&
          currentPage.category !== "event" && (
            <>
            <Box sx={{
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            padding: "30px", // Add padding for content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
        
          }}>
              <div className="obj-cls">
                Publications
                <div style={styles.divider}></div>
              </div>
              <div className="obj-container">
              <div className="obj-img">
              <img
                src={publicationLogo}
                alt="project objective logo"
                style={styles.image}
              />
            </div>
                <span style={styles.description}>
                  {currentPage.publications}
                </span>
              </div>
              </Box>
            </>
          )}
        {currentPage.achievements !== "" &&
          currentPage.category !== "event" && (
            <>
            <Box sx={{
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            padding: "30px", // Add padding for content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
        
          }}>
              <div className="obj-cls">
                Achievements
                <div style={styles.divider}></div>
              </div>
              <div className="obj-container">
              <div className="obj-img">
              <img
                src={AchievementLogo}
                alt="project objective logo"
                style={styles.image}
              />
            </div>
                <span style={styles.description}>
                  {currentPage.achievements}
                </span>
              </div>
              </Box>
            </>
          )}
        {currentPage.startupName !== "" && currentPage.category !== "event" && (
          <>
          <Box sx={{
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            padding: "30px", // Add padding for content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        
          }}>
            <div className="obj-cls">
              Startup Name
              {/* <div style={styles.divider}></div> */}
            </div>
            <div className="startUp-text">
              <span>{currentPage.startupName}</span>
            </div>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    margin: "40px 40px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
  },
  title: {
    fontWeight: 600,
    fontSize: "22px",
    color: "#374557",
    // textTransform: "uppercase"
  },
  divider: {
    width: "50%",
    height: "3px",
    backgroundColor: "#6a0dad",
    margin: "15px auto",
    borderRadius: "4px",
  },
  description: {
    fontSize: "1em",
    color: "#7f8c8d",
    lineHeight: "1.5",
    width: "70%",
  },
  boxDescription: {
    fontSize: "1.12em",
    color: "#fff",
    lineHeight: "1.5",
    width: "70%",
    textAlign: "start"
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  imageWrapper: {
    width: "300px",
    height: "300px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    border: "1px solid #6a0dad",
    backgroundColor: "rgba(58, 16, 120, 0.2)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: '20px'
    // display: 'block',
  },
  notFound: {
    fontSize: "1.5em",
    color: "#e74c3c",
    textAlign: "center",
    marginTop: "20px",
  },
  sectionHeading: {
    fontSize: "1.5em",
    textAlign: "start",
    fontWeight: "bold",
    color: "#EBD3F8",
    // textDecoration: "underline",
  },
  sectionDescription: {
    textAlign: "start",
    fontSize: "1em",
    color: "#fff",
    lineHeight: "1.8",
  },
};

export default ProjectTemplate;
