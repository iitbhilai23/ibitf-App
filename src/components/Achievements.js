import React, { useEffect, useState } from 'react';
import './Achievements.css';
import { FiActivity, FiFileText, FiTrendingUp, FiUsers, FiDollarSign, FiBox, FiUserCheck, FiBriefcase } from 'react-icons/fi';

// Define the data array with icons and titles
const achievementsData = [
  { icon: <FiActivity />, title: "Projects", count: 2500 },
  { icon: <FiFileText />, title: "MOU's", count: 1500 },
  { icon: <FiTrendingUp />, title: "Startups", count: 1280 },
  { icon: <FiUsers />, title: "Workshops", count: 3020 },
  { icon: <FiDollarSign />, title: "Revenue Generated", count: "14.56 Cr" }, // String value
  { icon: <FiBox />, title: "Products Deployed", count: 7 },
  { icon: <FiUserCheck />, title: "Manpower Trained", count: 3759 },
  { icon: <FiBriefcase />, title: "Direct Jobs", count: 350 },
];

// Counter component to handle counting animation or display string directly
const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof endValue === 'string') {
      // Directly set the count to the string value
      setCount(endValue);
      return;
    }

    // Counting animation for numeric values
    let start = 0;
    const increment = endValue / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [endValue]);

  return <span>{count.toLocaleString()}</span>;
};

// Achievements component with grid display
const Achievements = () => {
  return (
    <div className="achievements-section">
      <h2 className="achievements-title">Our Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div key={index} className="achievement-item">
            <div className="achievement-icon">{item.icon}</div>
            <div className="achievement-count"><Counter endValue={item.count} /></div>
            <p className="achievement-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
