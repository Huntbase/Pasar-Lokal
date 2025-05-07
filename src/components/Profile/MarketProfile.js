import React from "react";
import "./css/profile.css";

const MarketProfile = () => {
  return (
    <div className="market-profile">
      <h1 className="title">Pasar Kita</h1>
      <p className="description">
        Pasar Kita adalah platform web yang menyediakan informasi lengkap
        tentang pasar-pasar tradisional di berbagai daerah. Dibangun dengan
        React, website ini bertujuan membantu masyarakat dalam menemukan pasar
        terdekat dengan mudah dan cepat.
      </p>

      <section className="features">
        <h2>Fitur Utama</h2>
        <ul>
          <li>Pencarian pasar berdasarkan nama atau kota</li>
          <li>Integrasi Google Maps untuk lokasi pasar</li>
          <li>Galeri gambar pasar</li>
          <li>Informasi jam operasional</li>
          <li>Desain responsif</li>
        </ul>
      </section>

      <section className="target-users">
        <h2>Target Pengguna</h2>
        <p>
          Website ini ditujukan untuk masyarakat umum, pengelola pasar, serta
          pedagang pasar tradisional.
        </p>
      </section>
    </div>
  );
};

export default MarketProfile;
