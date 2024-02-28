import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { fetchGoogleMapsApiKey } from '../api/locations'; // Adjust the path as needed

const Map = ({ address }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const apiKey = await fetchGoogleMapsApiKey(); // Fetch API key from backend
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
        const { results } = await response.json();
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat, lng });
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        setError('Error fetching coordinates');
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ height: '400px' }}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={center}
        zoom={8}
      />
    </div>
  );
};

export default Map;
