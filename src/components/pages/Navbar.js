import React from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Temu Mart</h1>
      </div>
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Home">Home</a>
        </li>
      </ul>
      <div class="navbar-search">
        <input type="text" placeholder="Search.." />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}
export default Navbar;
