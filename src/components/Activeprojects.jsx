import { Link } from "react-router-dom";
import { sampleProjects } from "../Sampledata/data";
import "../Styles/Activeprojects.css";

export default function Activeproject() {
  return (
    <div className="activeproject-tablecontainer">
      <h3>Projects</h3>
      <table className="activeprojecttable">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Hours</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {sampleProjects.map((project) => {
            let totalhours = 0;
            let completedcount = 0;
            let progress = 0;
            project.tasks.forEach((task) => {
              totalhours += task.hours;
              if (task.status === "completed") {
                completedcount += 1;
              }
            });
            progress = (completedcount / project.tasks.length) * 100;
            return (
              <tr key={project.id.toString()}>
                <td>
                  <Link to={`/dashboard/${project.id}`}>
                    {project.projectName}
                  </Link>
                </td>
                <td>{totalhours} HR</td>
                <td>
                  <div className="progress-wrapper">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
