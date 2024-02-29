// API functions related to authentication

const BASE_URL = "https://deliverease-api.onrender.com";

// REGISTER USER

// LOGIN USER
const loginUser = async (loginFormData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    // Store the token and user ID in local storage
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId); // Assuming the user's ID is returned as `userId` in the response

    return data.token;
  } catch (error) {
    throw new Error(error.message);
  }
};

// LOGOUT USER
const logoutUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        // Include any necessary headers here
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you have a token stored in localStorage
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    // Clear authentication status
    localStorage.removeItem("loggedin");
    // Clear token
    localStorage.removeItem("token");

    return true; // Or you can return some other relevant data
  } catch (error) {
    console.error("Logout error:", error.message);
    return false;
  }
};

const resetPassword = async (token, newPassword) => {
  try {
    const response = await fetch(`${BASE_URL}/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data; // You can return any relevant data from the response
  } catch (error) {
    throw new Error(error.message);
  }
};

export { loginUser, logoutUser, resetPassword };
