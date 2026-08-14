import React from "react";
import "./Popup.css";

import popupImage1 from "../../assets/popup/Genesis.jpeg";
import popupImage2 from "../../assets/popup/sbi standy.png";

const Popup = ({ show, closePopup }) => {
  if (!show) return null;


  // const openHackathonLink = () => {
  //   window.open("https://sustainableindia.org");
  // }; 

  const handleCloseClick = (event) => {
    event.stopPropagation();
    closePopup();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="image-container">

          <img
            src={popupImage1}
            alt="Popup 1"
            className="popup-image"
          />

          <img
            src={popupImage2}
            alt="Popup 2"
            className="popup-image"
          />

          <button
            className="close-button"
            onClick={handleCloseClick}
            aria-label="Close popup"
          >
            &times;
          </button>

        </div>
      </div>
    </div>
  );
};

export default Popup;

