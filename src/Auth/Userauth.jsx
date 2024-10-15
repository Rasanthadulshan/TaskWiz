import { Navigate } from "react-router-dom";

export default function Userauth({ children }) {
  const token = localStorage.getItem("usertoken");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}
