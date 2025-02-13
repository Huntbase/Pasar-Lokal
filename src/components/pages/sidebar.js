import React, { useEffect, useState } from "react";
import logo from "../image/logo_sidebar.png";
import "../css/sidebar.css";

function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      console.log("Collapsed state:", !prev);
      return !prev;
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`sidebar-content ${isCollapsed ? "collapsed" : ""}`}>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img
                src={logo}
                alt="logo"
                className={isCollapsed ? "collapsed-logo" : ""}
              />
            </span>
            {!isCollapsed && (
              <div className="text header-text">
                <span className="name">Temu Mart</span>
                <span className="profession">
                  Dinas Koperasi UMKM Perdagangan <br /> dan Perindustrian Kota
                  Bogor
                </span>
              </div>
            )}
          </div>
          <i
            className={`bx bx-chevron-${isCollapsed ? "right" : "left"} toggle`}
            onClick={toggleSidebar}
          ></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              {[
                "Dashboard",
                "Settings",
                "Profile",
                "Reports",
                "Messages",
                "Help",
              ].map((item, index) => (
                <li className="nav-link" key={index}>
                  <a href="Dashboard">
                    <i className="bx bx-home icon"></i>
                    {!isCollapsed && (
                      <span className="text nav-text">{item}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="Out">
                <i className="bx bx-log-out icon"></i>
                {!isCollapsed && <span className="text nav-text">Logout</span>}
              </a>
            </li>
            <li className="mode">
              <div className="moon-sun">
                <i
                  className={`bx bx-moon icon moon ${
                    isDarkMode ? "active" : ""
                  }`}
                ></i>
                <i
                  className={`bx bx-sun icon sun ${isDarkMode ? "active" : ""}`}
                ></i>
              </div>
              {!isCollapsed && (
                <span className="mode-text text">Dark Mode</span>
              )}
              <div className="toggle-switch" onClick={toggleDarkMode}>
                <span className={`switch ${isDarkMode ? "active" : ""}`}></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
