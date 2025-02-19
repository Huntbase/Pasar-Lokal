import React from "react";
import "./css/Informasi_2.css";

const Informasi = () => {
  return (
    <div className="container">
      <div className="overlay">
        <h1 className="title">Daftar Mart</h1>
        <div className="stats">
          <div className="stat">
            <p className="number">519</p>
            Sebanyak <strong>519 mini market</strong> siap melayani kebutuhan
            Anda di seluruh penjuru Bogor.
          </div>
          <div className="stat">
            <p className="number">?</p>
            Bogor juga memiliki berbagai <strong>pasar modern</strong> yang
            menawarkan pengalaman belanja nyaman dan lengkap.
          </div>
          <div className="stat">
            <p className="number">14</p>
            Kota Bogor memiliki <strong>14 pasar tradisional</strong> yang kaya
            akan budaya dan keanekaragaman produk lokal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informasi;
