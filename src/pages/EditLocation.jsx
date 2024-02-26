import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";

const EditLocation = () => {
  // Get the location id from the URL
  const { locationId } = useParams();

  // State to store the location data
  const [location, setLocation] = useState({
    name: "",
    address: "",
    dockNumber: "",
    dockHours: "",
    parking: "",
    contactName: "",
    contactNumber: "",
    notes: "",
    imageURL: "",
  });

  // Fetch the location data from the API based on the locationId
  useEffect(
    () => {
      async function fetchLocation() {
        try {
          const response = await fetch(
            `http://localhost:3000/locations/${locationId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch location details");
          }
          const data = await response.json();
          // Set the location state with the fetched data
          setLocation(data);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
      fetchLocation();
    },
    // Add the location state to the dependency array to re-run the effect when the location state changes or the locationId changes
    [locationId]
  );

  // Function to handle the form input changes
  function handleChange(event) {
    // Destructure the name and value from the event target
    const { name, value } = event.target;

    // Update the location state
    setLocation((prevLocation) => ({
      // Spread the previous location state
      ...prevLocation,
      // Update the new value
      [name]: value,
    }));
  }

  // Function to set the imageURL in the location state
  const handleImageUpload = (imageURL) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      imageURL: imageURL, // Update the imageURL state with the new image URL
    }));
  };

  // Function to handle form submission
  async function createLocation() {
    try {
      const response = await fetch(
        `http://localhost:3000/locations/${locationId}`,
        {
          // Use the PUT method to update the location
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          // Convert the location state to a JSON string so it can be sent in the request body as a JSON object else it will be sent as a string and not an object 
          body: JSON.stringify(location),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update location");
      }
      console.log("Location updated successfully");
    } catch (error) {
      console.error("Error updating location:", error);
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          {/* Title and tagline */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              New Location
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Add a new location to the list of locations.
            </p>
          </div>

          {/* Form */}
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Location Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='E.g. "Kmart Wynumm Plaza"'
                    onChange={handleChange}
                    value={location.name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder='E.g. "2021 Wynnum Rd, Wynnum, QLD 4178"'
                    onChange={handleChange}
                    value={location.address}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="dockNumber"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Dock Number
                  </label>
                  <input
                    type="text"
                    id="dockNumber"
                    name="dockNumber"
                    placeholder='E.g. "Dock 1"'
                    onChange={handleChange}
                    value={location.dockNumber}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="dockHours"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Dock trading hours
                  </label>
                  <input
                    type="text"
                    id="dockHours"
                    name="dockHours"
                    placeholder='E.g. "8am - 5pm"'
                    onChange={handleChange}
                    value={location.dockHours}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="parking"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nearby parking
                  </label>
                  <input
                    type="text"
                    id="parking"
                    name="parking"
                    placeholder='E.g. "Parking available at the front of the store for 2 hours"'
                    onChange={handleChange}
                    value={location.parking}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="contactName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Contact or Department Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    placeholder='E.g. "John Smith", "Receiving Department"'
                    onChange={handleChange}
                    value={location.contactName}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="contactNumber"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder='E.g. "(07) 3308 5300"'
                    onChange={handleChange}
                    value={location.contactNumber}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="notes"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Additional notes about the location."
                    onChange={handleChange}
                    value={location.notes}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              {/* Image Upload Component */}
              <ImageUpload setImageURL={handleImageUpload} />

              <div className="p-2 w-full">
                <button
                  className=" btn flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary text-lg"
                  onClick={createLocation}
                >
                  Add Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditLocation;