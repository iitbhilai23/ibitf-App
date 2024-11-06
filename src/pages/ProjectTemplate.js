import React from "react";
import { useLocation } from "react-router-dom";
import { pagesConfig } from "../constants/pagesConfig";
import "./ProjectTemplate.css";
import objectiveLogo from "../assets/VectorIMG/objective.svg";
import workshopLogo from "../assets/VectorIMG/workshop1.svg";
import progressLogo from "../assets/VectorIMG/progress.svg";
import publicationLogo from "../assets/VectorIMG/publication.svg";
import AchievementLogo from "../assets/VectorIMG/Achievement.svg";
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
          <span style={{ display: "block", marginBottom: "8px" }}>{line}</span>
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
    <div style={styles.container} className="project-container">
      <div style={styles.InstituteLogoContainer}>
        {currentPage.InstituteLogo?.map((image, index) => (
          <div
            key={index}
            style={styles.InstituteLogoimageWrapper}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={require(`../${image || ""}`)}
              alt={`${currentPage.title} image ${index + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </div>
      <div style={styles.title}>{currentPage.title}</div>
      <div style={styles.divider}></div>
      <div className="sub-text-title">
        <div className={currentPage.category !== "event" ? "pi-section" : ""}>
          <div className="piNameSection">
            <div className="pi-side">
            <span className="pi">PI</span>
            </div>
            <div style={{marginLeft: "10px"}}>
              <span className="pi-name">{currentPage.piName}</span>
              <br />
              <span className="pi-name">{currentPage?.piInstitute}</span>
            </div>
          </div>
        </div>
        {/* <div  className={currentPage.category !== "event" ? "duration-section" : ""}>
        <div className="dates-subTxt">
          <span className="date">{currentPage.date}</span>
          {currentPage.category !== "event" && (
            <span className="date">
              Project Duration :&nbsp;
              <strong>{currentPage.duration}</strong>
            </span>
          )}
        </div>
        </div> */}
      </div>
      {/* Image Gallery */}
      <div
        className="contents"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Box
          sx={{
            backgroundColor: "#EEEDEB", // Reduced opacity
            // height: "50vh",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            // padding: "30px", // Add padding for content
            textAlign: "justify",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // backgroundImage: "linear-gradient(135deg, rgba(58, 16, 120, 0.8), rgba(255, 64, 129, 0.7))", // Subtle gradient for modern look
            color: "#333", // White text color for contrast
          }}
        >
          {currentPage.category !== "event" && (
            <Box
              sx={{
                fontSize: "30px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
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
            {/* {Array.isArray(currentPage.description) ? (
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
            )} */}
            {Array.isArray(currentPage.description) ? (
  typeof currentPage.description[0] === "string" ? (
    // If description is an array of strings, render each as a bullet point
    <ul style={styles.sectionList}>
      {currentPage.description.map((item, index) => (
        <li key={index} style={styles.sectionItem}>
          {item}
        </li>
      ))}
    </ul>
  ) : (
    // If description is an array of objects, render each with heading and description
    currentPage.description.map((section, index) => (
      <div key={index} style={styles.section}>
        <h2 style={styles.sectionHeading}>{section.heading}</h2>
        <p style={styles.sectionDescription}>{section.description}</p>
      </div>
    ))
  )
) : (
  // If description is a single string, render it normally
  <span style={styles.boxDescription}>
    {renderDescription(currentPage.description)}
  </span>
)}

            {/* {currentPage.category !== "event" && (
            <div className="obj-img">
              <img
                src={objectiveLogo}
                alt="project objective logo"
                style={styles.image}
              />
            </div>
          )} */}
          </div>
        </Box>
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
            <p style={styles.noImages}>
              No images available for this {currentPage.category}.
            </p>
          )}
        </div>

        {currentPage.workshop !== "" && currentPage.category !== "event" && (
          <>
            <Box
              sx={{
                // height: "50vh",
                borderRadius: "20px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                padding: "30px", // Add padding for content
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "start",
              }}
            >
              <div>
              <div className="obj-cls">
                Work Shop Details
                <div style={styles.divider}></div>
              </div>
              <div className="obj-container">
                {/* <div className="obj-img">
                  <img
                    src={workshopLogo}
                    alt="project objective logo"
                    style={styles.image}
                  />
                </div> */}
                <span style={styles.Workshopdescription} className="project-desc">{renderDescription(currentPage.workshop)}</span>
                </div>
                <div style={styles.imageContainer}>
                {currentPage.workshopIMG?.map((image, index) => (
          <div
            key={index}
            style={styles.workshopimageWrapper}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={require(`../${image || ""}`)}
              alt={`${currentPage.title} image ${index + 1}`}
              style={styles.image}
            />
          </div>
        ))}
        </div>
              </div>
            </Box>
          </>
        )}
        {currentPage.technicalDetails !== "" &&
          currentPage.category !== "event" && (
            <>
              <Box
                sx={{
                  // height: "50vh",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                  padding: "30px", // Add padding for content
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "start",
                }}
              >
                <div className="obj-cls">
                  Technical Progress
                  <div style={styles.divider}></div>
                </div>
                <div className="obj-container">
                  <span style={styles.description}  className="project-desc">
                    {/* {renderDescription(currentPage.technicalDetails)} */}
                    {Array.isArray(currentPage.description) ? (
  typeof currentPage.description[0] === "string" ? (
    // If description is an array of strings, render each as a bullet point
    <ul style={styles.sectionList}>
      {currentPage.technicalDetails.map((item, index) => (
        <li key={index} style={styles.sectionItem}>
          {item}
        </li>
      ))}
    </ul>
  ) : (
    // If description is an array of objects, render each with heading and description
    currentPage.description.map((section, index) => (
      <div key={index} style={styles.section}>
        <h2 style={styles.sectionHeading}>{section.heading}</h2>
        <p style={styles.sectionDescription}>{section.description}</p>
      </div>
    ))
  )
) : (
  // If description is a single string, render it normally
  <span style={styles.boxDescription}>
    {renderDescription(currentPage.technicalDetails)}
  </span>
)}
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
              <Box
                sx={{
                  // height: "50vh",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                  padding: "30px", // Add padding for content
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "start",
                }}
              >
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
                  <span style={styles.description}  className="project-desc">
                    {renderDescription(currentPage.publications)}
                  </span>
                </div>
              </Box>
            </>
          )}
        {currentPage.achievements !== "" &&
          currentPage.category !== "event" && (
            <>
  <Box
    sx={{
      borderRadius: "20px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
      padding: "30px", // Add padding for content
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "start",
    }}
  >
    <div className="obj-cls">
      Achievements
      <div style={styles.divider}></div>
    </div>
    
    <div className="obj-container-achiv">
      {Array.isArray(currentPage.achievements) ? (
        currentPage.achievements.map((achievement, index) => (
          <div key={index} className="obj-item">
            <div className="obj-img-achv">
              <img
                src={require(`../${achievement.image || ""}`)}
                alt={`Achievement ${index + 1}`}
                style={styles.image}
              />
            </div>
            <span style={styles.description} className="project-desc">
              {achievement.description}
            </span>
          </div>
        ))
      ) : (
        <span style={styles.description} className="project-desc">
          {currentPage.achievements}
        </span>
      )}
    </div>
  </Box>
</>

          )}
        {currentPage.startupName !== "" && currentPage.category !== "event" && (
          <>
            <Box
              sx={{
                // height: "50vh",
                borderRadius: "20px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                padding: "30px", // Add padding for content
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
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

  Workshopdescription: {
    fontSize: "1em",
    color: "#7f8c8d",
    lineHeight: "1.5",
    width: "90%",
  }, 

  descriptionAchiv: {
    fontSize: "1em",
    color: "#7f8c8d",
    lineHeight: "1.5",
    width: "70%",
  }, 

  boxDescription: {
    fontSize: "1em",
    color: "#7f8c8d",
    lineHeight: "1.5",
    width: "90%",
    textAlign: "start",
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  InstituteLogoContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
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
  InstituteLogoimageWrapper: {
    width: "80px",
    height: "80px",
    // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    // borderRadius: "15px 15px 0px 0px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    // border: "1px solid #6a0dad",
    // backgroundColor: "rgba(58, 16, 120, 0.2)",
  },
  workshopimageWrapper: {
    width: "260px",
    height: "260px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px 15px 15px 15px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    border: "1px solid #6a0dad",
    backgroundColor: "rgba(58, 16, 120, 0.2)",
    marginTop: "20px"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    // borderRadius: '2px'
    // display: 'block',
  },
  notFound: {
    fontSize: "1.5em",
    color: "#e74c3c",
    textAlign: "center",
    marginTop: "20px",
  },
  sectionHeading: {
    fontSize: "1.3em",
    textAlign: "start",
    fontWeight: "600",
    color: "#000000",
    // textDecoration: "underline",
  },

  sectionList : {
    textAlign: "start"
  },
  sectionDescription: {
    textAlign: "start",
    fontSize: "1em",
    color: "#7f8c8d",
    lineHeight: "1.5",
  },
};

export default ProjectTemplate;
