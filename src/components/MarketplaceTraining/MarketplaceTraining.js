

import React, { useState } from "react";
// Removed axios as it is no longer needed
import CountUp from "react-countup";
import TableExports from "./Common/TableExports";
import styles from "./Marketplace.module.css";
import TrainingChart from "./TrainingChart/TrainingChart";
import ChhattisgarhMap from "./Common/ChhattisgarhMap";

export default function MarketplaceTraining() {
  // Removed BASE_URL and data fetching states (trainers, trainings, participants)
  const [search, setSearch] = useState("");
  const [selectedChart, setSelectedChart] = useState("trends");

  // Removed statistics calculation logic

  // Removed fetchAll function

  // Removed useEffect

  // TABLE DATA HANDLING
  // Data is now empty since API is removed. 
  // The layout remains, but the table will show no data.
  const tableData = [];
  const tableKeys = [];

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((v) =>
      String(v).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className={styles.dashboardContainer}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Training Dashboard</h1>
          <p className={styles.subtitle}>Analytics & Geographic Coverage</p>
        </div>

        <div className={styles.headerRight}></div>
      </header>

   {/* TOP CARDS */}
{/* TOP CARDS */}
<section className={styles.topCards}>
  
  {/* Trainings Card */}
  <div className={styles.card}>
    <div className={styles.cardIcon}>📘</div>
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>Trainings</div>
      <div className={styles.cardValue}>450+</div>
    </div>
  </div>

  {/* Trainers Card */}
  <div className={styles.card}>
    <div className={styles.cardIcon}>👤</div>
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>Trainers</div>
      <div className={styles.cardValue}>150+</div>
    </div>
  </div>

  {/* Participants Card */}
  <div className={styles.card}>
    <div className={styles.cardIcon}>👥</div>
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>Participants</div>
      <div className={styles.cardValue}>15500+</div>
    </div>
  </div>

  {/* Districts Card */}
  <div className={styles.card}>
    <div className={styles.cardIcon}>📍</div>
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>Districts</div>
      <div className={styles.cardValue}>12+</div>
    </div>
  </div>

  {/* Blocks Card */}
  <div className={styles.card}>
    <div className={styles.cardIcon}>🏘️</div>
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>Blocks</div>
      <div className={styles.cardValue}>35+</div>
    </div>
  </div>

</section>



      {/* CHART + MAP (50%-50%) */}
      <section className={styles.row5050}>
        
        {/* LEFT PANEL – CHART */}
        <div className={styles.leftPanel}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Training Analytics</h2>

              <div className={styles.tabGroup}>
                <button
                  className={`${styles.tab} ${
                    selectedChart === "trends" ? styles.tabActive : ""
                  }`}
                  onClick={() => setSelectedChart("trends")}
                >
                  Trends
                </button>

                <button
                  className={`${styles.tab} ${
                    selectedChart === "distribution" ? styles.tabActive : ""
                  }`}
                  onClick={() => setSelectedChart("distribution")}
                >
                  Distribution
                </button>
              </div>
            </div>

            <div className={styles.panelContent}>
              <TrainingChart activeTab={selectedChart} />
            </div>
          </div>

          {/* TABLE BELOW */}
          <div className={styles.panel} style={{ marginTop: 20 }}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Training Records</h2>

              <div className={styles.tableControls}>
                <input
                  placeholder="Search..."
                  className={styles.globalSearchInput}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <TableExports
                  data={filteredData}
                  columns={tableKeys}
                  filename="training_data"
                />
              </div>
            </div>

            <div className={styles.tableWrapper}>
              {/* Since data is hardcoded to empty array, we show a message or empty table */}
              {tableData.length > 0 ? (
                <table className={styles.table}>
                  <thead>
                    <tr>
                      {tableKeys.map((k) => (
                        <th key={k}>{k}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData.map((row, i) => (
                      <tr key={i}>
                        {tableKeys.map((k) => (
                          <td key={k}>{String(row[k])}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div style={{ padding: "20px", textAlign: "center", color: "#888" }}>
                  No records found
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL – MAP */}
        <div className={styles.rightPanel}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Geographic Distribution</h2>
            </div>

            <div className={styles.mapShell}>
              <ChhattisgarhMap />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
