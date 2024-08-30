import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [user] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150",
  });

  function handleLogout() {
    logout();
    navigate("/signin");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MyApp</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Profile
              </a>
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

      {/* Welcome Section */}
      <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">
                Welcome, {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Dummy Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Dashboard</h3>
            <p className="text-gray-700">
              Access your dashboard and view your activity.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Go to Dashboard
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
            <p className="text-gray-700">
              Check out your recent activity and logs.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Activity
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Messages</h3>
            <p className="text-gray-700">View and manage your messages.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Open Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
