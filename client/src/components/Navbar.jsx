import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from the auth context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-blue-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/users/home" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/users/profile"
              className="text-white hover:text-gray-300"
            >
              Profile
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Settings
            </a>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
