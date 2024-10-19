import React from 'react';

const IITMap = () => {
  return (
    <div style={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10888.570414986738!2d81.31500266159561!3d21.24940379250635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db65364103d5%3A0x9ca0815dc09dac5f!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1729273642920!5m2!1sen!2sin"
        style={styles.iframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="IIT Bhilai Location"
      ></iframe>
    </div>
  );
};

const styles = {
  mapContainer: {
    width: '100%',                
    padding: '20px 20px 20px 20px',            
    boxSizing: 'border-box',       
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',  
    backgroundColor: '#fff', 
    borderRadius: '10px', 
    margin:'0px 10px 20px 0px '      
  },
  iframe: {
    width: 'calc(100% - 0px)',   
    height: '450px',               
    border: 'none',  
    borderRadius: '10px',                
  },
};

export default IITMap;
