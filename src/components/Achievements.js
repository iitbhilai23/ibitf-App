import React, { useEffect, useState, useRef } from 'react';
import './Achievements.css';
import { FiActivity, FiFileText, FiTrendingUp, FiUsers, FiDollarSign, FiBox, FiUserCheck, FiBriefcase } from 'react-icons/fi';

// Define the data array with icons and titles
const achievementsData = [
  { icon: <FiActivity />, title: "Projects", count: 94 },
  { icon: <FiFileText />, title: "Fellowships", count: "100+" },
  { icon: <FiTrendingUp />, title: "Startups", count: 25 },
  { icon: <FiUsers />, title: "Workshops", count: 105 },
  { icon: <FiDollarSign />, title: "Revenue Generated", count: "12.12 Cr" }, // String value
  { icon: <FiBox />, title: "Products Deployed", count: 7 },
  { icon: <FiUserCheck />, title: "Manpower Trained", count: 3759 },
  { icon: <FiBriefcase />, title: "Direct Jobs", count: 280 },
];

const Counter = ({ endValue, startCounting }) => {
  const [count, setCount] = useState(0);
  const [isStringCount, setIsStringCount] = useState(false);

  useEffect(() => {
    let timer;  
    if (!startCounting) return;

    if (typeof endValue === 'string' && endValue.includes('+')) {
      const numericValue = parseInt(endValue.replace('+', ''), 10);
      setIsStringCount(true);
      let start = 0;
      const increment = numericValue / 100;
      timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 20);
    } else if (typeof endValue === 'string') {
      setCount(endValue);
    } else {
      let start = 0;
      const increment = endValue / 100;
      timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 20);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [endValue, startCounting]);

  return <span>{isStringCount ? `${count}+` : count.toLocaleString()}</span>;
};


// Achievements component with grid display and intersection observer
const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  return (
    <div className="achievements-section" ref={achievementsRef}>
      <h2 className="achievements-title">Our Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div key={index} className="achievement-item">
            <div className="achievement-icon">{item.icon}</div>
            <div className="achievement-count">
              <Counter endValue={item.count} startCounting={isVisible} />
            </div>
            <p className="achievement-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
