import { useState, useEffect } from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isdropdownopen, setIsdropdownopen] = useState(false);
  const [istoken, setistoken] = useState(false);

  //take token from local storage
  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      setistoken(true);
    }
  }, []);

  //This button handle the dropdown list
  const handletoggleclick = () => {
    setIsdropdownopen(!isdropdownopen);
  };

  return (
    <div className="main-container">
      {/* navigation bar */}
      <div className="main_navbar">
        <div className="logo">
          <a href="#">TaskWiz</a>
        </div>
        <div className="navbar-items">
          <div className="navbar-shorts">
            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* If the user has already logged-in,the dashboard link can be seen */}
              {istoken ? (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              ) : (
                ""
              )}

              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-createaccount">
            <Link className="Signup_button" to="/signup">
              Create an account
            </Link>
          </div>
        </div>
      </div>

      {/* dropdown_menu */}
      <div className={`dropdown_menu ${isdropdownopen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {istoken ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            ""
          )}

          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>

      {/* tag line area */}
      <div className="main">
        <div className="main-introduction">
          <h1>
            Organize <br />
            Your life with <br />
            one tool.
          </h1>
        </div>

        <div className="main-image">
          <img src="src/assets/mainimage.jpeg" alt="image 1" />
        </div>
      </div>

      {/* buttons */}
      <div className="boxButton">
        <button className="button1">
          <Link to="/newproject">Start a new project</Link>
        </button>
        <button className="button2">
          <Link to="/aboutus">More about Us</Link>
        </button>
      </div>

      {/* handle toggle_button for the dropdown menu */}
      <div className="toggle_button">
        <button onClick={handletoggleclick}>
          <img
            src={
              isdropdownopen ? "src/assets/close.png" : "src/assets/menu.png"
            }
            alt="menu"
          />
        </button>
      </div>
    </div>
  );
}
