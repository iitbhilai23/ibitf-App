
// import React, { useState } from 'react';
// import { siteContent } from '../constants/content';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';


// const ContactForm = () => {
//   const { ContactForm, contactDetails } = siteContent;

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you for contacting us, ${formData.name}!`);
//   };

//   return (



//     <div className="contact-page">


//       <div className="contact-form-wrapper">
//         <h1>{ContactForm.title}</h1>
//         <p>{ContactForm.description}</p>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           <button type="submit">Send Message</button>
//         </form>

//       </div>

//     </div>

//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { siteContent } from '../constants/content';


const ContactForm = () => {
  const { ContactForm: formContent } = siteContent;


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${formData.name}!`);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.subtitle}>Write Us</h3>
      <h1 style={styles.title}>
        {/* {formContent.title} */}
        Contact Us        
        </h1>
      <p style={styles.description}>
        
      Don't hesitate to contact us
      anytime with questions
        {/* {formContent.description} */}
        
        </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputRow}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '40px',
    // backgroundColor: '#f8f9fc',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin:'5px auto 20px'
  },
  subtitle: {
    fontSize: '14px',
    color: '#6c757d',
    marginBottom: '8px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    color: '#6c757d',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1',
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
    minWidth: '200px', // Ensures input has minimum width
  },
  textarea: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    height: '120px',
    resize: 'none',
  },
  button: {
    padding: '12px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#6a0dad',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ContactForm;
