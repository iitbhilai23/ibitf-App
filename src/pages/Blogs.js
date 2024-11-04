import React from "react";
import { siteContent } from "../constants/content";
import BlogLogo from "../assets/vector image/Blog.svg";
import "../styles/main.css";

const Blogs = () => {
  const { cardData } = siteContent.Blogs;

  return (
    <div className="blogs-section">
      <h2 className="blogs-title">Our Blogs</h2>
      
      <div className="blogs-container">
        <div className="blog-intro-card">
          <img src={BlogLogo} alt="Blog Logo" className="blog-image" />
          <p className="blog-intro-text">
            Dive into insightful articles that explore finance, technology, human history, and beyond. Each piece is crafted to keep you informed and engaged on the latest trends and ideas shaping our world. The progress of human civilization is closely tied to the evolution in our collective endeavour in creating wealth through discovering novel opportunities. Such evolution is often subtle but deeply impactful.
          </p>
        </div>

        <div className="blog-cards">
          {cardData.map((data, index) => (
            <div key={index} className="blog-card" onClick={() => window.open(data.pdfUrl, "_blank")}>
              <p className="blog-date">{data.date}</p>
              <h3 className="blog-title">{data.word}</h3>
              <button className="learn-more-btn">{data.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;



