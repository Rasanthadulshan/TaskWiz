import "../Styles/Accountsettings.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export default function Accountsettings() {
  const [useremail, setuseremail] = useState(null);
  const [userpassword, setuserpassword] = useState(null);

  useEffect(() => {
    const getlogindataemail = localStorage.getItem("logindataemail");
    const getlogindatapassword = localStorage.getItem("logindatapassword");
    if (getlogindataemail) {
      setuseremail(getlogindataemail);
    }
    if (getlogindatapassword) {
      setuserpassword(getlogindatapassword);
    }
  }, []);

  return (
    <div className="accountsettings-container">
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>
      {/* form */}
      <div className="accountsettings-data">
        <div className="accountsettings-sidebar">
          <div className="accountsettings-profile">
            <img
              className="image"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <nav className="accountsettings-menu">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link>Account Details</Link>
              </li>

              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="accountsettings-content">
          <h2>Account Settings</h2>
          <form className="accountsettings-settings-form">
            <label>Email</label>
            <input type="email" value={useremail} />

            <label>Username</label>
            <input type="text" placeholder="Add an username" />

            <label>Password</label>
            <input type="password" value={userpassword} />

            <label>Phone number</label>
            <input type="tel" placeholder="Add contact number" />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}
