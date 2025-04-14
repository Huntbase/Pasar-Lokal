import React from "react";
import "./css/Informasi.css";
import slide1 from "../image/gambar1/gambar1.jpg";

const isi = () => {
  return (
    <section className="beach-cleanup">
      <div className="text-content">
        <h1>
          <span className="highlight">PASAR</span>
        </h1>
        <p>
          Pasar merupakan tempat bertemunya penjual dan pembeli untuk melakukan
          transaksi jual beli barang atau jasa. Di pasar, tersedia beragam
          kebutuhan sehari-hari seperti makanan, pakaian, hingga perlengkapan
          rumah tangga. Selain menjadi pusat perdagangan, pasar juga menjadi
          tempat interaksi sosial masyarakat yang mempererat hubungan antar
          sesama.
        </p>
      </div>
      <div className="image-container">
        <img src={slide1} alt="Beach Cleanup" />
      </div>
    </section>
  );
};

export default isi;
