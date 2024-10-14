import React from 'react';
import { siteContent } from '../constants/content';

const Footer = () => {
  return (
    <footer className="footer">
      <p>{siteContent.footer.text}</p>
    </footer>
  );
};

export default Footer;
