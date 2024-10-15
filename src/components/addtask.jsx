import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import "../Styles/addtasks.css";
import { Projectcontext } from "./Projectprovider";

export default function Addnewtask() {
  const handleNavigate = useNavigate();
  const count = useRef(0); //to take at least one task
  const { handletaskdata } = useContext(Projectcontext); //handle task data

  const [taskname, settaskname] = useState("");
  const [membername, setmembername] = useState("");
  const [estimatedhours, setestimatedhours] = useState(0);
  const [errors, seterrors] = useState({});

  //validate user inputs
  const validateInputs = () => {
    const errors = {};

    if (!taskname) {
      errors.taskname = "Task name is required.";
    }

    if (!membername) {
      errors.membername = "Member name is required.";
    }

    if (!estimatedhours) {
      errors.estimatedhours = "Estimated hours is required.";
    }

    return errors;
  };

  //handle tasks
  const addtasks = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      handletaskdata({
        task: taskname,
        member: membername,
        hours: estimatedhours,
      });
      count.current++;
      alert(`Task ${count.current} added`);
    } else {
      seterrors(validationErrors);
    }
  };

  //add new task
  const addnewtask = () => {
    settaskname("");
    setmembername("");
    setestimatedhours(0);
  };

  const handlenext = () => {
    if (count.current > 0) {
      handleNavigate("/projects");
    } else {
      alert("Please add at least one task");
    }
  };

  return (
    <div className="Addtaskdata">
      <div className="Addtaskdata-intro">
        <p>Step Two</p>
      </div>
      {/* task form */}
      <div className="Addtaskdataform">
        <div className="addtasksmain">
          <h2>Add New Task</h2>
          <p>Fill out the Task details below</p>
        </div>
        <div className="Addtasksheader">
          <button className="addbutton" onClick={addnewtask}>
            Add new task
          </button>
        </div>
        <div className="Addtaskdatadiv">
          <label htmlFor="taskname">Task Name</label>
          <input
            type="text"
            name="taskname"
            value={taskname}
            onChange={(e) => settaskname(e.target.value)}
          />
          {errors.taskname && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.taskname}
            </p>
          )}

          <label htmlFor="membername">Member Name</label>
          <input
            type="text"
            name="membername"
            value={membername}
            onChange={(e) => setmembername(e.target.value)}
          />
          {errors.membername && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.membername}
            </p>
          )}

          <label htmlFor="estimatedhours">Estimated Hours</label>
          <input
            type="number"
            name="estimatedhours"
            value={estimatedhours}
            onChange={(e) => setestimatedhours(e.target.value)}
          />
          {errors.estimatedhours && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {errors.estimatedhours}
            </p>
          )}
        </div>
        <div className="buttongroup">
          <Link to="/newproject">Pre</Link>
          <button className="addbutton" onClick={addtasks}>
            Add Task
          </button>
          <button onClick={handlenext}>Next</button>
        </div>
      </div>
    </div>
  );
}
