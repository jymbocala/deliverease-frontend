import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUser } from "../api/users";

// Profile component
function Profile() {
  // State variables for the email, password, and current password input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  // Hook for programmatically navigating to different routes
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Call the updateUser function with the email, password, and current password
      await updateUser({ email, password, currentPassword });
      // Display a success message
      toast.success("Profile updated successfully");
      // After a delay of 2 seconds, redirect to the home page
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 2000); // Delay of 2 seconds
    } catch (error) {
      // If an error occurred, display an error message
      toast.error(`Error updating profile: ${error.message}`);
    }
  };

  // Render the form
  return (
    <div className="flex flex-col items-center h-screen py-24 text-gray-600">
      <ToastContainer /> {/* Container for the toast notifications */}
      <h1 className="mb-4 text-4xl text-center font-medium text-primary">
        PROFILE
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-16 text-center">
        Update your password below.
      </p>
      <form className="w-full max-w-xs" onSubmit={handleSubmit}>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state variable when the input value changes
          required
        />
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="currentPassword"
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)} // Update the currentPassword state variable when the input value changes
          required
        />
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the password state variable when the input value changes
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 mt-2 text-white bg-primary hover:bg-secondary rounded focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
