
import React from "react";
import "./Popup.css"; 
import PopImage from '../../assets/popup/Hackathon_Banner24.jpg';

const Popup = ({ show, closePopup }) => {
  if (!show) return null; 

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-button" onClick={closePopup}>
          &times;
        </button>
        <img
          src={PopImage} 
          alt="Popup"
            className="popup-image"
        />
      </div>
    </div>
  );
};

export default Popup;
