import React, { useState } from "react";
import gpsLocationExample from "/src/assets/images/gps-location-example.jpg"; // Import the image

const SingleLocation = () => {
  const [open, setOpen] = useState("details");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const TabContent = ({ details, tabCategory, open }) => {
    return (
      <div
        className={`tabcontent ${open === tabCategory ? "block" : "hidden"}`}
      >
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    );
  };

  return (
    <>
      <section className="py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-4 text-center">Location</h2>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full lg:w-[70%] px-4">
              <img src={gpsLocationExample} alt="GPS Location Example" className="w-full" /> {/* Display the image */}
            </div>
            <div className="w-full lg:w-[30%] px-4">
              <div className="mb-4 text-center">
                <h3 className="text-lg font-bold mb-2">Info</h3>
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
                details={`279 Brisbane Road, Milton, QLD 4000<br /><br />Jim Smith<br /><br />0400 123 456<br /><br />Notes: Drive to the back of the building and park in the car park. The entrance is on the right-hand side of the building.`}
                tabCategory="details"
                open={open}
              />
              <TabContent
                details="Photos Content Goes Here"
                tabCategory="photos"
                open={open}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleLocation;
