// import React from 'react';

// const IITMap = () => {
//   return (
//     <div style={styles.mapContainer}>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10888.570414986738!2d81.31500266159561!3d21.24940379250635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db65364103d5%3A0x9ca0815dc09dac5f!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1729273642920!5m2!1sen!2sin"
//         style={styles.iframe}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="IIT Bhilai Location"
//       ></iframe>
//     </div>
//   );
// };

// const styles = {
//   mapContainer: {
//     width: '100%',                
//     padding: '20px 20px 20px 20px',            
//     boxSizing: 'border-box',       
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',  
//     backgroundColor: '#fff', 
//     borderRadius: '10px', 
//     margin:'0px 10px 20px 0px '      
//   },
//   iframe: {
//     width: 'calc(100% - 0px)',   
//     height: '450px',               
//     border: 'none',  
//     borderRadius: '10px',                
//   },
// };

// export default IITMap;



import React from 'react';
import { siteContent } from '../constants/content';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const IITMap = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contactInfo}>
        {/* <h3 style={styles.title}>Say Hello</h3> */}
        <h2 style={styles.heading}>{siteContent.ContactForm.title}</h2>
        <p style={styles.description}>{siteContent.ContactForm.description}</p>
        <div style={styles.contactDetails}>
          <div style={styles.detailItem}>
            <span style={styles.icon}>📞</span>
            <span>
              <strong style={styles.detailTitle}>Phone number</strong>
              <br />
              {siteContent.contactDetails.phone}
            </span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.icon}>✉️</span>
            <span>
              <strong style={styles.detailTitle}>Send Email</strong>
              <br />
              {siteContent.contactDetails.email}
            </span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.icon}>📍</span>
            <span>
              <strong style={styles.detailTitle}>Office Address</strong>
              <br />
              {siteContent.contactDetails.address}
            </span>
          </div>
        </div>
      </div>
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952065.281735698!2d81.27452548722947!3d21.23165005210205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d6791e5f399%3A0xfb39e72b5f4501f5!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1730553001222!5m2!1sen!2sin"
          style={styles.iframe}
          allowFullScreen="10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIT Bhilai Location"
        ></iframe>
      </div>
    </div >
  );
};



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch', // Ensure both sides stretch to the same height
    // backgroundColor: '#f8f9fc',
    padding: '30px 0px',
    borderRadius: '15px',
    // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  contactInfo: {
    flex: 1,
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Vertically center content
  },
  title: {
    color: '#6c757d',
    fontSize: '14px',
    marginBottom: '5px',
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#212529',
  },
  description: {
    fontSize: '16px',
    color: '#6c757d',
    marginBottom: '25px',
    lineHeight: '1.8',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '16px',
    color: '#495057',
  },
  detailTitle: {
    fontWeight: '600',
    color: '#212529',
  },
  icon: {
    fontSize: '24px',
    color: '#dc3545',
  },


  mapContainer: {

    padding: '10px',
    boxSizing: 'border-box',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgb(254 254 254)',
    borderRadius: '6px',
    margin: '0px 10px 20px 0px '

  },
  iframe: {
    // width: 'calc(100% - 450px)',
    width: '660px',
    height: '450px',
    border: 'none',

  }

};

export default IITMap;
