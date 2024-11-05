// VideoPage.js

import React, { useState } from 'react';
import './VideoPage.css';
import { siteContent } from '../constants/content';

const VideoPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { title, description, videoThumbnail, videoUrl } = siteContent.videoPage;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div class="video-outer-container">
        <div className="video-page">
            <div className="video-section">
                <div className="video-thumbnail-container" onClick={openModal}>
                    <img
                        src={videoThumbnail}
                        alt="Video Thumbnail"
                        className="video-thumbnail"
                    />
                    <button className="play-button-overlay">
                        ▶
                    </button>
                </div>
            </div>
            <div className="video-content">
                <h1 className="video-title">{title}</h1>
                <p className="video-description">{description}</p>
            </div>

            {isModalOpen && (
                <div className="video-modal">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>✖</button>
                        <iframe
                            className="modal-video"
                            width="100%"
                            height="100%"
                            src={`${videoUrl}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default VideoPage;
