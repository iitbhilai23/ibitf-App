import React, { useState } from 'react';
import { siteContent } from '../constants/content';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const { logo, menuItems } = siteContent.navbar;

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

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
                to={`/${item.toLowerCase()}`}
                onClick={() => {
                  setIsMobile(false);
                  setSubmenuOpen(false);
                }}
              >
                {item}
              </Link>
            </li>
          ) : (
            <li
              key={index}
              className={`has-submenu ${submenuOpen ? 'open' : ''}`}
              onClick={toggleSubmenu}
            >
              <span>
                {item.label} <i className={`fas fa-caret-${submenuOpen ? 'up' : 'down'}`}></i>
              </span>

              <div className={`mega-menu ${submenuOpen ? 'active' : ''}`}>
                <ul>
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={`/${submenuItem.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => {
                          setIsMobile(false);
                          setSubmenuOpen(false);
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
