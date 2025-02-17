import React from "react";
import "./css/Informasi_2.css";

const UnderwaterStats = () => {
  return (
    <div className="underwater-container">
      <div className="content-box">
        <h1 className="title">Dedicated to Life Under Water</h1>
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">543,210</h2>
            <p className="stat-description">
              children and teens engaged through online environmental education
              programs
            </p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">6,543</h2>
            <p className="stat-description">volunteers in 75 countries</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">4,321</h2>
            <p className="stat-description">
              tons of litter cleared in coastal cleanups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderwaterStats;
