import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
// import Sidebar from "./components/pages/sidebar";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        {/* <Sidebar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Tambahkan route lain di sini */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
