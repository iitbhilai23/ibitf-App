import React from 'react';
import '../styles/main.css';
import { siteContent } from '../constants/content';

const Blogs = () => {
    const { cardData } = siteContent.Blogs;

    return (
        <div className="blog-container">
            <h1 className="blog-title">Our Blogs</h1>
            <p className="blog-description">
                Dive into insightful articles that explore finance, technology, human history, and beyond. Each piece is crafted to keep you informed and engaged on the latest trends and ideas shaping our world.
            </p>
            <div className="card-stack">
                {cardData.map((data, index) => (
                    <div className="card" key={index}>
                        <p className="card-date">{data.date}</p>
                        <h3 className="card-word">{data.word}</h3>
                        <button
                            className="card-button"
                            onClick={() => window.open(data.pdfUrl, '_blank', 'noopener noreferrer')}
                        >
                            {data.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
