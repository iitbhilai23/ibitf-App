import React from 'react';
import { siteContent } from '../constants/content'; 
import '../styles/main.css'; 

const Career = () => {
  const { jobListings, selectedCandidates } = siteContent;

  return (
    <div className="career-page">
      <h2>Open Positions - Recruitment Advertisements</h2>
      <p>Explore Job Openings and Apply to Join Our Team at IIT BHILAI INNOVATION AND TECHNOLOGY FOUNDATION (IBITF)</p>

     <div className='career-table-container'>
     <table className="career-table">
        <thead>
          <tr>
            <th>Post Name</th>
            <th>No. of Positions</th>
            <th>Qualifications</th>
            <th>Experience</th>
            <th>Contract Period</th>
            <th>Age Limit</th>
            {/* <th>Location</th> */}
            <th>Last Date</th>
            <th>Advertisement</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {jobListings.map((job, index) => (
            <tr key={index}>
              <td data-label="Post Name">{job.title}</td>
              <td data-label="No. of Positions">{job.positions}</td>
              <td data-label="Qualifications">{job.qualifications}</td>
              <td data-label="Experience">{job.experience}</td>
              <td data-label="Contract Period">{job.contractPeriod}</td>
              <td data-label="Age Limit">{job.ageLimit}</td>
              {/* <td data-label="Location">{job.location}</td> */}
              <td data-label="Last Date">{job.lastDate}</td>
              <td data-label="Advertisement">
                <a href={job.downloadLink} className="download-link" target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
              <td data-label="Apply">
                <a href={job.applyLink} className="apply-link" target='_blank'>{job.applyText}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>

      <h2>Shortlisted/Not Shortlisted applicants Candidates - Recruitment Results</h2>
      <p>Download the PDF to see the list of selected candidates for the following positions:</p>
      <div className='career-table-container'>
      <table className="career-table">
        <thead>
          <tr>
            <th>Post Name</th>
            <th>No. of Positions</th>
            <th>Interview Date</th>
            <th>Remarks / Status</th>
            <th>Contact Person</th>
            <th>Shortlisted/Not Shortlisted</th>
          </tr>
        </thead>
        <tbody>
          {selectedCandidates.map((candidate, index) => (
            <tr key={index}>
              <td data-label="Post Name">{candidate.title}</td>
              <td data-label="No. of Positions">{candidate.positions}</td>
              <td data-label="Interview Date">{candidate.interviewDate}</td>
              <td data-label="Remarks / Status">{candidate.remarks}</td>
              <td data-label="Contact Person">{candidate.contactPerson}</td>
              <td data-label="Selected Candidates PDF">
                <a href={candidate.downloadLink} className="download-link" target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
  
};

export default Career;
