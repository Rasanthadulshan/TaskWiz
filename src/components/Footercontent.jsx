import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import "../Styles/footercontent.css";

export default function Footer() {
  return (
    // there are 3 columns in the footer part
    <div className="footer-container">

      <div className="footer-column">
        <h1>About Us</h1>
        <p className="aboutus">
          At Project Management Web Application, we empower creators,
          innovators, and learners to bring their ideas to life. Whether you're
          working on school projects, DIY crafts, or professional portfolios, we
          provide the tools, resources, and inspiration to help you succeed.
          Join our community and start making today!
        </p> 
      </div>
      <div className="footer-column">
        <h1>Contact Us</h1>
        <p className="aboutus">
          Have questions or need support? Reach out to us at{" "}
          <span>www.web.project.@gmail.com</span>. We're here to help you every
          step of the way.
        </p>
      </div>
      <div className="footer-column">
        <h1>Stay Connected</h1>
        <p className="aboutus">
          Follow us on social media to stay updated with the latest trends,
          tips, and project ideas.
        </p>
        <div className="buttons">
          <div className="icon">
            <a href="">
              <FaFacebook />
            </a>
          </div>

          <div className="icon">
            <a href="">
              <FaInstagram />
            </a>
          </div>

          <div className="icon">
            <a href="">
              <FaTwitter />
            </a>
          </div>

          <div className="icon">
            <a href="">
              <FaLinkedin />
            </a>
          </div>

          <div className="icon">
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
