import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import ScrollHandler from "./ScrollHandler";
import "./App.css";

function App() {
  const authToken = localStorage.getItem("authToken");

  return (
    <Router>
      <ScrollHandler>
        <div className="app-container">
          <img
            src="/image/bg-img.jpg"
            alt="Background"
            className="background-image"
          />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {!authToken && (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
              {authToken && (
                <li>
                  <Link to="/products">Products</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="form-overlay">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </div>
      </ScrollHandler>
    </Router>
  );
}

export default App;
