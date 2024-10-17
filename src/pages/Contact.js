
import React, { useState } from 'react';
import { siteContent } from '../constants/content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { contact, contactDetails } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <div className="contact-page">
      <div className="contact-card">
        <h2>{contactDetails.title}</h2>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight:'10px',fontSize:'30px'}} /> {contactDetails.address}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'10px',fontSize:'28px'}} /> {contactDetails.email}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} style={{marginRight:'10px',fontSize:'28px'}} /> {contactDetails.phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faFax} style={{marginRight:'10px',fontSize:'28px'}} /> {contactDetails.fax}
        </p>
      </div>
      <div className="contact-form-wrapper">
        <h1>{contact.title}</h1>
        <p>{contact.description}</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

