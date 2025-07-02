import React from "react";
import "./Popup.css";
import popupPdf from "../../assets/popup/18may.png";

const Popup = ({ show, closePopup }) => {
  if (!show) return null;
  
  const openHackathonLink = () => {
    window.open("https://sustainableindia.org"); 
  };
  const handleCloseClick = (event) => {
    event.stopPropagation(); 
    closePopup(); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="image-container">
          <img
            src={popupPdf}
            alt="Popup"
            className="popup-image"
            onClick={openHackathonLink}  
          />
          <button className="close-button" onClick={handleCloseClick}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
