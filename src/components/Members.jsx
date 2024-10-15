import { sampleProjects } from "../Sampledata/data";
import { useState, useEffect } from "react";
//using Existingdata.css file for styles
import "../Styles/Existingdata.css";

export default function Memberscomponent() {
  const [totalmembers, settotalmembers] = useState(0);
  const [groups, setgroups] = useState(0);

  //finding all members's names
  const findtotalmembers = () => {
    let totalmembers = 0;
    sampleProjects.forEach((project) => {
      project.tasks.forEach((task) => {
        task.members.forEach((member) => {
          if (member.name) {
            totalmembers += 1;
          }
        });
      });
    });
    return totalmembers;
  };

  useEffect(() => {
    settotalmembers(findtotalmembers());
    setgroups(sampleProjects.length);
  }, []);

  return (
    <div className="data">
      <h4>Members</h4>
      <p>
        Total Members : <span>{totalmembers}</span>
      </p>
      <p>
        <span>{groups}</span> groups
      </p>
    </div>
  );
}
