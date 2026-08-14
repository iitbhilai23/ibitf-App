import React, { useState, useEffect, useRef } from "react";
import "./Popup.css";

import popupImage1 from "../../assets/popup/Genesis.jpeg";
import popupImage2 from "../../assets/popup/sbileaf.jpeg";

const SLIDES = [
  { src: popupImage1, alt: "Genesis EIR Cohort 3.0", label: "Genesis EIR · Cohort 3.0" },
  { src: popupImage2, alt: "SBIF LEAP Programme",     label: "SBIF LEAP Programme" },
];
const AUTO_SLIDE_MS = 5000;

const Popup = ({ show, closePopup }) => {
  const [current,  setCurrent]  = useState(0);
  const [animKey,  setAnimKey]  = useState(0);   // forces re-mount of img for animation
  const [entering, setEntering] = useState("right"); // "right" | "left"
  const [progress, setProgress] = useState(0);
  const timerRef   = useRef(null);
  const progressRef = useRef(null);

  const goTo = (idx, dir = "right") => {
    if (idx === current) return;
    setEntering(dir);
    setAnimKey(k => k + 1);
    setCurrent(idx);
    setProgress(0);
  };

  const next = () => goTo((current + 1) % SLIDES.length, "right");
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length, "left");

  /* Auto-slide + progress */
  useEffect(() => {
    if (!show) return;
    setProgress(0);
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);

    const step = 50;
    const inc  = (step / AUTO_SLIDE_MS) * 100;
    progressRef.current = setInterval(() => setProgress(p => Math.min(p + inc, 100)), step);
    timerRef.current    = setTimeout(next, AUTO_SLIDE_MS);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, current]);

  useEffect(() => {
    if (show) { setCurrent(0); setProgress(0); setAnimKey(k => k + 1); }
  }, [show]);

  if (!show) return null;

  const animClass = entering === "right" ? "slide-from-right" : "slide-from-left";

  return (
    <div className="popup-overlay" onClick={(e) => e.target === e.currentTarget && closePopup()}>
      <div className="popup-box">

        {/* Header */}
        <div className="popup-header">
          <span className="popup-label">{SLIDES[current].label}</span>
          <button className="popup-close" onClick={closePopup} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="popup-progress-track">
          <div className="popup-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Slider */}
        <div className="popup-slider">

          <button className="popup-arrow popup-arrow--prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="popup-image-wrap">
            {/* key={animKey} forces a fresh DOM node → CSS animation restarts */}
            <img
              key={animKey}
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              className={`popup-image ${animClass}`}
            />
          </div>

          <button className="popup-arrow popup-arrow--next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="popup-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`popup-dot ${i === current ? "popup-dot--active" : ""}`}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Popup;
