import { useState, useEffect } from "react";
import "../Styles/MainComponentCounter.css";

export default function MainComponentCounter() {
  const [partners, setPartners] = useState(1);
  const [ongoing, setOngoing] = useState(1);
  const [members, setMembers] = useState(1);

  //handle the counts
  function countUp(start, target, duration, setter) {
    let increment = (target - start) / (duration / 50);
    let current = start;

    let counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(counter);
        setter(target);
      } else {
        setter(Math.floor(current));
      }
    }, 50);
  }

  //run the count when the component render
  useEffect(() => {
    countUp(1, 50, 5000, setPartners);
    countUp(1, 30, 5000, setOngoing);
    countUp(1, 98, 5000, setMembers);
  }, []);

  return (
    <div className="MainComponentCounter_container">
      <div className="intro">
        <p>HELLO THERE</p>
      </div>
      <div className="title">
        <h1>We Are Taskwiz</h1>
      </div>
      <div className="caption">
        <p>
          At Taskwiz, we bring together a thriving community of professionals,
          empowering them to collaborate on meaningful projects. With a growing
          network of partners and members, we continue to drive innovation and
          success, making each project a step toward a brighter future. Join us
          and be part of this journey!
        </p>
      </div>

      <div className="stats">
        <div className="stat-item">
          <p className="number">{partners}</p>
          <p className="label">Partners</p>
        </div>
        <div className="stat-item">
          <p className="number">{ongoing}</p>
          <p className="label">Ongoing Projects</p>
        </div>
        <div className="stat-item">
          <p className="number">{members}</p>
          <p className="label">Members</p>
        </div>
      </div>
    </div>
  );
}
