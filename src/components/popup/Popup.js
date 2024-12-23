
// import React from "react";
// import "./Popup.css"; 
// import PopImage from '../../assets/popup/Hackathon-PMAY.jpeg';

// const Popup = ({ show, closePopup }) => {
//   if (!show) return null; 

//   return (
//     <div className="popup-overlay">
//       <div className="popup-box">
//         <button className="close-button" onClick={closePopup}>
//           &times;
//         </button>
//         <img
//           src={PopImage} 
//           alt="Popup"
//             className="popup-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default Popup;


import React from "react";
import "./Popup.css";
import PopImage from '../../assets/popup/Hackathon-PMAY.jpeg';

const Popup = ({ show, closePopup }) => {
  if (!show) return null;

  const openHackathonLink = () => {
    window.open("https://tihiitbhilai.accubate.app/ext/form/2982/1/apply"); // Using hackathon link from siteContent
  };

  const handleCloseClick = (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the popup-box
    closePopup(); // Close the popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="image-container">
          <img
            src={PopImage}
            alt="Popup"
            className="popup-image"
            onClick={openHackathonLink}  // Only trigger the link when clicking the image
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





