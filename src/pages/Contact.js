import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/main.css";
import { siteContent } from "../constants/content.js";
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
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
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        {/* Left side - Contact Information */}
        <motion.div
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{siteContent.contactInfo.title}</h2>
          <p>{siteContent.contactInfo.address}</p>
          <p>{siteContent.contactInfo.postalCode}</p>
          <p>{siteContent.contactInfo.email}</p>
          <p>{siteContent.contactInfo.phone}</p>
        </motion.div>
        {/* Right side - Contact Form */}
        <motion.div
          className="contact-form-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <p>Feel free to drop us a line below!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="number"
                name="number"
                placeholder="Your Mobile No"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <div className="maps-column-container">
        {siteContent.mapIframes.map((iframe, index) => (
          <div key={index} className="map-card">
            <iframe
              src={iframe.src}
              title={`Location map ${index + 1}`} 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
