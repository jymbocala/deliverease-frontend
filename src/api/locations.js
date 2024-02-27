// API functions related to locations

const BASE_URL = "http://127.0.0.1:3000";

// Get all user locations
const fetchUserLocations = async () => {
  try {
    const response = await fetch(`${BASE_URL}/locations/userlocations`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchUserLocations };