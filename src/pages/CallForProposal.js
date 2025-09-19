import React from 'react';
import { siteContent } from '../constants/content'; 
import '../styles/main.css';

const CallForProposals = () => {
  const { cardDataForCFP } = siteContent;

  const handleButtonClick = (button) => {
    const { pdfLink, url, } = button;

    if (pdfLink) {
      window.open(pdfLink, '_blank');
    } else if (url) {
      window.open(url, '_blank');
    } else {
      console.log('Button clicked with no action.');
    }
  };

  return (
    <div>
      <div className="heading-container">
        <h2>Call For Proposals</h2>
      </div>
      <div className="card-list">
{cardDataForCFP.map((card, index) => (
  <div
    key={card.id}
    className={`cardArea ${index === 0 ? "highlight-card" : ""}`}
  >
    {/* Fancy Badge for First Card */}
    {index === 0 && (
      <div className="highlight-badge">
        <span className="star">★</span> New
      </div>
    )}

    <div className="card-content">
      {card.mainHeading && (
        <h4 className="card-subheading">{card.mainHeading}</h4>
      )}
      <p className="card-description">{card.description}</p>
      <p
        className="last-date"
        style={{
          color:
            card.lastDate === "This is a rolling advertisement" ||
            card.lastDate === ""
              ? "black"
              : card.lastDate &&
                card.lastDate.startsWith(
                  "Extended deadline for project proposal submission"
                )
              ? "red"
              : "red",
        }}
      >
        {card.lastDate || ""}
      </p>
    </div>
    <div className="card-buttons-list">
      {card.buttons.map((button, index) => (
        <button
          key={index}
          className={`card-buttons ${
            button.text === "Apply Now" ? "applyNow-button" : ""
          }`}
          onClick={() => handleButtonClick(button)}
        >
          {button.text}
        </button>
      ))}
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default CallForProposals;
