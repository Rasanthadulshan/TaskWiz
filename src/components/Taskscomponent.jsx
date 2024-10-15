import { sampleProjects } from "../Sampledata/data";
import { useState, useEffect } from "react";
//using Existingdata.css file for styles
import "../Styles/Existingdata.css";

export default function Taskscomponent() {
  const [totaltaskcount, settotaltaskcount] = useState(null);
  const [completedtaskscount, setcompletedtaskscount] = useState(null);

  //finding total count of task
  const findtotaltaskcount = () => {
    let count = 0;
    sampleProjects.forEach((project) => {
      count += project.tasks.length;
    });
    return count;
  };

  //finding the count of the total completed tasks
  const findcompletedtaskscount = () => {
    let count = 0;
    sampleProjects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.status === "completed") {
          count += 1;
        }
      });
    });
    return count;
  };

  useEffect(() => {
    settotaltaskcount(findtotaltaskcount());
    setcompletedtaskscount(findcompletedtaskscount());
  }, []);

  return (
    <div className="data">
      <h4>Active Tasks</h4>
      <p>
        Total Tasks : <span>{totaltaskcount}</span>
      </p>
      <p>
        <span>{completedtaskscount}</span> Completed
      </p>
    </div>
  );
}
