import React, { useState } from "react";
import { siteContent } from "../constants/content";
import "../styles/main.css";
import { Modal, Box, IconButton, Backdrop } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

const CallForProposals = () => {
  const { cardDataForCFP } = siteContent;
  const [openModal, setOpenModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (button) => {
    const { pdfLink, url, images } = button;

    if (images && images.length > 0) {
      setCurrentImages(images);
      setCurrentIndex(0);
      setOpenModal(true);
      return;
    }

    if (pdfLink) {
      window.open(pdfLink, "_blank");
    } else if (url) {
      window.open(url, "_blank");
    } else {
      console.log("Button clicked with no action.");
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
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
            className={`cardArea ${index < 2 ? "highlight-card" : ""}`}
          >
            {index < 2  && (
              <div className="highlight-badge">
                <span className="star">★</span> New
              </div>
            )}

            <div className="card-content">
              {card.mainHeading && (
                <h4 className="card-subheading">{card.mainHeading}</h4>
              )}
              <p className="card-description">{card.description}</p>
              <p className="last-date" style={{ color: "red" }}>
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

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
            onClick: () => setOpenModal(false),
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: "10px",
            outline: "none",
            p: 2,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
            onClick={() => setOpenModal(false)}
          >
            <Close />
          </IconButton>

          <div
            style={{
              position: "relative",
              textAlign: "center",
            }}
          >
            <img
              src={currentImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              style={{
                width: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255,255,255,0.6)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
              }}
              onClick={handlePrev}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255,255,255,0.6)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
              }}
              onClick={handleNext}
            >
              <ArrowForwardIos />
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CallForProposals;
