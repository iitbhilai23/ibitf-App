import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotificationPopup.css";
import { siteContent } from '../../constants/content';
// import { CallForProposals} from '../../pages/CallForProposal';

const NotificationPopup = ({ show, closePopup }) => {
  const { title, message, deadline } = siteContent.NotificationPop;
  const navigate = useNavigate();

  if (!show) return null;

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  // ========== UPDATED: APPLY BUTTON EVENT ==========
  const handleApply = () => {
  
    window.open("https://tihiitbhilai.accubate.app/ext/form/9467/1/apply", "_blank");
    closePopup(); 
  };

  // ========== UPDATED: MORE DETAILS BUTTON EVENT ==========
  const handleMoreDetails = () => {
  
    navigate("/call-for-proposals");
    closePopup(); 
  };

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={handlePopupClick}>
        
        <button className="popup-close-btn" onClick={closePopup}>
          &times;
        </button>

        <div className="popup-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="popup-icon"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          
          <div className="popup-title-wrapper">
            <h2 className="popup-title">{title}</h2>
            {deadline && (
              <div className="popup-deadline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="deadline-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>Last Date to Apply: <strong>{deadline}</strong></span>
              </div>
            )}
          </div>
        </div>
        
        <div className="popup-body">
          <p className="popup-message">{message}</p>
        </div>

        <div className="popup-footer">
          <button className="popup-btn popup-btn-details" onClick={handleMoreDetails}>
            More Details
          </button>
          <button className="popup-btn popup-btn-apply" onClick={handleApply}>
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotificationPopup;