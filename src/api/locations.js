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

// create new location for user
const addLocation = async (location) => {
  try {
    const response = await fetch(`${BASE_URL}/locations/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(location),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data._id;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a location photo
const deletePhoto = async (fileKey) => {
  try {
    const response = await fetch(`${BASE_URL}/s3/delete/${fileKey}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete photo");
    }

    console.log("Photo deleted successfully");
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a location
const deleteLocation = async (locationId) => {
  try {
    const response = await fetch(`${BASE_URL}/locations/${locationId}`, {
      method: "DELETE",
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

export { fetchUserLocations, addLocation, deletePhoto, deleteLocation };
