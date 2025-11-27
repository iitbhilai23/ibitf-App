import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MarketplaceTraining.css";

const Training = () => {
  const [trainersData, setTrainersData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [trainingData, setTrainingData] = useState({}); 

  useEffect(() => {
const fetchTrainers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/trainings/trainers`
    );

    let trainers = response.data.data || [];

    trainers = trainers.sort((a, b) => a.id - b.id);

    setTrainersData(trainers);

    const counts = {};

    await Promise.all(
      trainers.map(async (t) => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_URL}/trainings/trainings/${t.id}`
          );

          counts[t.id] = res.data.count ?? res.data.data?.length ?? 0;
        } catch {
          counts[t.id] = 0;
        }
      })
    );

    const initTrainingMap = {};
    trainers.forEach((t) => {
      initTrainingMap[t.id] = { count: counts[t.id], list: null };
    });

    setTrainingData(initTrainingMap);

  } catch (error) {
    console.error(error);
  }
};


    fetchTrainers();
  }, []);

  const toggleRow = async (trainer) => {
    const trainerId = trainer.id;

    if (expandedRow === trainerId) {
      setExpandedRow(null);
      return;
    }

    setExpandedRow(trainerId);

    if (trainingData[trainerId]?.list) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/trainings/trainings/${trainerId}`
      );

      setTrainingData((prev) => ({
        ...prev,
        [trainerId]: {
          ...prev[trainerId],
          list: res.data.data || [],
        },
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="report-container">

      <div className="report-header">
        <span className="header-icon">📋</span>
        <h3>Training Report</h3>
      </div>

      <div className="orange-underline"></div>

      <table className="report-table">
        <thead>
          <tr>
            <th>Trainer ID</th>
            <th>Trainer Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Bio</th>
            <th>Total Trainings</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {trainersData.map((trainer) => {
            const trainerId = trainer.id;
            const record = trainingData[trainerId];

            return (
              <React.Fragment key={trainerId}>
                <tr>
                  <td>{trainerId}</td>
                  <td className="school-name">{trainer.name}</td>
                  <td>{trainer.phone}</td>
                  <td>{trainer.email}</td>
                  <td>{trainer.bio}</td>
                  <td>
                    <span className="count-pill">
                      {record?.count ?? 0}
                    </span>
                  </td>

                  <td>
                    <button
                      className="details-btn"
                      onClick={() => toggleRow(trainer)}
                    >
                      {expandedRow === trainerId
                        ? "▲ Hide Details"
                        : "▼ View Details"}
                    </button>
                  </td>
                </tr>

                {expandedRow === trainerId && (
                  <tr className="expand-row">
                    <td colSpan="6">
                      {!record?.list ? (
                        <p className="loading">Loading trainings...</p>
                      ) : record.list.length === 0 ? (
                        <p className="empty">No trainings found</p>
                      ) : (
                        <table className="inner-table">
                          <thead>
                            <tr>
                              <th>Village</th>
                              <th>Block</th>
                              <th>District</th>
                              <th>Participants</th>
                              <th>Date</th>
                            </tr>
                          </thead>

                          <tbody>
                            {record.list.map((t) => (
                              <tr key={t.id}>
                                <td>{t.village}</td>
                                <td>{t.block}</td>
                                <td>{t.district}</td>
                                <td>
                                  <span className="count-pill small">
                                    {t.participants}
                                  </span>
                                </td>
                                <td>
                                  {new Date(t.start_date).toLocaleDateString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Training;
