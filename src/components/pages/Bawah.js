import React from "react";
import "../css/isi.css";
import slide1 from "../image/Home/slide_1.jpg";

const isi = () => {
  return (
    <section className="beach-cleanup">
      <div className="text-content">
        <h1>
          <span className="highlight">COMMITTED</span> TO CLEANING UP COASTLINES
          AND MORE
        </h1>
        <p>
          We are the Marine Conservational Society, a global nonprofit
          organization championing healthier seas and oceans. Our partners and
          volunteers work together to ensure that our waters teem with life.
        </p>
      </div>
      <div className="image-container">
        <img src={slide1} alt="Beach Cleanup" />
      </div>
    </section>
  );
};

export default isi;
