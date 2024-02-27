import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaCar,
  FaStickyNote,
  FaInfoCircle,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const DetailLine = ({ IconComponent, text }) => (
  <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
    <IconComponent className="mr-2" />
    <div>{text}</div>
  </div>
);

const SingleLocation = ({ locations, setLocations }) => {
  const { locationId } = useParams();
  // console.log("locationId:", locationId);

  const location = locations.find((loc) => loc._id === locationId);
  // console.log("location:", location);

  const [open, setOpen] = useState("details");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const TabContent = ({ details, tabCategory, open }) => {
    return (
      <div
        className={`tabcontent ${
          open === tabCategory ? "block" : "hidden"
        } p-4 mt-4 border border-gray-300 bg-white shadow-md rounded-lg`}
      >
        {details}
      </div>
    );
  };

  // Function to delete the photo
  const deletePhoto = async () => {
    try {
      // Extract the file key from the imageURL
      const fileKey = location.imageURL.split("/").pop();

      // Make a DELETE request to your API route
      const response = await fetch(
        `http://127.0.0.1:3000/s3/delete/${fileKey}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete photo");
      }

      console.log("Photo deleted successfully");
      // Update the location object to remove the imageURL
      const updatedLocation = { ...location, imageURL: null };
      // Update the state with the modified location object
      setLocations((prevLocations) =>
        prevLocations.map((loc) =>
          loc.id === updatedLocation.id ? updatedLocation : loc
        )
      );
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  const photosTabElements =
    location && location.imageURL ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <img
          src={location.imageURL}
          className="cursor-pointer hover:border-solid hover:border-accent border-transparent border-2 rounded-lg "
          alt="photo"
          onClick={(e) => {
            e.stopPropagation(); // Stop the click event from bubbling up to the parent
            document.getElementById(`my_modal_${location.id}`).showModal();
          }}
        />

        <dialog
          id={"my_modal_" + location.id}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={(e) => {
                  e.stopPropagation(); // Stop the click event from bubbling up to the parent
                  document.getElementById(`my_modal_${location.id}`).close();
                }}
              >
                ✕
              </button>
            </form>
            <img
              src={location.imageURL}
              className="w-full h-full rounded-lg"
              alt={location.name}
            />
            <button
              className="btn btn-outline btn-accent"
              onClick={deletePhoto}
            >
              Delete Photo
            </button>
          </div>
          <form
            method="dialog"
            className="modal-backdrop"
            onClick={(e) => {
              e.stopPropagation(); // Stop the click event from bubbling up to the parent
            }}
          >
            <button>close</button>
          </form>
        </dialog>
      </div>
    ) : (
      <p>No photos available</p>
    );

  const details = location && (
    <>
      <DetailLine IconComponent={FaMapMarkerAlt} text={location.address} />
      <DetailLine IconComponent={FaCar} text={location.dockNumber} />
      <DetailLine
        IconComponent={FaStickyNote}
        text={`Dock Hours: ${location.dockHours}`}
      />
      <DetailLine
        IconComponent={FaStickyNote}
        text={`Parking: ${location.parking}`}
      />
      <DetailLine IconComponent={FaUser} text={location.contactName} />
      <DetailLine IconComponent={FaPhone} text={location.contactNumber} />
      <DetailLine IconComponent={FaStickyNote} text={location.notes} />
    </>
  );

  return (
    <>
      <section className="py-20 dark:bg-dark lg:py-[120px] flex justify-center items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            {location ? location.name : "Location"}
          </h2>

          {/* Edit Location button */}
          <Link to={`/locations/${locationId}/edit`}>
          <button className="border border-secondary text-secondary py-2 px-4 rounded transform transition duration-500 ease-in-out hover:bg-secondary hover:text-white">
              Edit
            </button>
          </Link>

          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-[30%] px-4 mx-auto">
              <div className="mb-4 flex items-center justify-center">
                <FaInfoCircle className="mr-2" />
                <h3 className="text-lg font-bold mb-2 text-accent">Info</h3>
              </div>
              <div className="flex flex-row justify-center">
                <a
                  onClick={() => handleTabOpen("details")}
                  className={`cursor-pointer px-2 py-1 text-sm font-medium md:text-base rounded-full ${
                    open === "details"
                      ? "bg-primary text-white"
                      : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                  }`}
                >
                  Details
                </a>
                <a
                  onClick={() => handleTabOpen("photos")}
                  className={`cursor-pointer px-2 py-1 text-sm font-medium md:text-base rounded-full ${
                    open === "photos"
                      ? "bg-primary text-white"
                      : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                  }`}
                >
                  Photos
                </a>
              </div>
              <TabContent details={details} tabCategory="details" open={open} />
              <TabContent
                details={photosTabElements}
                tabCategory="photos"
                open={open}
              />
              <div className="mt-4">
                <Link
                  to="/locations"
                  className="bg-secondary text-white py-2 px-4 rounded transform transition duration-500 ease-in-out hover:bg-primary hover:scale-105"
                >
                  Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleLocation;
