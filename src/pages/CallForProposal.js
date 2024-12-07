import React from 'react';
import { siteContent } from '../constants/content'; 
import '../styles/main.css';

const CallForProposals = () => {
  const { cardDataForCFP } = siteContent;

  const handleButtonClick = (button) => {
    const { pdfLink, url } = button;

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
        {cardDataForCFP.map((card) => (
          <div key={card.id} className="cardArea">
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
                    card.lastDate === "No deadline specified"
                      ? "black"
                      : card.lastDate &&
                        card.lastDate.startsWith(
                          "Extended deadline for project proposal submission"
                        )
                      ? "red"
                      : "black",
                }}
              >
                {card.lastDate || "No deadline specified"}
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
