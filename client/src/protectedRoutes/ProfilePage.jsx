import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  // Dummy user data
  const [userData] = useState({
    ...loginUser,
    profilePicture: "https://via.placeholder.com/150",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <Navbar />

      {/* User Info Section */}
      <section className="bg-white p-6 mt-6 rounded-md shadow-md sm:m-8">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
          <label className="block text-sm font-medium">Username</label>
            <p className="mt-1 text-gray-700">{userData.username}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <p className="mt-1 text-gray-700">
              {userData.firstName} {userData.lastName}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <p className="mt-1 text-gray-700">{userData.dateOfBirth}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Occupation</label>
            <p className="mt-1 text-gray-700">{userData.occupation}</p>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Bio</label>
            <p className="mt-1 text-gray-700">{userData.bio}</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white p-6 mt-6 rounded-md shadow-md sm:m-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <p className="mt-1 text-gray-700">{userData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <p className="mt-1 text-gray-700">{userData.phoneNumber}</p>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Address</label>
            <p className="mt-1 text-gray-700">{userData.address}</p>
          </div>
        </div>
      </section>

      {/* Account Settings Section */}
      <section className="bg-white p-6 mt-6 rounded-md shadow-md sm:m-8">
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Change Email</label>
            <input
              type="email"
              placeholder="New Email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Change Phone Number
            </label>
            <input
              type="text"
              placeholder="New Phone Number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Change Address</label>
            <input
              type="text"
              placeholder="New Address"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Reset Password</label>
            <button className="mt-1 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Reset Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
