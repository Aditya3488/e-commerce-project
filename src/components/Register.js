import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import "./FormInput.css";

const Register = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setShowLogin((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    try {
      if (showLogin) {
        const response = await axios.post("http://3.15.164.228:8082/login", {
          email,
          password,
        });
        console.log("Login successful:", response.data);
      } else {
        const response = await axios.post("http://3.15.164.228:8082/signup", {
          username,
          email,
          password,
        });
        console.log("Signup successful:", response.data);

        alert("Signup successful. You can now login with your credentials.");
      }

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("An error occurred. Please try again later.");
      }

      console.error("Error:", error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>{showLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {showLogin ? (
            <>
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button className="form-button" type="submit">
                Login
              </button>
            </>
          ) : (
            <>
              <label className="form-label" htmlFor="username">
                Username:
              </label>
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button className="form-button" type="submit">
                Signup
              </button>
            </>
          )}
        </form>

        <p>
          {showLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-link" onClick={toggleForm}>
            {showLogin ? " Signup" : " Login"}
            <span className="click-option"> (click)</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
