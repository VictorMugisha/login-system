import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <div className="flex space-x-4">
        <Link to="/signup">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
