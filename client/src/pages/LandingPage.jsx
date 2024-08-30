import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Welcome Section */}
      <header className="flex flex-col items-center justify-center py-12 bg-blue-600 text-white px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-lg mb-6">
          Discover a world of possibilities with our platform. Sign up today to
          get started!
        </p>
        <div className="flex space-x-4">
          <Link to="/signup">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200">
              Sign Up
            </button>
          </Link>
          <Link to="/signin">
            <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600">
              Sign In
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-gray-700">
              Experience cutting-edge technology that simplifies your tasks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p className="text-gray-700">
              Enjoy seamless integration with your favorite tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-700">
              Get insights that help you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              &quot;This app changed the way I work. The simplicity and
              efficiency are unmatched.&quot;
            </p>
            <p className="text-sm font-semibold">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              &quot;I love how user-friendly the interface is. Highly
              recommended!&quot;
            </p>
            <p className="text-sm font-semibold">- John Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              &quot;A must-have tool for anyone looking to improve their
              productivity.&quot;
            </p>
            <p className="text-sm font-semibold">- Mary Johnson</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Our App. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
