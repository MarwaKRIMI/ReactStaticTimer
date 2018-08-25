import React from "react";

const StaticTimer = () => (
  <div
    className="time"
    style={{
      textAlign: "center"
    }}
  >
    <div className="time-container">
      <div className="time-number" style={{ fontSize: "70px" }}>
        00:30:00
        <div
          className="time-text"
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "gold",
            fontSize: "20px"
          }}
        >
          <div className="time-text-item">Hour</div>
          <div className="time-text-item">Minute</div>
          <div className="time-text-item">Second</div>
        </div>
      </div>
    </div>
  </div>
);

export default StaticTimer;
