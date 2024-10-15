import { useContext, useEffect, useState } from "react";
import { Projectcontext } from "./Projectprovider";
import "../Styles/Yourproject.css";
import { Link } from "react-router-dom";

export default function Yourprojects() {
  //takes users added project data using useContext
  const { projectdata, taskdata } = useContext(Projectcontext);

  const [isnewtask, setisnewtask] = useState(false);
  const [prodata, setprodata] = useState(null);
  const [tasksdata, settasksdata] = useState(null);
  const [newtaskname, setnewtaskname] = useState("");
  const [newmembername, setnewmembername] = useState("");
  const [newtaskhours, setnewtaskhours] = useState(0);

  useEffect(() => {
    if (projectdata && taskdata) {
      localStorage.setItem("projectdata", JSON.stringify(projectdata));
      localStorage.setItem("taskdata", JSON.stringify(taskdata));
    }
    const getprojectdata = localStorage.getItem("projectdata");
    const gettasksdata = localStorage.getItem("taskdata");

    if (getprojectdata) {
      setprodata(JSON.parse(getprojectdata));
    }
    if (gettasksdata) {
      settasksdata(JSON.parse(gettasksdata));
    }
  }, [isnewtask]);

  const hanldenewtask = () => {
    setisnewtask(true);
  };

  const handlecancel = () => {
    setnewtaskname("");
    setnewmembername("");
    setnewtaskhours("");
    setisnewtask(false);
  };

  //add a new task
  const handleadd = () => {
    const exsitingtasks = localStorage.getItem("taskdata") || [];
    const exsitingtasksarray = JSON.parse(exsitingtasks);
    const newtask = {
      task: newtaskname,
      member: newmembername,
      hours: newtaskhours,
    };
    exsitingtasksarray.push(newtask);
    localStorage.setItem("taskdata", JSON.stringify(exsitingtasksarray));
    setisnewtask(false);
  };

  //handle when there is no any project
  if (!prodata || !tasksdata) {
    return (
      <div className="no-data-content">
        <div className="header-content">
          <Link to="/dashboard">Back</Link>
          <p>TaskWiz</p>
        </div>
        <h3>You have no projects</h3>
        <p>
          <Link to="/newproject">Create a new project</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="yourprofile-maincontent">
      <div className="header-content">
        <Link to="/dashboard">Back</Link>
        <p>TaskWiz</p>
      </div>
      {/* Introduction about the project */}
      <div className="intro-content">
        <h2>Project Overview</h2>
        <p>
          This project management dashboard allows you to track tasks, assign
          them to team members, and manage project details efficiently. With its
          intuitive interface, you can add new tasks with detailed descriptions,
          set deadlines, and estimate hours for each task to ensure timely
          completion. You can also assign tasks to specific team members based
          on their expertise and availability, monitor progress in real-time,
          and adjust assignments as needed. The dashboard provides a
          comprehensive overview of project status, enabling you to prioritize
          tasks, set milestones, and identify potential bottlenecks.
          Additionally, you can generate reports to analyze team performance,
          track project timelines, and make data-driven decisions to keep your
          projects on track and within budget.
        </p>
      </div>
      {/* project data */}
      <div className="main-project">
        <div className="project-data">
          <div className="project-info">
            <p className="key">Project name</p>
            <p className="value">{prodata.name}</p>
          </div>
          <div className="project-info">
            <p className="key">Project Description</p>
            <p className="value">{prodata.description}</p>
          </div>
          <div className="project-info">
            <p className="key">Leader</p>
            <p className="value">{prodata.leader}</p>
          </div>
          <div className="project-info">
            <p className="key">Role</p>
            <p className="value">{prodata.role}</p>
          </div>
        </div>
        {/* adding new task */}
        {isnewtask ? (
          <div className="addnewtaskdiv">
            <div className="addnewtaskdiv-header">
              <p>Add New Task</p>
            </div>
            <div className="addnewtaskdiv-form">
              <label htmlFor="taskname">Task Name</label>
              <input
                type="text"
                name="taskname"
                onChange={(e) => setnewtaskname(e.target.value)}
              />

              <label htmlFor="membername">Member Name</label>
              <input
                type="text"
                name="membername"
                onChange={(e) => setnewmembername(e.target.value)}
              />

              <label htmlFor="estimatedhours">Estimated Hours</label>
              <input
                type="number"
                name="estimatedhours"
                onChange={(e) => setnewtaskhours(e.target.value)}
              />
            </div>
            <div className="addnewtaskdiv-buttons">
              <button className="add" onClick={() => handleadd()}>
                Add
              </button>
              <button className="cancel" onClick={handlecancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* tasks */}
        <div className="existing-tasks">
          <div className="existing-tasks-header">
            <p>Tasks</p>
            <button
              className="addnewtask-button "
              disabled={isnewtask}
              onClick={() => hanldenewtask()}
            >
              Add new task
            </button>
          </div>

          {tasksdata.map((task) => {
            return (
              <div className="existing-tasks-data">
                <p className="existing-tasks-name">Task Name: {task.task}</p>
                <p className="existing-tasks-member">
                  Assigned to: {task.member}
                </p>
                <p className="existing-tasks-hours">Hours: {task.hours}hr</p>
                <div className="existing-tasks-member-contact">
                  <button>Send an email</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
