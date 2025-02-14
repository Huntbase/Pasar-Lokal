import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import slide1 from "../image/Home/slide_1.jpg";
import slide2 from "../image/Home/slide_2.jpg";
import slide3 from "../image/Home/slide_3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "../js/slidersetting.js";

import "../css/Home.css";

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
      <Navbar />
      <div className="main">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src={slide1} alt="Slide 1" className="image" />
            <div className="image-data">
              <span className="text">Enjoy the Finest Coffee Drinks.</span>
              <h2>Experience the best quality</h2>
              <Link to="/beranda" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Beranda </i>
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide2} alt="Slide 2" className="image" />
            <div className="image-data">
              <span className="text">Freshly Brewed, Just for You.</span>
              <h2>Explore our special menu</h2>
              <Link to="/beranda" className="tombol-bawah-tulisan">
                <i className="bx bx-rocket button"> Beranda </i>
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide3} alt="Slide 3" className="image" />
            <div className="image-data">
              <span className="text">Relax with Every Sip.</span>
              <h2>Feel the warmth of coffee</h2>
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
