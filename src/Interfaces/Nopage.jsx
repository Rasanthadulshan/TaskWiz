import { Link } from "react-router-dom";
import "../Styles/Nopage.css";

export default function Nopage() {
  return (
    <div className="nopage-content">
      <h2>Page Not Found</h2>
      <p>
        Go to the <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
