import { sampleProjects } from "../Sampledata/data";
import { useState, useEffect } from "react";
//using Existingdata.css file for styles
import "../Styles/Existingdata.css";

export default function Projectcomponent() {
  const [totalprojects, settotalprojects] = useState(null);
  const [completedprojects, setcompletedprojects] = useState(null);

  //get total count of projects
  const findtotalprojects = () => {
    settotalprojects(sampleProjects.length);
  };

  //find the completed projects by task status.
  const findcompletedprojects = () => {
    let completedcount = 0;
    sampleProjects.forEach((project) => {
      const result = project.tasks.every((task) => {
        return task.status === "completed";
      });
      if (result) {
        completedcount += 1;
      }
    });
    return completedcount;
  };
  useEffect(() => {
    findtotalprojects();
    setcompletedprojects(findcompletedprojects());
  }, []);

  return (
    <div className="data">
      <h4>Projects</h4>
      <p>
        Total Projects :<span>{totalprojects}</span>
      </p>
      <p>
        <span>{completedprojects}</span> Completed
      </p>
    </div>
  );
}
