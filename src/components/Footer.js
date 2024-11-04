


import React from 'react';
import { siteContent } from '../constants/content';
import '../styles/main.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { footerlogo, text, about, socials, links, services, info, support } = siteContent.footer;

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* About Section */}
        <div className="footer-section about">
          <h2>
            <img src={footerlogo} alt="Company Logo" className="footerlogo" />
          </h2>
          <p>{about.description}</p>
          <button className="footer-button">Follow Us</button>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}><a href="#">{service}</a></li>
            ))}
          </ul>
        </div>

        {/* More Info Section */}
        <div className="footer-section info">
          <h3>More Info</h3>
          <ul>
            {info.map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            {support.map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Text */}
      <div className="footer-bottom">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;
