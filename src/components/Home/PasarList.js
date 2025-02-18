// src/components/PasarList.jsx
import React, { useState } from "react";
import PasarCard from "./PasarCard";
import { pasarData } from "./Js/data"; // atau data langsung di sini

const ITEMS_PER_PAGE = 6; // jumlah kartu per halaman

const PasarList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman
  const totalPages = Math.ceil(pasarData.length / ITEMS_PER_PAGE);

  // Data yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = pasarData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Fungsi ganti halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="page-title">Daftar Pasar & Minimarket</h2>
      <div className="card-grid">
        {currentData.map((item) => (
          <PasarCard key={item.id} {...item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PasarList;
