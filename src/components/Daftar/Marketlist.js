import React, { useState } from "react";
import MarketCard from "./MarketCard";
import { pasarData } from "../Home/Js/data"; // Sesuaikan path dengan lokasi file data
import "./css/list.css";

const MarketList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 2 baris x 4 kolom = 8 item per halaman

  // Hitung total halaman
  const totalPages = Math.ceil(pasarData.length / itemsPerPage);

  // Data yang ditampilkan per halaman
  const currentData = pasarData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="market-card-container">
      <h2>Daftar Pasar & Mini Market di Bogor</h2>
      <div className="market-card-grid">
        {currentData.map((pasar, index) => (
          <MarketCard key={index} {...pasar} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default MarketList;
