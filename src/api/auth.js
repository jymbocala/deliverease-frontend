// API functions related to authentication

const BASE_URL = "http://127.0.0.1:3000";

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

    return data.token; // Assuming the token is returned from the backend upon successful login
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

export { loginUser, logoutUser };