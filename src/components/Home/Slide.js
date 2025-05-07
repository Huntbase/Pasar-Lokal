import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import slide1 from "../image/Home/slide_1.jpg";
import slide2 from "../image/Home/slide_2.jpg";
import slide3 from "../image/Home/slide_3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "./Js/slidersetting.js";
import "./css/slide.css";

const Home = () => {
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

  return (
    <>
      <div className="main">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src={slide1} alt="Slide 1" className="image" />
            <div className="image-data">
              <span className="text">Pasar Sila</span>
              <h2>Jelajahi Dunia Pasar di Ujung Jari Anda!</h2>
              <Link to="/Daftar" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Lihat Daftar Pasar </i>
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide2} alt="Slide 2" className="image" />
            <div className="image-data">
              <span className="text">Pasar Sila</span>
              <h2>
                Dari Pasar Tradisional hingga Minimarket Modern Semua Informasi
                dalam Satu Tempat!
              </h2>
              <Link to="/Daftar" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Jelajahi Sekarang </i>
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide3} alt="Slide 3" className="image" />
            <div className="image-data">
              <span className="text">Pasar Sila</span>
              <h2>
                Butuh Info Pasar? Kami Punya Jawabannya! Akses mudah & cepat
                hanya di Pasar Sila.
              </h2>
              <Link to="/Daftar" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Mulai Sekarang </i>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
