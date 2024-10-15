import { Link, useNavigate } from "react-router-dom";
import "../Styles/addprojects.css";
import { useContext, useState } from "react";
import { Projectcontext } from "./Projectprovider";

export default function Addprojectdata() {
  //take project data
  const { handleprojectdata } = useContext(Projectcontext);

  const handleNavigate = useNavigate();

  const [projectname, setprojectname] = useState("");
  const [projectdescription, setprojectdescription] = useState("");
  const [projectleader, setprojectleader] = useState("");
  const [leaderrole, setleaderrole] = useState("");
  const [errors, seterrors] = useState({});

  //validate user inputs
  const validateInputs = () => {
    const errors = {};

    if (!projectname) {
      errors.projectname = "Project name is required.";
    }

    if (!projectdescription) {
      errors.projectdescription = "Project description is required.";
    }

    if (!projectleader) {
      errors.projectleader = "Project leader is required.";
    }

    if (!leaderrole) {
      errors.leaderrole = "Leader role is required.";
    }

    return errors;
  };

  //handle project data
  const addprojectdata = () => {
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length === 0) {
      handleprojectdata({
        name: projectname,
        description: projectdescription,
        leader: projectleader,
        role: leaderrole,
      });
      handleNavigate("/newtask");
    } else {
      seterrors(validationErrors);
    }
  };

  return (
    <div className="Addprojectdata">
      <div className="Addprojectdata-intro">
        <p>Step One</p>
      </div>
      {/* project data form */}
      <div className="Addprojectdataform">
        <div className="addprojectmain">
          <h2>Add New Project</h2>
          <p>Fill out the project details below</p>
        </div>
        <div className="Addprojectdatadiv">
          <label htmlFor="ProjectName">Project Name</label>
          <input
            type="text"
            name="ProjectName"
            onChange={(e) => setprojectname(e.target.value)}
          />
          {errors.projectname && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.projectname}
            </p>
          )}

          <label htmlFor="projectdescription">Project Description</label>
          <textarea
            name="projectdescription"
            onChange={(e) => setprojectdescription(e.target.value)}
          ></textarea>
          {errors.projectdescription && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.projectdescription}
            </p>
          )}

          <label htmlFor="projectleader">Project leader</label>
          <input
            type="text"
            name="projectleader"
            onChange={(e) => setprojectleader(e.target.value)}
          />
          {errors.projectleader && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.projectleader}
            </p>
          )}

          <label htmlFor="leaderrole">Project leader role</label>
          <input
            type="text"
            name="leaderrole"
            onChange={(e) => setleaderrole(e.target.value)}
          />
          {errors.leaderrole && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.leaderrole}
            </p>
          )}

          <div className="buttongroup">
            <Link to="/dashboard">Previous</Link>
            <button onClick={addprojectdata}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
