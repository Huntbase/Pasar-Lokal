import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import pasarData from "../../Data/data.js";
import "./css/detail.css";
import Navbar from "../Navbar&Footer/Navbar.js";
import Footer from "../Navbar&Footer/Footer.js";

const MarketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const marketId = parseInt(id, 10);
  const market = pasarData.find((m) => m.id === marketId);

  if (!market) {
    return (
      <>
        <Navbar />
        <div className="market-detail">
          <h2>Pasar tidak ditemukan</h2>
          <button className="back-button" onClick={() => navigate(-1)}>
            <i className="bx bx-left-arrow-alt"></i> Kembali
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const {
    nama,
    lokasi,
    kota,
    gambar,
    JamOperasional,
    GoogleMaps,
    type,
    luasTanah,
    bangunan,
    komoditiUtama,
    jumlahKios,
    jumlahLos,
    jumlahNonKiosNonLos,
    nomorTeleponUnit,
  } = market;

  return (
    <>
      <Navbar />
      <section className="market-detail">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <img src={gambar} alt={`Foto ${nama}`} className="detail-image" />
        </div>
        <article className="detail-info">
          <h2>{nama}</h2>

          <p>
            <strong>Lokasi:</strong>
          </p>
          <p>{lokasi}</p>
          <p>
            <strong>Kota:</strong>
          </p>
          <p>{kota}</p>
          <p>
            <strong>Jam Operasional:</strong>
          </p>
          <p>{JamOperasional}</p>
          <p>
            <strong>Luas Tanah:</strong>
          </p>
          <p>{luasTanah}</p>
          <p>
            <strong>Luas Bangunan:</strong>
          </p>
          <p>{bangunan}</p>
          <p>
            <strong>Komoditi Utama:</strong>
          </p>
          <p>{komoditiUtama}</p>
          <p>
            <strong>Jumlah Kios:</strong>
          </p>
          <p>{jumlahKios}</p>
          <p>
            <strong>Jumlah Los:</strong>
          </p>
          <p>{jumlahLos}</p>
          <p>
            <strong>Jumlah Non Kios/Los:</strong>
          </p>
          <p>{jumlahNonKiosNonLos}</p>
          <p>
            <strong>Tipe:</strong>
          </p>
          <p>{type === "pasar" ? "Pasar Tradisional" : "Minimarket"}</p>
          <p>
            <strong>No. Telepon Unit:</strong>
          </p>
          <p>{nomorTeleponUnit}</p>

          <a
            href={GoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-button"
          >
            Buka di Google Maps
          </a>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default MarketDetail;
