import { Link } from "react-router-dom";
import Activeproject from "../components/Activeprojects";
import Memberscomponent from "../components/Members";
import Projectcomponent from "../components/Projectscomponent";
import Taskscomponent from "../components/Taskscomponent";
import Leaders from "../components/Leaders";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "../Styles/Dashboardinterface.css";

export default function Dashboardinterface() {
  //handle sidebar
  const [issidebaron, setissidebaron] = useState(false);

  const handlesidebar = () => {
    setissidebaron(!issidebaron);
  };

  return (
    <div className="dashboard">
      {/* sidebar */}
      <div className={issidebaron ? "sidebar-on" : "sidebar-off"}>
        <div className="brand-name">
          <p>TaskWiz</p>
        </div>
        <div className="sidebar-items">
          <a>
            <img src="src\assets\dashboardicon.png" alt="Dashboard Icon" />
            <span>
              <b>Dashboard</b>
            </span>
          </a>
          <Link to="/">
            <img src="src/assets/home.png" alt="Home Icon" />
            <span>
              <b>Home</b>
            </span>
          </Link>
          <Link to="/improveskills">
            <img src="src\assets\skillicon.png" alt="Skill Icon" />
            <span>
              <b>Improve Skills</b>
            </span>
          </Link>

          <Link to="/getpremium">
            <img src="src\assets\upgradeicon.png" alt="Upgrade Icon" />
            <span>
              <b>Get Premium</b>
            </span>
          </Link>
        </div>
     
      </div>
      {/* rest */}
      <div className="content">
        <div className="dashboard-header">
          <button onClick={handlesidebar}>
            <img src="src\assets\menu.png" alt="menu button" />
          </button>
          <h2>TaskWiz</h2>
        </div>
        <div className="navbarcontainer">
          <div className="new-project">
            <Link to="/newproject">Create a new project</Link>
          </div>

          <div className="profile">
            <span>
              <FaUser />
            </span>
            <div class="dropdowncontent">
              <Link to="/projects">Your Projects</Link>
              <Link to="/accountsettings">Account Settings</Link>
              <Link to="/login">Log out</Link>
            </div>
          </div>
        </div>
        <div className="cardset">
          <div className="card">
            <div className="icon">
              <img src="src\assets\project.png" alt="Project Icon" />
            </div>
            <div className="items">
              {/* component about projects details */}
              <Projectcomponent />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src="src\assets\tasks.png" alt="Task Icon" />
            </div>
            <div className="items">
              {/* component about tasks details */}
              <Taskscomponent />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src="src\assets\members.png" alt="Members Icon" />
            </div>
            <div className="items">
              {/* component about members details */}
              <Memberscomponent />
            </div>
          </div>
        </div>
        {/* project details table */}
        <div className="activeprojects">
          <Activeproject />
        </div>
        {/* project leader table */}
        <div className="activeprojects">
          <Leaders />
        </div>
      </div>
    </div>
  );
}
