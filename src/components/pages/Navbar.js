import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Temu Mart</h1>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
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
