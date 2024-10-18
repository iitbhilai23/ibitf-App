
import React from 'react';
import { Link } from 'react-router-dom';
import { pagesConfig } from '../constants/pagesConfig';

const ProjectsList = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Project Workshop Details</h1>
      <div style={styles.grid}>
        {pagesConfig.map(({ title, path }, index) => (
          <Link
            to={path}
            key={index}
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2 style={styles.cardTitle}>{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: '#ffffff',
    // padding: '1px 10px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    color: '#333',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
    minHeight: '120px',
  },
  cardTitle: {
    fontSize: '.9em',
    fontWeight: '600',
    color: '#555',
    margin: '0',
    padding: '0 10px',
    lineHeight: '1.2',
  },
};

export default ProjectsList;
