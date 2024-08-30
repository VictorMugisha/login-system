import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    profilePicture: null,
    phoneNumber: "",
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the image preview to the base64 string
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null); // Reset the preview if no file is selected
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const { password, repeatPassword } = formData;
    if (password !== repeatPassword) {
      setErrors(currentErros => {
        return {
          ...currentErros,
          passwordMatch: "Passwords do not match",
        }
      })
      console.log("Passwords do not match");
      return;
    }
    const api = "http://localhost:5000/signup";
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {errors && <div className="text-red-500 mb-4">{errors.passwordMatch}</div>}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
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

          <div>
            <label className="block mb-2 text-sm font-medium">
              Repeat Password
            </label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium">
              Profile Picture
            </label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            {preview && (
              <img
                src={preview}
                alt="Profile Preview"
                className="mt-4 w-32 h-32 object-cover rounded-full"
              />
            )}
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
