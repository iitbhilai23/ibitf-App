import React, { useState, useEffect, useCallback } from "react";
import "./Popup.css";

import popupImage1 from "../../assets/popup/Genesis.jpeg";
import popupImage2 from "../../assets/popup/sbileaf.jpeg";

const SLIDES = [
  { src: popupImage1, alt: "Genesis EIR Cohort 3.0", label: "Genesis EIR · Cohort 3.0" },
  { src: popupImage2, alt: "SBIF LEAP Programme", label: "SBIF LEAP Programme" },
];
const AUTO_SLIDE_MS = 5000;

const popupImages = [popupImage2, popupImage1];
const AUTO_SWITCH_MS = 3500;

const Popup = ({ show, closePopup }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setAnimating(false);
    }, 280);
  }, []);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % popupImages.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + popupImages.length) % popupImages.length);
  }, [currentIndex, goTo]);

  // Auto-switch
  useEffect(() => {
    if (!show) return;
    const timer = setInterval(goNext, AUTO_SWITCH_MS);
    return () => clearInterval(timer);
  }, [show, goNext]);

  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button
          className="popup-close-btn"
          onClick={(e) => { e.stopPropagation(); closePopup(); }}
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Image */}
        <div className={`popup-img-wrap${animating ? " popup-img-exit" : " popup-img-enter"}`}>
          <img
            src={popupImages[currentIndex]}
            alt={`Popup slide ${currentIndex + 1}`}
            className="popup-image"
          />
        </div>

        {/* Prev / Next arrows */}
        <button className="popup-arrow popup-arrow-left" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous">
          &#8249;
        </button>
        <button className="popup-arrow popup-arrow-right" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next">
          &#8250;
        </button>

        {/* Dot indicators */}
        <div className="popup-dots">
          {popupImages.map((_, idx) => (
            <button
              key={idx}
              className={`popup-dot${idx === currentIndex ? " popup-dot-active" : ""}`}
              onClick={(e) => { e.stopPropagation(); goTo(idx); }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="popup-progress">
          <div
            key={currentIndex}
            className="popup-progress-bar"
            style={{ animationDuration: `${AUTO_SWITCH_MS}ms` }}
          />
        </div>

      </div>
    </div>
  );
};

export default Popup;
