// src/components/PasarCard.jsx
import React from "react";
import "./css/PasarCard.css"; // CSS khusus untuk kartu (opsional)

const PasarCard = ({ nama, lokasi, kota, gambar, tipe }) => {
  return (
    <div className="card-container">
      <img src={gambar} alt={nama} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{nama}</h3>
        <p className="card-location">{lokasi}</p>
        <p className="card-city">{kota}</p>
        <div className="card-bottom">
          <span className={`card-type ${tipe}`}>
            {tipe === "pasar" ? "Pasar Tradisional" : "Mini Market"}
          </span>
          <button className="card-button">Lihat Detail</button>
        </div>
      </div>
    </div>
  );
};

export default PasarCard;
