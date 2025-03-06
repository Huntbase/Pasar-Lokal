import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
              <span className="text">Temu Mart</span>
              <h2>Temukan Informasi yang kamu inginkan</h2>
              <Link to="/beranda" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Beranda </i>
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide2} alt="Slide 2" className="image" />
            <div className="image-data">
              <span className="text">Temu Mart</span>
              <h2>Pasar Tradisional dan Minimarket</h2>
              <Link to="/beranda" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Beranda </i>
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide3} alt="Slide 3" className="image" />
            <div className="image-data">
              <span className="text">Temu Mart</span>
              <h2>Menyediakan berbagai Informasi</h2>
              <Link to="/beranda" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Beranda </i>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
