import { Link } from "react-router-dom";
import "../Styles/Contactus.css";

export default function Contactus() {
  return (
    <div className="contact-container">
      {/* back button */}
      <div className="contact-back-button">
        <Link to="/">Back</Link>
      </div>
      {/* rest */}
      <div className="contact-content">
        {/* introduction */}
        <div className="info-section">
          <h2>Welcome to our Contact Us page!</h2>
          <p>
            We’re excited to hear from you. Our site offers tools and resources
            to make project management easier and more efficient. If you have
            questions, need support, or want to give feedback, we’re here to
            help.
          </p>
          <p>
            Just fill out the contact form below, and our team will get back to
            you as soon as possible. Your success is important to us, and we
            look forward to assisting you with your project needs. Thank you for
            reaching out!
          </p>
          <p>
            Email us at :
            <a href="mailto:info@mywebsite.com"> info@mywebsite.com</a>
          </p>
        </div>
        {/* form */}
        <div className="form-section">
          <form>
            <h3>How can we help?</h3>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Organization</label>
              <input type="text" name="organization" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Project Description</label>
              <textarea name="projectDescription" required></textarea>
            </div>
            <div className="form-group">
              <label>Budget</label>
              <select name="budget">
                <option value="">Choose...</option>
                <option value="<$5,000">Less than $5,000</option>
                <option value="$5,000-$10,000">$5,000 - $10,000</option>
                <option value=">$10,000">More than $10,000</option>
              </select>
            </div>
            <div className="form-group">
              <label>Target Launch</label>
              <input type="date" name="targetLaunch" />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
