import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Component for the reset password form
const ResetPassword = () => {
  // Get the token from the URL parameters
  const { token } = useParams();
  // State variables for the new password and confirm password input fields
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Hook for programmatically navigating to different routes
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // If the new password and confirm password do not match, display an error message and return
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      // Send a POST request to the reset password endpoint with the new password
      const response = await axios.post(
        `https://deliverease-api.onrender.com/reset-password/${token}`,
        { newPassword }
      );
      // Display a success message
      toast.success(response.data.message);
      // After a delay of 2 seconds, redirect to the home page
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 2000); // Delay of 2 seconds
    } catch (error) {
      // If an error occurred, display an error message
      toast.error(`Error: ${error.response.data.message}`);
    }
  };

  // Render the form
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ToastContainer /> {/* Container for the toast notifications */}
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      <form className="w-full max-w-xs" onSubmit={handleSubmit}>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="newPassword"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} // Update the newPassword state variable when the input value changes
          required
        />
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Update the confirmPassword state variable when the input value changes
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 mt-2 text-white bg-primary hover:bg-secondary rounded focus:outline-none focus:shadow-outline"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
