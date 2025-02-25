import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/pages/sidebar";
import Dashboard from "./components/pages/Dashboard";
import DaftarPasar from "./components/pages/Daftar";
// import PetaPasar from "./components/pages/PetaPasar"; // Pastikan ini sesuai
// import Kontak from "./components/pages/Kontak"; // Pastikan ini ada

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* <Sidebar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Daftar" element={<DaftarPasar />} />
            {/* Tambahkan route */}
            {/* Tambahkan route lain di sini */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
