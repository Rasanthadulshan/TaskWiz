import { Link, useNavigate } from "react-router-dom";
import "../Styles/LoginInterface.css";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function LoginInterface() {
  const handleNavigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState({});

  //validate login details
  const validateInputs = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      //create a token and save in local storage
      const usertoken = email + "rasantha" + password;
      localStorage.setItem("usertoken", usertoken);
      localStorage.setItem("logindataemail", email);
      localStorage.setItem("logindatapassword", password);
      handleNavigate("/dashboard");
    } else {
      seterrors(validationErrors);
    }
  };

  return (
    <div className="auth-container">
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>
      {/* login content */}
      <div className="auth-content">
        {/* introduction */}
        <div className="intro">
          <div className="heading"> 
            <h1>Welcome to our Community</h1>
          </div>
          <div className="phrase">
            <p>A whole new productive journey starts right here</p>
          </div>
          <div className="picture">
            <img
              src="https://transmonqa.com/wp-content/uploads/2023/11/8104938.jpg"
              alt="Community"
              width="500"
              height="450"
            />
          </div>
        </div>
        {/* login form */}
        <div className="form-container">
          <div className="intro-container">
            <p>Log In</p>
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              className="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input
              className="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}

            <div className="login-extra">
              <label>
                <input type="checkbox" /> Keep me logged in
              </label>
              <a href="#">Recover Password</a>
            </div>

            <button type="submit" className="signin-btn">
             LOG IN
            </button>
          </form>
          <div className="social-login">
            <p className="continue">or continue with</p>
            <div className="icons">
              <button>
                <FaGooglePlusG className="social-btn" />
              </button>
              <button>
                <FaFacebookF className="social-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
