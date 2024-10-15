//we used same css(LoginInterface.css) file to signup page and login page
import "../Styles/LoginInterface.css";

import { Link, useNavigate } from "react-router-dom";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function SignupInterface() {
  const handleNavigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [errors, seterrors] = useState({});

  //validate the user inputs
  const validateInputs = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required.";
    }

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

    if (!conpassword) {
      errors.conpassword = "Confirm Password is required.";
    } else if (password !== conpassword) {
      errors.conpassword = "Passwords do not match.";
    }

    return errors;
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      handleNavigate("/login");
    } else {
      seterrors(validationErrors);
    }
  };

  return (
    <div className="auth-container">
      {/* back button */}
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>

      <div className="auth-content">
        {/* heading part */}
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
        {/* form */}
        <div className="form-container">
          <div className="intro-container">
            <p>Create a new account</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            {/* handling errors */}
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input
              className="password"
              type="text"
              placeholder="Username"
              onChange={(e) => setusername(e.target.value)}
              value={username}
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
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
            <input
              className="password"
              type="password"
              placeholder="Re enter Password"
              onChange={(e) => setconpassword(e.target.value)}
              value={conpassword}
            />
            {errors.conpassword && (
              <p style={{ color: "red" }}>{errors.conpassword}</p>
            )}

            <button type="submit" className="signin-btn">
              SIGN UP
            </button>
            <div className="existing_users">
              <p>Already have an account :</p>
              <span>
                <Link to="/login">Login here</Link>
              </span>
            </div>
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
