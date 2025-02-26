import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
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

      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Cari pasar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Navbar;
