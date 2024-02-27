import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { fetchUserLocations, addLocation } from "./api/locations";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin")
  );

  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Kmart Wynumm Plaza",
      address: "2021 Wynnum Rd, Wynnum, QLD 4178",
      dockNumber: "Dock 1",
      dockHours: "8am - 5pm",
      parking: "Parking available at the front of the store for 2 hours",
      contactName: "Receiving Department",
      contactNumber: "(07) 3308 5300",
      notes: "Please call ahead to book a time for delivery",
      dateCreated: new Date("2022-02-20T12:00:00"),
      imageURL: "",
    },
    {
      id: 2,
      name: "Bunnings Caloundra",
      address: "54 Caloundra Rd, Caloundra QLD 4551",
      dockNumber: "Dock 2",
      dockHours: "10am - 5pm",
      parking: "",
      contactName: "Dwight Schrute",
      contactNumber: "(07) 5490 5000",
      notes: "",
      dateCreated: new Date("2023-02-19T09:00:00"),
      imageURL: "",
    },
    {
      id: 3,
      name: "JB Hi-Fi Mount Gravatt",
      address: "1230 Logan Rd, Mount Gravatt QLD 4122",
      dockNumber: "Dock 1",
      dockHours: "11am - 7pm",
      parking: "",
      contactName: "Michael Scott",
      contactNumber: "0733209300",
      notes:
        "Enter road through Nersery Rd, then turn left into the loading dock area.",
      dateCreated: new Date("2024-02-18T15:30:00"),
      imageURL: "",
    },
  ]);

  // Callback function to update login status
  const updateLoginStatus = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };


  useEffect(() => {
    // Fetch locations data only if the user is logged in
    if (isLoggedIn) {
      const getLocations = async () => {
        const data = await fetchUserLocations();
        setLocations(data);
      };

      getLocations();
    }
  }, [isLoggedIn]); // Fetch locations data whenever the isLoggedIn state changes

  console.log("All locations", locations);

  // Function to add a new location to the locations state
  async function handleAddLocation(location) {
    try {
      // Call the API function to add a new location
      const newLocationId = await addLocation(location);
      console.log("New location ID:", newLocationId);

      // // Add the new location to the list of locations
      // setLocations((prevLocations) => [
      //   ...prevLocations,
      //   { id: newLocationId, ...location },
      // ]);

      // Fetch updated locations from the backend
      const updatedLocations = await fetchUserLocations();
      setLocations(updatedLocations);

      return newLocationId; // Return the new ID to use in the redirect
    } catch (error) {
      console.error("Error adding location:", error.message);
      // Handle error if necessary
      throw new Error("Failed to add location");
    }
  }

  return (
    <>
      <BrowserRouter>
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

            <Route element={<AuthRequired />}>
              <Route
                path="locations"
                element={<Locations locations={locations} />}
              />
              <Route
                path="locations/new"
                element={<NewLocation handleAddLocation={handleAddLocation} />}
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
                element={<EditLocation />}
              />
            </Route>

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
