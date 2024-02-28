import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const Map = ({ address }) => {
  const [apiKey, setApiKey] = useState('');
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchGoogleMapsApiKey = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/maps/api_key');
        setApiKey(response.data.api_key);
      } catch (error) {
        console.error('Error fetching Google Maps API key:', error);
      }
    };

    fetchGoogleMapsApiKey();
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
        const { results } = response.data;
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat, lng });
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    if (apiKey && address) {
      fetchCoordinates();
    }
  }, [apiKey, address]);

  if (!apiKey) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '400px' }}>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={center}
          zoom={8}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
