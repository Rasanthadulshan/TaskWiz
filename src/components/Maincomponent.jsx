import "../Styles/Maincomponent.css";
import { FaTv } from "react-icons/fa";
import { BiBookAlt } from "react-icons/bi";
import { FaExplosion } from "react-icons/fa6";
import { BiArchive } from "react-icons/bi";

export default function MainComponent() {
  const data = [
    {
      name: "Resource Management",
      icon: <BiBookAlt />,
      description:
        "Discuss how you manage resources such as time,budget,and personnel to ensure project success.",
    },
    {
      name: "Risk Management",
      icon: <FaExplosion />,
      description:
        "Describe your process for identifying,assessing,and mitigating risks throughout the project lifecycle.",
    },
    {
      name: "Project Planning & Strategy",
      icon: <FaTv />,
      description:
        "Explain your approach to project planning, including setting objectives,defining scope,and developing a detailed project strategy.",
    },
    {
      name: "Technology & Tools",
      icon: <BiArchive />,
      description:
        "Highlight the project management tools and software you use to manage projects efficiently.",
    },
  ];
 
  return (
    <div className="service-page">
      <div className="service-title">
        <h4>WHAT WE DO</h4>
      </div>
      <div className="service-intro">
        <h1>
          We've got everything you need to <br />
          launch and grow your business
        </h1>
      </div>

      <div className="service-container">
        {data.map((value, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{value.icon}</div>
            <div className="service-name"> <h2>{value.name}</h2></div>
            <div className="service-des"> <p>{value.description}</p></div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
