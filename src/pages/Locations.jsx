import { useEffect, useState } from "react";
import { Info, Search, Plus } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Locations = ({ locations }) => {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("A-Z");

  // function to add background opacity to every second location
  function addBGOpacity(index) {
    return index % 2 === 0 ? "bg-opacity-50" : "bg-opacity-20";
  }

  // Function to go to the page when a location is clicked
  function goToLocation(id) {
    if (id) {
      nav(`/locations/${id}`);
    } else {
      console.error("Location ID is missing");
    }
  }

  // Filter locations based on search text and selected filter
  const filteredLocations = locations
    .filter((location) =>
      // Check if the location name includes the search text
      location.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      // Sort the locations based on the selected filter
      if (selectedFilter === "Most Recent") {
        // Sort by date created
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      } else {
        // Sort alphabetically
        return a.name.localeCompare(b.name);
      }
    });

  // Update search params when search text changes
  useEffect(() => {
    // Update the search param in the URL
    setSearchParams({ search: searchText });
  }, [searchText, setSearchParams]);

  // Update search text when search params change
  useEffect(() => {
    // Retrieve search text from search params when component mounts
    const params = new URLSearchParams(searchParams);
    // Get the search param from the URL
    const search = params.get("search") || "";
    // Set the search text state to the search param
    setSearchText(search);
  }, [searchParams]);

  // Helper function to highlight matching characters in the location name
  function highlightMatchingText(text, searchText) {
    // If there's no search text, return the original text
    if (!searchText) return text;

    // Create a regular expression to match the search text
    const regex = new RegExp(`(${searchText})`, "gi");
    // Split the text into parts based on the search text
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  // Handle filter change
  const handleFilterChange = (event) => {
    // Update the selected filter state
    setSelectedFilter(event.target.value);
  };

  // Map through the locations array and return a list item for each location
  const locationsElements = filteredLocations.map((location, index) => {
    const isLastLocation = index === filteredLocations.length - 1;
    const isFirstLocation = index === 0;

    return (
      <div key={location._id}>
        <li
          className={`flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 cursor-pointer ${
            isLastLocation && `rounded-b-lg`
          } ${isFirstLocation && `rounded-t-lg`} ${addBGOpacity(index)}`}
          onClick={() => {
            // console.log("Location clicked:", location._id);
            goToLocation(location._id);
          }}
        >
          <div>
            <h2 className="text-lg">
              {highlightMatchingText(location.name, searchText)}
            </h2>
            <p>{location.address}</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={(e) => {
                e.stopPropagation(); // Stop the click event from bubbling up to the parent
                document.getElementById(`my_modal_${location._id}`).showModal();
              }}
            />

            <dialog
              id={"my_modal_" + location._id}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={(e) => {
                      e.stopPropagation(); // Stop the click event from bubbling up to the parent
                      document
                        .getElementById(`my_modal_${location._id}`)
                        .close();
                    }}
                  >
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">{location.name}</h3>
                <p className="py-4">{location.address}</p>
                <p className="py-4">{location.dockNumber}</p>
                <p className="py-4">{location.dockHours}</p>
                <p className="py-4">{location.notes}</p>
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
        </li>
        {!isLastLocation && (
          <span style={{ borderTop: "1px solid #31485e" }}></span>
        )}
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center py-16 px-8 mx-auto max-w-screen-xl">
      <h1 className="mb-16 text-4xl text-center font-medium	text-primary">
        My Locations
      </h1>

      <div className="flex items-center justify-center py-4 w-full">
        {/* Search Bar */}
        <div className="flex-grow mb-2 md:mb-0 mr-1 md:mr-2">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="w-full bg-base-100"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </div>

        {/* Vertical Divider */}
        <div className="h-auto min-h-[1em] w-px mx-3 self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>

        {/* New Location Button without text on small screens */}
        <Link
          to="new"
          className="btn inline-flex btn-outline btn-primary px-3 text-md pl-2 md:inline-flex"
        >
          <Plus color="#31485e" />
          <span className="hidden md:inline-block">New Location</span>
        </Link>
      </div>

      {/* FILTER */}
      <div className="mt-10 self-start">
        <label>Filter:</label>
        <select
          className="select select-ghost max-w-xs"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="A-Z">A-Z</option>
          <option value="Most Recent">Most Recent</option>
        </select>
      </div>

      {/* LOCATIONS LIST */}
      <ul role="list" className="flex flex-col mt-2 w-full">
        {locationsElements}
      </ul>

      {/* TODO: Add pagination logic */}
      {/* <div className="join mt-40">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div> */}
    </div>
  );
};

export default Locations;
