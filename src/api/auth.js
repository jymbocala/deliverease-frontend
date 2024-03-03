// API functions related to authentication

// Base URL for the API
const BASE_URL = "https://deliverease-api.onrender.com";

// LOGIN USER
// This function takes in login form data and sends a POST request to the login endpoint
const loginUser = async (loginFormData) => {
  try {
    // Send a POST request to the login endpoint
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Convert the form data to JSON
      body: JSON.stringify(loginFormData),
    });

    // Parse the response as JSON
    const data = await response.json();

    // If the response was not ok (status code not in the range 200-299), throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }

    // Store the token and user ID in local storage
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId); // Assuming the user's ID is returned as `userId` in the response

    // Return the token
    return data.token;
  } catch (error) {
    // If an error occurred, throw it
    throw new Error(error.message);
  }
};

// LOGOUT USER
// This function sends a POST request to the logout endpoint
const logoutUser = async () => {
  try {
    // Send a POST request to the logout endpoint
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        // Include any necessary headers here
        "Content-Type": "application/json",
        // Include the token in the Authorization header
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    // If the response was not ok (status code not in the range 200-299), throw an error
    if (!response.ok) {
      throw new Error("Logout failed");
    }

    // Clear authentication status
    localStorage.removeItem("loggedin");
    // Clear token
    localStorage.removeItem("token");

    // Return true to indicate that the logout was successful
    return true;
  } catch (error) {
    // If an error occurred, log it and return false
    console.error("Logout error:", error.message);
    return false;
  }
};

// RESET PASSWORD
// This function takes in a token and a new password, and sends a POST request to the reset password endpoint
const resetPassword = async (token, newPassword) => {
  try {
    // Send a POST request to the reset password endpoint
    const response = await fetch(`${BASE_URL}/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Convert the new password to JSON
      body: JSON.stringify({ newPassword }),
    });

    // Parse the response as JSON
    const data = await response.json();

    // If the response was not ok (status code not in the range 200-299), throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }

    // Return the response data
    return data;
  } catch (error) {
    // If an error occurred, throw it
    throw new Error(error.message);
  }
};


export { loginUser, logoutUser, resetPassword };