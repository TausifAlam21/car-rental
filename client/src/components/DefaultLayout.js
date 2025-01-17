import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu>
      {user ? (
        <>
          {/* <Menu.Item>
            <a href="/">Home</a>
          </Menu.Item> */}
          {/* <Menu.Item>
            <a href="/userbookings">Bookings</a>
          </Menu.Item> */}
          <Menu.Item>
            <a href="/admin">Admin</a>
          </Menu.Item>
          {/* <Menu.Item>
            <a href="/contact">Contact</a>
          </Menu.Item> */}
          <Menu.Item
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
          >
            <li style={{ color: "slateblue" }}>Logout</li>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <a href="/login">Login</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/register">Register</a>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
  return (
    <div>
      <div className="header bs1 bg-dark">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              {/* <h1>
                <b>
                  <Link to="/" style={{ color: "slateblue" }}>
                    Car Rental
                  </Link>
                </b>
              </h1> */}
              <Link to="/">
                <img
                  src="https://i.ibb.co.com/HPwsTwC/Car-Rental.jpg"
                  alt="Car-Rental"
                  border="0"
                />
              </Link>
              <div className="d-flex align-items-center">
                <Link to="/" className="px-2 text-white">
                  Home
                </Link>
                <Link to="/userbookings" className="px-2 text-white">
                  Bookings
                </Link>
                <Link to="/contact" className="px-3 text-white">
                  Contact
                </Link>
                <Dropdown
                  overlay={menu}
                  placement="bottomCenter"
                  className="px-2"
                >
                  <Button>{user?.username || "Login"}</Button>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>

      {/* <div className="footer text-center">
        <hr />

        <p>Designed and Developed for final project</p>
      </div> */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default DefaultLayout;
