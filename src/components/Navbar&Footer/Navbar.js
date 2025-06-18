import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pasarData } from "../../Data/data";
import gambar from "../../Asset/image3.png";
import "./css/Navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;

    const filteredResults = pasarData.filter((pasar) =>
      pasar.nama.toLowerCase().includes(searchQuery)
    );

    navigate("/search-results", { state: { results: filteredResults } });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // contoh jika pakai React state
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">
            <img src={gambar} alt="Logo Pasar Lokal" className="logo-image" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      <ul className={menuOpen ? "active" : ""}>
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
          <Link to="/FAQ">
            <i className="bx bx-comment-detail"></i> FAQ Pasar
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
