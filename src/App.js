import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/pages/sidebar";
import Dashboard from "./components/pages/Dashboard";
import DaftarPasar from "./components/pages/Daftar";
import MarketDetail from "./components/Daftar/MarketDetail";
// import PetaPasar from "./components/pages/PetaPasar"; // Pastikan ini sesuai
// import Kontak from "./components/pages/Kontak"; // Pastikan ini ada
import SearchResults from "./components/Navbar&Footer/SearchResults";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* <Sidebar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Daftar" element={<DaftarPasar />} />
            <Route path="/peta-pasar" element={<h1>Peta Pasar</h1>} />
            <Route path="/kontak" element={<h1>Kontak</h1>} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/market/:id" element={<MarketDetail />} />
            {/* Tambahkan route lain di sini */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
