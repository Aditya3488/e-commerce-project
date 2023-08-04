import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img
        src="./image/bg-img.jpg"
        alt="Background"
        className="background-image"
      />

      <div className="content">
        <h2>Welcome to our E-Commerce Store</h2>
        <p>Discover a wide range of products at great prices.</p>
        <div className="button-container">
          <Link to="/register" className="home-button">
            Register
          </Link>
          <Link to="/login" className="home-button">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
