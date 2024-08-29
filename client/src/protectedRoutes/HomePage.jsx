import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  function handleLogout() {
    logout();
    navigate("/signin");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
