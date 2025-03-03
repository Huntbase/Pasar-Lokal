import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/list.css";

const MarketCard = ({ id, nama, lokasi, kota, gambar, type }) => {
  const navigate = useNavigate(); // Untuk navigasi antar halaman

  return (
    <div className="market-card">
      <img src={gambar} alt={nama} className="market-image" />
      <div className="market-info">
        <h3>{nama}</h3>
        <p>{kota}</p>
        <p>{lokasi}</p>
        <div className="card-bottom">
          <span className={`market-type ${type}`}>
            {type === "pasar" ? "Pasar Tradisional" : "Minimarket"}
          </span>
          <button
            className="market-button"
            onClick={() => navigate(`/market/${id}`)}
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
