import React from "react";
import { siteContent } from "../constants/content";
import styles from "./Eoi.module.css";

const Eoi = () => {
  const { EOI } = siteContent;

  const handleOpenPDF = () => {
    if (EOI?.pdfFile) {
      window.open(EOI.pdfFile, "_blank");
    }
  };

  const handleApplyNow = () => {
    window.location.href = "mailto:tih@iitbhilai.ac.in";
  };

  return (
    <div>
      <div className={styles.headingContainer}>
        <h2>Expression of Interest (EOI)</h2>
      </div>

      <div className={styles.cardList}>
        <div className={styles.cardArea}>
          
          <div className={styles.highlightBadge}>
            <span className={styles.star}>★</span> New
          </div>

          <div className={styles.cardContent}>
            <h4 className={styles.eoiTitle}>{EOI.heading}</h4>

            <p className={styles.eoiText}>{EOI.content}</p>
          </div>

          <div className={styles.buttonList}>
            <button className={styles.cardButton} onClick={handleOpenPDF}>
              View PDF
            </button>

            <button
              className={`${styles.cardButton} ${styles.applyNow}`}
              onClick={handleApplyNow}
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eoi;
