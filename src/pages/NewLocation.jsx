import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";

const NewLocation = ({ handleAddLocation }) => {
  const nav = useNavigate();
  const [location, setLocation] = useState({
    name: "",
    address: "",
    dockNumber: "",
    dockHours: "",
    parking: "",
    contactName: "",
    contactNumber: "",
    notes: "",
    dateCreated: new Date(),
    imageURL: "",
  });

  // Function to set the imageURL in the location state
  const setImageURL = (url) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      imageURL: url,
    }));
  };

  async function createLocation(e) {
    // Prevent from refreshing the page
    e.preventDefault();
    try {
      // Add the new location to the list of locations and get the new id
      const id = await handleAddLocation(location);

      toast.success("Location added successfully!");
      setTimeout(() => {
        nav(`/locations/${id}`); // Navigate to the new entry page
      }, 2000); // Delay of 2 seconds
    } catch (error) {
      toast.error(`Error adding location: ${error.message}`);
    }
  }

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

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <ToastContainer />
        <div className="container px-5 py-16 mx-auto">
          {/* Back Button */}
          <button
            onClick={() => nav(`/locations`)}
            className="flex items-center text-primary mb-4"
          >
            <FaArrowLeft className="mr-2" />
            <span className="text-xs lg:text-sm">Locations</span>
          </button>
          {/* Title and tagline */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="title-font mb-4 text-4xl text-center font-medium	text-primary">
              NEW LOCATION
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-4">
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
              <ImageUpload setImageURL={setImageURL} />

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

export default NewLocation;
