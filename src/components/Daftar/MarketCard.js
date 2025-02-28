import React from "react";
import "./css/list.css";

const MarketCard = ({ nama, lokasi, kota, gambar, type }) => {
  console.log(`Class applied: market-type ${type}`);

  return (
    <div className="market-card">
      <img src={gambar} alt={nama} className="market-image" />
      <div className="market-info">
        <h3>{nama}</h3>
        <p>{kota}</p>
        <p>{lokasi}</p>
        <div className="card-bottom">
          <span className={`market-type ${type}`}>
            {console.log("Rendered Type:", type)}
            {type === "pasar" ? "Pasar Tradisional" : "Minimarket"}
          </span>
          <button className="market-button">Lihat Detail</button>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
