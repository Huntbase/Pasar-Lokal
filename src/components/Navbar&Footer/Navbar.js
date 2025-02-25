import React, { useEffect } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
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
      <div className="navbar-search">
        <input type="text" placeholder="Search.." />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default Navbar;
