import React from 'react';
import '../styles/main.css';
import { siteContent } from '../constants/content';

function OrgStructure() {
  const { governanceStructure } = siteContent;

  return (
    <div className="org-structure">
      <h1 className="org-title">{governanceStructure.title}</h1>

      {/* BoG of IBITF */}
      <h2 className="section-title">BoG of IBITF</h2>
      <div className="section bog">
        <div className="box-container">
          {governanceStructure.sections[0].members.map((member, index) => (
            <div key={index} className="box">
              {member}
            </div>
          ))}
        </div>
      </div>

      {/* Project Co-ordination Group */}
      <h2 className="section-title">Project Co-ordination Group</h2>
      <div className="section coordination">
        <div className="box-container">
          {governanceStructure.sections[1].members.map((member, index) => (
            <div key={index} className="box coordination">
              {member}
            </div>
          ))}
        </div>
      </div>

      {/* Project Selection Group PRSG */}
      <h2 className="section-title">Project Selection Group (PRSG)</h2>
      <div className="section prsg">
        <div className="box-container">
          {governanceStructure.sections[2].members.map((member, index) => (
            <div key={index} className="box prsg">
              {member}
            </div>
          ))}
        </div>
      </div>

      {/* Start-up Coordination Team */}
      <h2 className="section-title">Start-up Coordination Team</h2>
      <div className="section startup">
        <div className="box-container">
          {governanceStructure.sections[3].members.map((member, index) => (
            <div key={index} className="box startup">
              {member}
            </div>
          ))}
        </div>
      </div>

    {/* TIH Office Administration */}
    <h2 className="section-title">TIH Office Administration</h2>
      <div className="tih-admin-layout">
        {governanceStructure.sections[4].subSections.map((subSection, subIndex) => (
          <div key={subIndex} className="sub-section">
            <h3 className="sub-section-title">{subSection.category}</h3>
            <div className="staff-container">
              {subSection.members.map((member, memberIndex) => (
                <div key={memberIndex} className="staff-box">
                  {member}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrgStructure;
