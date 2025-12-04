import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import TableExports from "./TableExports";
import styles from "./MarketplaceTraining.module.css";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import TrainingChart from "./TrainingChart";

const MarketplaceTraining = () => {
  const BASE_URL = process.env.REACT_APP_URL;

  const [trainers, setTrainers] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    monthlyData: [],
    districtData: [],
    categoryData: [],
    qualificationData: []
  });
  const [chartLoading, setChartLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('all');
  const [selectedChart, setSelectedChart] = useState('trends');

  const [selected, setSelected] = useState("trainers");
  const [search, setSearch] = useState("");

  const labelMap = {
    id: "ID",
    name: "Name",
    phone: "Phone Number",
    email: "Email Address",
    bio: "Bio",
    trainer_id: "Trainer ID",
    trainer_name: "Trainer Name",
    village: "Village",
    block: "Block",
    district: "District",
    participants: "Participants Count",
    start_date: "Start Date",
    qualification: "Qualification",
    category: "Category",
    age: "Age",
    training_id: "Training ID"
  };

  const COLORS = ['#667eea', '#764ba2', '#f56565', '#48bb78', '#ed8936', '#9f7aea', '#38b2ac', '#ed64a6'];

  const fetchAll = async () => {
    setLoading(true);
    setChartLoading(true);
    try {
      const [t1, t2, t3] = await Promise.all([
        axios.get(`${BASE_URL}/trainings/trainers`),
        axios.get(`${BASE_URL}/trainings/getTrainings`),
        axios.get(`${BASE_URL}/trainings/getAllParticipants`)
      ]);

      const trainersData = t1.data.data || [];
      const trainingsData = t2.data.data || [];
      const participantsData = t3.data.data || [];

      setTrainers(trainersData);
      setTrainings(trainingsData);
      setParticipants(participantsData);


    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setChartLoading(false);
    }
  };



  useEffect(() => {
    fetchAll();
  }, [timeRange]);

  const getTableData = () => {
    if (selected === "trainers") return trainers;
    if (selected === "trainings") return trainings;
    if (selected === "participants") return participants;
    return [];
  };

  const tableData = getTableData();

  let tableKeys = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  let hiddenColumns = ["created_at"];
  if (selected === "trainings" || selected === "participants") {
    hiddenColumns.push("id");
  }

  tableKeys = tableKeys.filter((k) => !hiddenColumns.includes(k));

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleTabClick = (tab) => {
    setSelected(tab);
    setSearch(""); 
  };

  // Calculate statistics
  const totalParticipants = trainings.reduce((sum, training) => sum + (training.participants || 0), 0);
  const avgParticipantsPerTraining = trainings.length > 0 ? (totalParticipants / trainings.length).toFixed(1) : 0;
  const mostActiveDistrict = 'DURG';
  const mostPopularCategory = 'Agriculture trainer';

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div className={`${styles.headerDecoration} ${styles.left}`}></div>
          <div className={`${styles.headerDecoration} ${styles.right}`}></div>
          <h1>Marketplace Training</h1>
          <p>Manage and view trainers, trainings, and participants.</p>
        </div>

              {/* Statistics Summary */}
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3>Avg Participants/Training</h3>
              <p><CountUp start={0} end={avgParticipantsPerTraining} duration={2} decimals={0} /></p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3>Most Active District</h3>
              <p>{mostActiveDistrict}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3>Most Popular Category</h3>
              <p>{mostPopularCategory}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3>Total Participants All Time</h3>
              <p><CountUp start={0} end={totalParticipants} duration={2} /></p>
            </div>
          </div>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.card} onClick={() => handleTabClick("trainers")}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h2>Total Trainers</h2>
            <p><CountUp start={0} end={trainers.length} duration={2} /></p>
          </div>

          <div className={styles.card} onClick={() => handleTabClick("trainings")}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h2>Total Trainings</h2>
            <p><CountUp start={0} end={trainings.length} duration={2} /></p>
          </div>

          <div className={styles.card} onClick={() => handleTabClick("participants")}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h2>Total Participants</h2>
            <p><CountUp start={0} end={participants.length} duration={2} /></p>
          </div>
        </div>
               
   <TrainingChart />
        {selected && (
          <div className={`${styles.tableContainer} ${styles.tableContainerVisible}`}>
            <div className={styles.tableHeader}>
              <div className={styles.tableHeaderTop}>
                <h2 className={styles.tableTitle}>
                  {selected.charAt(0).toUpperCase() + selected.slice(1)} List
                </h2>
                <div className={styles.tableControls}>
                  <div className={styles.searchContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search..."
                      className={styles.searchBox}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <TableExports
                    data={filteredData}
                    columns={tableKeys}
                    labelMap={labelMap}
                    filename={selected}
                  />
                </div>
              </div>
              <nav className={styles.tabNav}>
                <button
                  className={`${styles.tabButton} ${selected === "trainers" ? styles.active : ""}`}
                  onClick={() => handleTabClick("trainers")}
                >
                  Trainers
                </button>
                <button
                  className={`${styles.tabButton} ${selected === "trainings" ? styles.active : ""}`}
                  onClick={() => handleTabClick("trainings")}
                >
                  Trainings
                </button>
                <button
                  className={`${styles.tabButton} ${selected === "participants" ? styles.active : ""}`}
                  onClick={() => handleTabClick("participants")}
                >
                  Participants
                </button>
              </nav>
            </div>

            <div className={styles.tableWrapper}>
              {loading ? (
                <div className={styles.loadingContainer}>
                  <div className={styles.spinner}></div>
                  <p>Loading data...</p>
                </div>
              ) : (
                <div className={styles.modernTable}>
                  <div className={styles.tableHeaderRow}>
                    {tableKeys.map((key) => (
                      <div key={key} className={styles.tableHeaderCell}>
                        {labelMap[key] || key}
                      </div>
                    ))}
                  </div>
                  <div className={styles.tableBody}>
                    {filteredData.length > 0 ? (
                      filteredData.map((item, rowIndex) => (
                        <div
                          key={rowIndex}
                          className={styles.tableRow}
                        >
                          {tableKeys.map((key) => (
                            <div key={key} className={styles.tableCell}>
                              {String(item[key] ?? "")}
                            </div>
                          ))}
                        </div>
                      ))
                    ) : (
                      <div className={styles.noDataRow}>
                        <div className={styles.noDataIcon}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                        <p>No data found</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceTraining;