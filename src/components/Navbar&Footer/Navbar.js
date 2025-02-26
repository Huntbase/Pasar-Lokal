import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pasarData } from "../Home/Js/data"; // Import yang benar
import "./css/Navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (!searchQuery.trim()) return;

    // Filter data berdasarkan nama (bukan "name", tapi "nama")
    const filteredResults = pasarData.filter((pasar) =>
      pasar.nama.toLowerCase().includes(searchQuery)
    );

    navigate("/search-results", { state: { results: filteredResults } });
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Temu Mart</h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <i className="bx bx-home icon"></i> Beranda
          </Link>
        </li>
        <li>
          <Link to="/Daftar">
            <i className="bx bx-store icon"></i> Daftar Pasar
          </Link>
        </li>
        <li>
          <Link to="/peta-pasar">
            <i className="bx bx-map icon"></i> Peta Pasar
          </Link>
        </li>
        <li>
          <Link to="/kontak">
            <i className="bx bx-phone icon"></i> Kontak
          </Link>
        </li>
      </ul>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Cari pasar..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit">Cari</button>
      </form>
    </div>
  );
}

export default Navbar;
