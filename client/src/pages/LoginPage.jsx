import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      setErrors((previousErros) => ({
        ...previousErros,
        loginFirst: location.state.error,
      }));
    }
  }, [location]);

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const api = "http://localhost:5000/signin";
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        login(data.user.userId);
        navigate("/users/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {errors && <div className="text-red-500 mb-4">{errors.loginFirst}</div>}

        <div>
          <label className="block mb-2 text-sm font-medium">
            Username or Email
          </label>
          <input
            type="text"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Sign In
        </button>

        <div className="mt-4 text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Sign Up
            </Link>
          </p>

          <p className="mt-2">
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Go back to the Homepage
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
