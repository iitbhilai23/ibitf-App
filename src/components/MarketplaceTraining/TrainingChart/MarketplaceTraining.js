import React, { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import CountUp from "react-countup";
import TableExports from "../Common/TableExports";
import styles from "./Marketplace.module.css";
import TrainingChart from "./TrainingChart";

// IMPORT STANDALONE MAP
import ChhattisgarhMap from "../Common/ChhattisgarhMap";

export default function MarketplaceTraining() {
  const BASE_URL = process.env.REACT_APP_URL;

  const [trainers, setTrainers] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [selectedChart, setSelectedChart] = useState("trends");

  const statistics = useMemo(() => {
    const totalParticipants = trainings.reduce(
      (s, t) => s + (t.participants || 0),
      0
    );
    const avgParticipants =
      trainings.length > 0 ? totalParticipants / trainings.length : 0;

    return { totalParticipants, avgParticipants };
  }, [trainings]);

  // FETCH ALL DATA
  const fetchAll = async () => {
    setLoading(true);
    try {
      const [t1, t2, t3] = await Promise.all([
        axios.get(`${BASE_URL}/trainings/trainers`),
        axios.get(`${BASE_URL}/trainings/getTrainings`),
        axios.get(`${BASE_URL}/trainings/getAllParticipants`),
      ]);

      setTrainers(t1.data.data || []);
      setTrainings(t2.data.data || []);
      setParticipants(t3.data.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // TABLE DATA HANDLING
  let tableData = trainings;
  let tableKeys = tableData.length > 0 ? Object.keys(tableData[0]) : [];

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
      <section className={styles.topCards}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>👤</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Total Trainers</div>
            <div className={styles.cardValue}>
              <CountUp end={trainers.length} duration={1.5} />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📘</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Total Trainings</div>
            <div className={styles.cardValue}>
              <CountUp end={trainings.length} duration={1.5} />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>👥</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Total Participants</div>
            <div className={styles.cardValue}>
              <CountUp end={participants.length} duration={1.5} />
            </div>
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
              {loading ? (
                <div className={styles.loading}>Loading...</div>
              ) : (
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
