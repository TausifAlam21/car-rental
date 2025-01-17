import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

function Promotions() {
  return (
    <div className="promotions-banner my-5">
      <div className="promotion-content">
        <h2>Promotion/Offers</h2>
        <p>Contact us now!</p>
        <Link to="/contact">
          <button className="promotion-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Promotions;
