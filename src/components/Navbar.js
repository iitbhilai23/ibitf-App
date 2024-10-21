import React, { useState, useEffect } from 'react';
import { siteContent } from '../constants/content';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
   // State to track if navbar is sticky

  const { logo, menuItems } = siteContent.navbar;
  const location = useLocation();

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const generatePath = (item) => {
    if (item.toLowerCase() === 'contact us') {
      return '/contact-us';
    }
    return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  // Close submenu whenever the route changes
  useEffect(() => {
    setOpenSubmenuIndex(null);
  }, [location]);

  // Function to handle sticky navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <img src={logo} alt="Company Logo" className="logo" />

      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>

      <ul className={isMobile ? 'menu active' : 'menu'}>
        {menuItems.map((item, index) => (
          typeof item === 'string' ? (
            <li key={index}>
              <Link
                to={generatePath(item)}
                onClick={() => setIsMobile(false)}
              >
                {item}
              </Link>
            </li>
          ) : (
            <li
              key={index}
              className={`has-submenu ${openSubmenuIndex === index ? 'open' : ''}`}
              onClick={() => toggleSubmenu(index)}
            >
              <span>
                {item.label} <i className={`fas fa-caret-${openSubmenuIndex === index ? 'up' : 'down'}`}></i>
              </span>

              <div className={`mega-menu ${openSubmenuIndex === index ? 'active' : ''}`}>
                <ul>
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={`/${submenuItem.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => {
                          setIsMobile(false);
                          setOpenSubmenuIndex(null);
                        }}
                      >
                        {submenuItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
