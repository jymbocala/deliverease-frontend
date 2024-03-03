import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import SingleLocation from "./pages/SingleLocation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewLocation from "./pages/NewLocation";
import EditLocation from "./pages/EditLocation";
import AuthRequired from "./components/AuthRequired";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ForgotPasswordForm from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import {
  fetchUserLocations,
  addLocation,
  fetchGoogleMapsApiKey,
} from "./api/locations";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null);
  const [locations, setLocations] = useState([]);

  const updateLoginStatus = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    const getGoogleMapsApiKey = async () => {
      const apiKey = await fetchGoogleMapsApiKey();
      console.log();
      setGoogleMapsApiKey(apiKey);
    };

    getGoogleMapsApiKey();

    if (isLoggedIn) {
      const getLocations = async () => {
        const data = await fetchUserLocations();
        setLocations(data);
      };

      getLocations();
    }
  }, [isLoggedIn]);

  console.log("All locations", locations);

  async function handleAddLocation(location) {
    try {
      const newLocationId = await addLocation(location);
      console.log("New location ID:", newLocationId);

      const updatedLocations = await fetchUserLocations();
      setLocations(updatedLocations);

      return newLocationId;
    } catch (error) {
      console.error("Error adding location:", error.message);
      throw new Error("Failed to add location");
    }
  }

  return (
    <>
      <BrowserRouter>
        {googleMapsApiKey && (
          <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout
                    isLoggedIn={isLoggedIn}
                    updateLoginStatus={updateLoginStatus}
                  />
                }
              >
                <Route index element={<Home />} />
                <Route
                  path="login"
                  element={<Login updateLoginStatus={updateLoginStatus} />}
                />
                <Route path="sign-up" element={<Signup />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<Profile />} />
                <Route path="forgot-password" element={<ForgotPasswordForm />} />
                <Route path="reset-password/:token" element={<ResetPassword />} />

                <Route element={<AuthRequired />}>
                  <Route
                    path="locations"
                    element={<Locations locations={locations} />}
                  />
                  <Route
                    path="locations/new"
                    element={
                      <NewLocation handleAddLocation={handleAddLocation} />
                    }
                  />
                  <Route
                    path="locations/:locationId"
                    element={
                      <SingleLocation
                        locations={locations}
                        setLocations={setLocations}
                      />
                    }
                  ></Route>
                  <Route
                    path="locations/:locationId/edit"
                    element={
                      <EditLocation
                        locations={locations}
                        setLocations={setLocations}
                      />
                    }
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </LoadScript>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
