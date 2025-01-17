import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Col, Row } from "antd";
function Footer() {
  return (
    <section className="header bg-dark">
      <Row gutter={16} justify="center">
        <Col lg={20} sm={24} xs={24}>
          <div className="d-flex justify-content-between py-5">
            <div className="text-center">
              <h3 className="text-white">Links</h3>
              <div className="d-flex flex-column">
                <Link to="/" className="p-2 text-white">
                  Home
                </Link>
                <Link to="/userbookings" className="p-2 text-white">
                  Bookings
                </Link>
                <Link to="/contact" className="p-2 text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white">Follow us</h3>
              <div className="d-flex justify-content-around">
                <Link to="https://facebook.com" target="_blank">
                  <FaFacebook className="text-white" />
                </Link>
                <Link to="https://instagram.com" target="_blank">
                  <FaInstagram className="text-white" />
                </Link>
                <Link to="https://linkedin.com" target="_blank">
                  <FaLinkedin className="text-white" />
                </Link>
                <Link to="https://x.com" target="_blank">
                  <FaSquareXTwitter className="text-white" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co.com/HPwsTwC/Car-Rental.jpg"
                alt="Car-Rental"
                border="0"
              />
              <div>
                <p className="text-white" style={{fontSize:"16px"}}>We assure your safety</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white">
              Designed and Developed by ABCD © All rights reserved
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Footer;
