import React from 'react';
import './FellowshipProject.css'; 
import {siteContent} from "../constants/content";



//   {
//     title: 'UG',
//     description: 'Kickstart your research journey with our Undergraduate fellowships, offering early exposure to high-impact projects and mentorship.',
//     icon: '🎓',
//     pdf: UG 
//   },
//   {
//     title: 'PG',
//     description: 'Deepen your specialization with our Postgraduate fellowships, designed for advanced study and significant contributions in your field.',
//     icon: '🔬',
//     pdf: PG
//   },
//   {
//     title: 'Doctoral',
//     description: 'Pursue groundbreaking research with our Doctoral (Ph.D.) fellowships, providing full support for producing a transformative thesis.',
//     icon: '📜',
//     pdf: Doctoral_Fellowship
//   },
//   {
//     title: 'Post Doctoral',
//     description: 'Collaborate with leading experts as a Post-Doctoral fellow, driving innovation and publishing pioneering work in your discipline.',
//     icon: '🧑‍🔬',
//     pdf: PostDoctoral_Fellowship
//   }
// ];

const FellowshipProject = () => {
   
    const { projectData } = siteContent;

  return (
    <section className="fellowship-section">
      <div className="container">
        <h2 className="section-title">Fellowship Programs</h2>
        <div className="card-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-header">
                <span className="card-icon">{project.icon}</span>
                <h3 className="card-title">{project.title}</h3>
              </div>
              <p className="card-description">{project.description}</p>
              <a 
                href={project.pdf} 
                className="card-button" 
                download={`${project.title}_Fellowship.pdf`} 
              >
                Download Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FellowshipProject;