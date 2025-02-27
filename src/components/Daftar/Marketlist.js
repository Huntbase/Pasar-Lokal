import React, { useState } from "react";
import MarketCard from "./MarketCard";
import { pasarData } from "../Home/Js/data"; // Sesuaikan path dengan lokasi file data
import "./css/list.css";

const MarketList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("Semua"); // Default: tampilkan semua

  const itemsPerPage = 8; // 2 baris x 4 kolom = 8 item per halaman

  // Filter data berdasarkan tipe pasar
  const filteredData =
    filterType === "Semua"
      ? pasarData
      : pasarData.filter((pasar) => pasar.type === filterType);

  // Hitung total halaman berdasarkan data yang sudah difilter
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Data yang ditampilkan per halaman
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="market-card-container">
      <h2>Daftar Pasar & Mini Market di Bogor</h2>

      {/* Filter */}
      <div className="filter-buttons">
        {["Semua", "Pasar Tradisional", "Pasar Modern", "Minimarket"].map(
          (type) => (
            <button
              key={type}
              onClick={() => {
                setFilterType(type);
                setCurrentPage(1); // Reset ke halaman pertama setiap kali filter berubah
              }}
              className={filterType === type ? "active" : ""}
            >
              {type}
            </button>
          )
        )}
      </div>

      {/* Grid Pasar */}
      <div className="market-card-grid">
        {currentData.length > 0 ? (
          currentData.map((pasar, index) => (
            <MarketCard key={index} {...pasar} />
          ))
        ) : (
          <p>Tidak ada pasar dengan kategori ini.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
};

export default MarketList;
