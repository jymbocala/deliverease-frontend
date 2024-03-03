import { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { fetchGoogleMapsApiKey } from "../api/locations"; // Adjust the path as needed

// Map component
const Map = ({ address }) => {
  // State variables for the center of the map, loading state, and any error that occurs
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect hook to fetch the coordinates for the given address when the address changes
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        // Fetch the Google Maps API key from the backend
        const apiKey = await fetchGoogleMapsApiKey();
        // Send a request to the Google Maps Geocoding API to get the coordinates for the address
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${apiKey}`
        );
        // Parse the response as JSON
        const { results } = await response.json();
        // If there are any results, set the center of the map to the location of the first result
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat, lng });
        }
      } catch (error) {
        // If an error occurred, log it and set the error state variable
        console.error("Error fetching coordinates:", error);
        setError("Error fetching coordinates");
      } finally {
        // Once the request has completed, set the loading state to false
        setLoading(false);
      }
    };

    // If an address was provided, fetch its coordinates
    if (address) {
      fetchCoordinates();
    }
  }, [address]); // Dependency array for the effect hook

  // If the component is still loading, render a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If an error occurred, render the error message
  if (error) {
    return <div>{error}</div>;
  }

  // Render the GoogleMap component with a Marker at the center
  return (
    <div style={{ height: "400px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "100%",
          width: "100%",
          borderRadius: "0.375rem",
        }}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
