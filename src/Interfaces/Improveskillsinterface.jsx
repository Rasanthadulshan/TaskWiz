import { projectManagementSkills } from "../Sampledata/improveskillsdata";
import "../Styles/Improveskillsinterface.css";
import { Link } from "react-router-dom";

export default function ImproveskillsInterface() {
  return (
    <div className="improveskills-container">
      <div className="improveskills-header">
        <Link to="/dashboard">Back</Link>
        <h1>Mastering Skills for Personal and Professional Growth</h1>
      </div>

      <div className="improveskills-container-intro">
        <p>
          Welcome to <strong>Improve Skills</strong>, your one-stop destination
          for mastering the key skills that drive success in both personal and
          professional life. From developing effective communication and time
          management techniques to enhancing technical abilities and creative
          thinking, we provide practical insights to help you excel. No matter
          your goals, we're here to guide you every step of the way in your
          journey toward continuous improvement.
        </p>
      </div>
      <div className="improveskills-content-intro">
        <h2>Top Skills to Improve</h2>
      </div>

      <div className="improveskills-content">
        {projectManagementSkills.map((skill) => {
          return (
            <div className="improveskills-card-data">
              <h2>{skill.skillName}</h2>
              <p>{skill.description}</p>
              <div className="improveskills-card-data-content">
                {skill.content.map((con) => {
                  return (
                    <div className="improveskills-card-data-course">{con}</div>
                  );
                })}
              </div>

              <div className="improveskills-card-data-users">
                {skill.enrollUsers} already enrolled
              </div>
              <div className="improveskills-card-data-buttons">
                <div className="improveskills-card-data-review">
                  <button>Reviews</button>
                </div>
                <div className="improveskills-card-data-enrollnow">
                  <p>Enroll Now</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="improveskills-updates">
        <h2>Stay with us</h2>
        <p>
          <strong>Subscripe us</strong> for get to update about skills
        </p>
        <div class="improveskills-updates-mails">
          <input type="email" />
          <button>Send a mail</button>
        </div>
      </div>
    </div>
  );
}
