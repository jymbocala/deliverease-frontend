import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaCar,
  FaStickyNote,
  FaArrowLeft,
  FaEdit,
  FaTrash,
  FaClock,
  FaParking,
} from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  deletePhoto,
  deleteLocation,
  fetchUserLocations,
} from "../api/locations";
import Map from "../components/Map";

const DetailLine = ({ IconComponent, text }) => (
  <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
    <IconComponent className="mr-2 text-primary" />
    <div>{text}</div>
  </div>
);

const TabContent = ({ details, tabCategory, open }) => (
  <div
    className={`tabcontent ${
      open === tabCategory ? "block" : "hidden"
    } p-4 mt-4 border border-gray-300 bg-white shadow-md rounded-md`}
  >
    {details}
  </div>
);

const SingleLocation = ({ locations, setLocations }) => {
  const { locationId } = useParams();
  const nav = useNavigate();
  const location = locations.find((loc) => loc._id === locationId);
  const [open, setOpen] = useState("details");

  useEffect(() => {
    if (!location) {
      // Fetch location data if not available
    }
  }, [location, locationId]);

  if (!location) {
    return <div>Loading...</div>;
  }

  // Function to delete the photo
  const handleDeletePhoto = async () => {
    try {
      const fileKey = location.imageURL.split("/").pop();
      await deletePhoto(fileKey);
      const updatedLocation = { ...location, imageURL: null };
      setLocations((prevLocations) =>
        prevLocations.map((loc) =>
          loc.id === updatedLocation.id ? updatedLocation : loc
        )
      );
      console.log("Photo deleted successfully");
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  // Function to delete the location
  const handleDeleteLocation = async () => {
    try {
      await deleteLocation(locationId);
      const updatedLocations = await fetchUserLocations();
      setLocations(updatedLocations);
      nav("/locations");
    } catch (error) {
      console.error("Error deleting location:", error);
    }
  };

  const photosTabElements =
    location && location.imageURL ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <img
          src={location.imageURL}
          className="cursor-pointer hover:border-solid hover:border-accent border-transparent border-2 rounded-lg"
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
              onClick={(e) => {
                e.target.disabled = true; // Disable the button when clicked
                handleDeletePhoto();
              }}
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
        IconComponent={FaClock}
        text={`Dock Hours: ${location.dockHours}`}
      />
      <DetailLine
        IconComponent={FaParking}
        text={`Parking: ${location.parking}`}
      />
      <DetailLine IconComponent={FaUser} text={location.contactName} />
      <DetailLine IconComponent={FaPhone} text={location.contactNumber} />
      <DetailLine IconComponent={FaStickyNote} text={location.notes} />
    </>
  );

  return (
    <section className="flex justify-center items-center">
      <div className="container mx-auto text-center relative px-5 py-16">
        {/* Back Button */}
        <button
          onClick={() => nav(`/locations`)}
          className="flex items-center text-primary mb-4"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-xs lg:text-sm">Locations</span>
        </button>

        <div className="mt-10 lg:mt-6">
          {" "}
          <h1 className="mb-16 text-4xl text-center font-medium text-primary">
            {location && location.name ? location.name : "Location"}
          </h1>
        </div>

        <dialog
          id={"my_modal_" + location?._id}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={(e) => {
                  e.stopPropagation(); // Stop the click event from bubbling up to the parent
                  document.getElementById(`my_modal_${location._id}`).close();
                }}
              >
                ✕
              </button>
            </form>
            <h4 className="font-bold pb-8">Delete {location.name}?</h4>
            <button
              className="transform transition duration-500 ease-in-out btn btn-outline btn-error"
              onClick={(e) => {
                e.stopPropagation(); // Stop the click event from bubbling up to the parent
                e.target.disabled = true; // Disable the button when clicked
                handleDeleteLocation();
              }}
            >
              Delete Location
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

        <div className="flex flex-wrap justify-center">
          {/* Details Group */}
          <div className="w-full lg:w-[60%]  md:w-70 mx-auto">
            <div className="flex flex-row justify-center gap-2">
              <a
                onClick={() => setOpen("details")}
                className={`cursor-pointer px-2 py-1 text-sm font-medium md:text-base rounded-lg ${
                  open === "details"
                    ? "bg-primary text-white"
                    : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                }`}
              >
                Details
              </a>
              <a
                onClick={() => setOpen("photos")}
                className={`cursor-pointer px-2 py-1 text-sm font-medium md:text-base rounded-lg ${
                  open === "photos"
                    ? "bg-primary text-white"
                    : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                }`}
              >
                Photos
              </a>
              <a
                onClick={() => setOpen("edit")}
                className={`cursor-pointer px-2 py-1 text-sm font-medium md:text-base rounded-lg ${
                  open === "edit"
                    ? "bg-primary text-white"
                    : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                }`}
              >
                Edit
              </a>
              <a
                onClick={() => setOpen("delete")}
                className={`cursor-pointer px-2 py-1 text-sm font-medium md:text-base rounded-lg ${
                  open === "delete"
                    ? "bg-primary text-white"
                    : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                }`}
              >
                Delete
              </a>
            </div>
            <TabContent details={details} tabCategory="details" open={open} />
            <TabContent
              details={photosTabElements}
              tabCategory="photos"
              open={open}
            />
            <TabContent
              details={
                <Link
                  to={`/locations/${locationId}/edit`}
                  className="flex items-center justify-center"
                >
                  <button className="btn btn-primary">
                    <FaEdit className="mr-2" /> Edit
                  </button>
                </Link>
              }
              tabCategory="edit"
              open={open}
            />
            <TabContent
              details={
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.stopPropagation(); // Stop the click event from bubbling up to the parent
                    document
                      .getElementById(`my_modal_${location?._id}`)
                      .showModal();
                  }}
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              }
              tabCategory="delete"
              open={open}
            />
          </div>

          {/* MapComponent */}
          {location && (
            <div className="w-full lg:w-[30%] mx-auto mt-16 md:mt-0">
              <Map key={locationId} address={location.address} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleLocation;
