import React from 'react';
import { useLocation } from 'react-router-dom';
import { pagesConfig } from '../constants/pagesConfig';

const ProjectTemplate = () => {
  const location = useLocation();
  const currentPage = pagesConfig.find(page => page.path === location.pathname);

  if (!currentPage) {
    return <div style={styles.notFound}>Page not found</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{currentPage.title}</h1>
      <div style={styles.divider}></div>

      {/* Image Gallery */}
      <div className="contents" style={{ display: "flex", flexDirection: "column" }}>
        <div style={styles.imageContainer}>
          {currentPage.images.length > 0 ? (
            currentPage.images.map((image, index) => (
              <div
                key={index}
                style={styles.imageWrapper}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={require(`../${image}`)}
                  alt={`${currentPage.title} image ${index + 1}`}
                  style={styles.image}
                />
              </div>
            ))
          ) : (
            <p style={styles.noImages}>No images available for this event.</p>
          )}
        </div>

        {/* Description Section */}
        <div>
          {/* Check if description is a string or an array */}
          {Array.isArray(currentPage.description) ? (
            currentPage.description.map((section, index) => (
              <div key={index} style={styles.section}>
                <h2 style={styles.sectionHeading}>{section.heading}</h2>
                <p style={styles.sectionDescription}>{section.description}</p>
              </div>
            ))
          ) : (
            <p style={styles.singleDescription}>{currentPage.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Inline styles for page design
const styles = {
  container: {
    margin: '40px 40px',
    padding: '30px',  
    textAlign: 'center',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  divider: {
    width: '50%',
    height: '3px',
    backgroundColor: '#6a0dad',
    margin: '15px auto',
    borderRadius: '4px',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  imageWrapper: {
    width: '300px',
    height: '400px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    border: '1px solid #6a0dad',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  noImages: {
    fontSize: '1.2em',
    color: '#7f8c8d',
    marginTop: '20px',
  },
  section: {
    marginTop: '20px',
  },
  sectionHeading: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#34495e',
  },
  sectionDescription: {
    fontSize: '1.12em',
    color: '#7f8c8d',
    lineHeight: '1.8',
  },
  singleDescription: {
    fontSize: '1.12em',
    color: '#7f8c8d',
    lineHeight: '1.8',
    marginTop: '20px',
  },
  notFound: {
    fontSize: '1.5em',
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default ProjectTemplate;
