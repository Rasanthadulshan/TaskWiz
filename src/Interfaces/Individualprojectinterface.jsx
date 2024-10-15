import { Link, useParams } from "react-router-dom";
import { sampleProjects } from "../Sampledata/data";
import { useState, useEffect } from "react";

import "../Styles/Individualprojectinterface.css";
import uparrow from "../assets/up.png";

export default function Individualprojectinterface() {
  //use id parameter to get the project details from data.jsx file
  const { id } = useParams();
  const newid = Number(id);

  const [project, setproject] = useState(null);

  useEffect(() => {
    const getproject = sampleProjects.find((id) => id.id === newid);
    if (getproject) {
      let completedcount = 0;
      getproject.tasks.forEach((task) => {
        if (task.status === "completed") {
          completedcount += 1;
        }
      });

      setproject(getproject);
    }
  }, [newid]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-maincontainer">
      <div className="p-backbutton">
        <Link to="/dashboard">Back</Link>
      </div>
      {/* project main details */}
      <div className="p-header">
        <h1>{project.projectName}</h1>
        <p className="description">{project.description}</p>
        <p className="leader">
          <strong>Team Leader:</strong> {project.teamLeader.name}
        </p>
        <p className="leaderrole">{project.teamLeader.role}</p>
      </div>

      {/* Task details */}
      <div className="p-taskscontainer">
        <div className="uparrow">
          <img src={uparrow} alt="up arrow" onClick={goToTop} />
        </div>

        {project.tasks.map((task, index) => (
          <div key={index} className="p-card">
            <h3 className="taskname">{task.taskName}</h3>

            <p className="taskstatus">
              Status:
              <span
                className={
                  task.status === "completed" ? "completed" : "not-completed"
                }
              >
                {task.status}
              </span>
            </p>

            <p className="taskhours">Estimated Hours: {task.hours}hr</p>

            <div className="taskmembers">
              <h4>Assigned Members:</h4>
              {task.members.map((member, id) => (
                <div key={id} className="member">
                  <span className="membername">{member.name}</span>
                  <span className="memberrole">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
