import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="content-box">
        <h1 className="hero-title">Hero Title</h1>
        <p className="hero-description">
          Hero Description Hero Description Description
        </p>
        <Link to="/book-cars">
          <button className="book-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
