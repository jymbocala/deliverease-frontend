import React, { useState } from "react";
import { FaMapMarkerAlt, FaUser, FaPhone, FaCar, FaStickyNote, FaInfoCircle } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const DetailLine = ({ IconComponent, text }) => (
  <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
    <IconComponent className="mr-2" />
    <div>{text}</div>
  </div>
);

const SingleLocation = ({ locations }) => {
  const { locationId } = useParams();
  const location = locations.find(loc => loc.id === parseInt(locationId));
  
  const [open, setOpen] = useState("details");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const TabContent = ({ details, tabCategory, open }) => {
    return (
      <div
        className={`tabcontent ${open === tabCategory ? "block" : "hidden"} p-4 mt-4 border border-gray-300 bg-white shadow-md rounded-lg`}
      >
        {details}
      </div>
    );
  };

  const details = location && (
    <>
      <DetailLine IconComponent={FaMapMarkerAlt} text={location.address} />
      <DetailLine IconComponent={FaCar} text={location.dockNumber} />
      <DetailLine IconComponent={FaStickyNote} text={`Dock Hours: ${location.dockHours}`} />
      <DetailLine IconComponent={FaStickyNote} text={`Parking: ${location.parking}`} />
      <DetailLine IconComponent={FaUser} text={location.contactName} />
      <DetailLine IconComponent={FaPhone} text={location.contactNumber} />
      <DetailLine IconComponent={FaStickyNote} text={location.notes} />
    </>
  );

  return (
    <>
      <section className="py-20 dark:bg-dark lg:py-[120px] flex justify-center items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{location ? location.name : "Location"}</h2>
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
              <TabContent
                details={details}
                tabCategory="details"
                open={open}
              />
              <TabContent
                details={<img src={location.imageURL} alt="Location" />}
                tabCategory="photos"
                open={open}
              />
              <div className="mt-4">
                <Link to="/locations" className="bg-secondary text-white py-2 px-4 rounded transform transition duration-500 ease-in-out hover:bg-primary hover:scale-105">Locations</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleLocation;