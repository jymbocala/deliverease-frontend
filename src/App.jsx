import { useState } from "react";
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

function App() {
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

  console.log("All locations", locations);

  // Function to add a new location to the locations state
  async function addLocation(location) {
    console.log("NEW LOCATION", location);

    // Create a new ID for the location
    const newId = locations.length + 1;

    // Create a new location object
    const newLocation = {
      id: newId,
      name: location.name,
      address: location.address,
      dockNumber: location.dockNumber,
      dockHours: location.dockHours,
      parking: location.parking,
      contactName: location.contactName,
      contactNumber: location.contactNumber,
      notes: location.notes,
      dateCreated: location.dateCreated,
      imageURL: location.imageURL,
    };

    // Add the new location to the locations state
    setLocations([...locations, newLocation]);

    // Return the new ID to use in the redirect
    return newId;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route element={<AuthRequired />}>
              <Route
                path="locations"
                element={<Locations locations={locations} />}
              />
              <Route
                path="locations/new"
                element={<NewLocation addLocation={addLocation} />}
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
