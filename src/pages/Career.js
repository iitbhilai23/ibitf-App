
import React from 'react';
import '../styles/main.css'; 

const Career = () => {
  const jobListings = [
    {
      title: 'Project Consultant (Finance cum Legal)',
      positions: '1',
      qualifications: 'Master’s Degree in Finance/Economics or Chartered Accountant',
      experience: 'Minimum 3 years of relevant experience',
      contractPeriod: '1 Year (extendable)',
      ageLimit: 'Up to 45 years',
      location: 'IIT Bhilai',
      lastDate: '17th October 2024',
      downloadLink: '/path/to/advertisement1.pdf', 
      applyLink: '#',
      applyText: 'Apply Now',
    },
    {
      title: 'Project Manager (FinteQ Project)',
      positions: '1',
      qualifications: 'PhD or MBA/ME/MTech with 4 years relevant experience',
      experience: 'Minimum 4 years of experience in project management',
      contractPeriod: '89 Days (extendable)',
      ageLimit: 'Up to 45 years',
      location: 'IBITF, IIT Bhilai',
      lastDate: '15th October 2024',
      downloadLink: '/path/to/advertisement2.pdf', 
      applyText: 'Apply Now',
    },
    {
      title: 'Project Manager (FinteQ Project)',
      positions: '1',
      qualifications: 'PhD or MBA/ME/MTech with 4 years relevant experience',
      experience: 'Minimum 4 years of experience in project management',
      contractPeriod: '89 Days (extendable)',
      ageLimit: 'Up to 45 years',
      location: 'IBITF, IIT Bhilai',
      lastDate: '15th October 2024',
      downloadLink: '/path/to/advertisement2.pdf', 
      applyLink: '#',
      applyText: 'Apply Now',
    },{
      title: 'Project Manager (FinteQ Project)',
      positions: '1',
      qualifications: 'PhD or MBA/ME/MTech with 4 years relevant experience',
      experience: 'Minimum 4 years of experience in project management',
      contractPeriod: '89 Days (extendable)',
      ageLimit: 'Up to 45 years',
      location: 'IBITF, IIT Bhilai',
      lastDate: '15th October 2024',
      downloadLink: '/path/to/advertisement2.pdf', 
      applyLink: '#',
      applyText: 'Apply Now',
    },{
      title: 'Project Manager (FinteQ Project)',
      positions: '1',
      qualifications: 'PhD or MBA/ME/MTech with 4 years relevant experience',
      experience: 'Minimum 4 years of experience in project management',
      contractPeriod: '89 Days (extendable)',
      ageLimit: 'Up to 45 years',
      location: 'IBITF, IIT Bhilai',
      lastDate: '15th October 2024',
      downloadLink: '/path/to/advertisement2.pdf', 
      applyLink: '#',
      applyText: 'Apply Now',
    },
    
  ];

  const selectedCandidates = [
    {
      title: 'Project Consultant (Finance cum Legal)',
      positions: '1',
     
      interviewDate: '10th October 2024', 
      remarks: 'Finalized',
      contactPerson: 'HR Manager, hr@iitbhilai.ac.in',
      downloadLink: '/path/to/selected-candidates1.pdf',
    },
    {
      title: 'Project Manager (FinteQ Project)',
      positions: '1',
    
      interviewDate: '12th October 2024',
      remarks: 'Finalized',
      contactPerson: 'HR Manager, hr@iitbhilai.ac.in',
      downloadLink: '/path/to/selected-candidates2.pdf',
    },
  ];
  

  return (
    <div className="career-page">
      <h2>Open Positions - Recruitment Advertisements</h2>
      <p>Explore Job Openings and Apply to Join Our Team at IIT BHILAI INNOVATION AND TECHNOLOGY FOUNDATION (IBITF)</p >

      <table className="career-table">
        <thead>
          <tr>
            <th>Post Name</th>
            <th>No. of Positions</th>
            <th>Qualifications</th>
            <th>Experience</th>
            <th>Contract Period</th>
            <th>Age Limit</th>
            <th>Location</th>
            <th>Last Date</th>
            <th>Advertisement</th> {/* New column for advertisement download */}
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {jobListings.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.positions}</td>
              <td>{job.qualifications}</td>
              <td>{job.experience}</td>
              <td>{job.contractPeriod}</td>
              <td>{job.ageLimit}</td>
              <td>{job.location}</td>
              <td>{job.lastDate}</td>
              <td>
                <a href={job.downloadLink} className="download-link" target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
              <td>
                <a href={job.applyLink} className="apply-link">{job.applyText}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Selected Candidates Section */}
  <h2>Selected Candidates - Recruitment Results</h2>
  <p>Download the PDF to see the list of selected candidates for the following positions:</p>

  <table className="career-table">
    <thead>
      <tr>
        <th>Post Name</th>
        <th>No. of Positions</th>
    
        <th>Interview Date</th> {/* New Column */}
        <th>Remarks / Status</th> {/* New Column */}
        <th>Contact Person</th> {/* New Column */}
        <th>Selected Candidates PDF</th>
      </tr>
    </thead>
    <tbody>
      {selectedCandidates.map((candidate, index) => (
        <tr key={index}>
          <td>{candidate.title}</td>
          <td>{candidate.positions}</td>
        
          <td>{candidate.interviewDate}</td> {/* Display interview date */}
          <td>{candidate.remarks}</td> {/* Display remarks/status */}
          <td>{candidate.contactPerson}</td> {/* Display contact person */}
          <td>
            <a href={candidate.downloadLink} className="download-link" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
};

export default Career;
