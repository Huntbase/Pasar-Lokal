import React from "react";
import "./css/Informasi_2.css";

const LifeUnderWater = () => {
  return (
    <div className="container">
      <div className="overlay">
        <h1 className="title">
          DEDICATED TO LIFE <br />
          UNDER WATER
        </h1>
        <div className="stats">
          <div className="stat">
            <p className="number">543,210</p>
            <p className="description">
              children and teens engaged <br />
              through online environmental <br />
              education programs
            </p>
          </div>
          <div className="stat">
            <p className="number">6,543</p>
            <p className="description">volunteers in 75 countries</p>
          </div>
          <div className="stat">
            <p className="number">4,321</p>
            <p className="description">
              tons of litter cleared in coastal <br />
              cleanups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeUnderWater;
