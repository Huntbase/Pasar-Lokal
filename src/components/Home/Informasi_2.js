import React from "react";
import "./css/Informasi_2.css";

const Informasi = () => {
  return (
    <div className="container">
      <h1 className="title">Daftar Mart</h1>

      <div className="overlay">
        <div className="stats">
          <div className="stat">
            <p className="number">519</p>
            Sebanyak <b>519 mini market</b> siap melayani kebutuhan Anda di
            seluruh penjuru Bogor.
          </div>
          <div className="stat">
            <p className="number">513</p>
            Bogor juga memiliki berbagai <b>513 pasar modern</b> yang menawarkan
            pengalaman belanja nyaman dan lengkap.
          </div>
          <div className="stat">
            <p className="number">14</p>
            Kota Bogor memiliki <b>14 pasar tradisional</b> yang kaya akan
            budaya dan keanekaragaman produk lokal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informasi;
