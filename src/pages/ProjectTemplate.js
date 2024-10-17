
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
      <div style={styles.imageContainer}>
        {currentPage.images.map((image, index) => (
          <div 
            key={index} 
            style={styles.imageWrapper}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={require(`../${image}`)}
              alt={`${currentPage.title} image ${index + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </div>
      <p style={styles.description}>{currentPage.description}</p>
    </div>
  );
};

// Inline styles for page Desgin
const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
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
  description: {
    fontSize: '1.12em',
    color: '#7f8c8d',
    lineHeight: '1.8',
    maxWidth: '750px',
    margin: '20px auto',
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
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    border: '1px solid #6a0dad', 
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  notFound: {
    fontSize: '1.5em',
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default ProjectTemplate;
