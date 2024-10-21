import React, { useState } from 'react';
import { siteContent } from '../constants/content';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const { logo, menuItems } = siteContent.navbar;

  const location = useLocation(); // Get current location (route)

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  // Function to generate paths for menu items
  const generatePath = (item) => {
    if (item.toLowerCase() === 'contact us') {
      return '/contact-us'; // Explicit path for "Contact Us"
    }
    return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  // Close submenu whenever the route changes
  React.useEffect(() => {
    setOpenSubmenuIndex(null); // Close any open submenu when route changes
  }, [location]);

  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" className="logo" />

      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>

      <ul className={isMobile ? 'menu active' : 'menu'}>
        {menuItems.map((item, index) => (
          typeof item === 'string' ? (
            <li key={index}>
              <Link
                to={generatePath(item)}  // Use the generatePath function to get the correct route
                onClick={() => setIsMobile(false)} // Close mobile menu after click
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
                          setIsMobile(false); // Close mobile menu after click
                          setOpenSubmenuIndex(null); // Close submenu after clicking
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
