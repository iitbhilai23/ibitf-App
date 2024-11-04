
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
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!formData?.name || formData.name.length <= 3) {
      alert(`Please Enter your Name`)
      return
    }
    else if (!emailValid.test(formData?.email) && !formData?.email) {
      alert(`Please Enter Valid  Email`)
      return
    }
    else if (!formData?.subject || formData.subject.length <= 3) {
      alert(`Please Enter Subject`)
      return
    }
    else if (!formData?.message || formData.message.length <= 3) {
      alert(`Please Enter Message`)
      return
    }
    alert(`Thank you for contacting us, ${formData.name}!`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.subtitle}> Contact Us</h3>
      {/* <h1 style={styles.title}>
        Contact Us        
        </h1> */}
      {/* <p style={styles.description}>
        
      Don't hesitate to contact us
      anytime with questions
        
        </p> */}
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
    padding: '20px 40px',
    // backgroundColor: '#f8f9fc',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '5px auto 20px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#6c757d',
    lineHeight: '30px',
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
    fontFamily: 'Poppins',
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
