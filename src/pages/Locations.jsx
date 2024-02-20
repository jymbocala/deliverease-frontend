import { Info, Search, Plus } from "lucide-react";

const Locations = () => {
  return (
    <div className="flex flex-col items-center p-16">
      <h1 className="mb-16 text-3xl">My Locations</h1>
      {/* SEARCH */}
      <div className="flex w-full">
        <label className="input input-bordered flex items-center gap-2 grow mr-4">
          <input
            type="text"
            className="grow bg-base-100"
            placeholder="Search"
          />
          <button className="btn inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary">
            <Search />
          </button>
        </label>

        {/* NEW LOCATION BUTTON */}
        <button className="btn inline-flex btn-outline btn-primary px-3 text-md">
          <Plus color="#31485e" />
          New Location
        </button>
      </div>

      {/* FILTER */}

      {/* LOCATIONS LIST */}
      <ul role="list" className="flex flex-col mt-8 w-full">
        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-50">
          <div>
            <h2 className="text-lg">Location 1</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info color="#31485e" className="group-hover/edit:scale-110" />
          </div>
        </li>
        <span style={{ borderTop: "1px solid #31485e" }}></span>

        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-20">
          <div>
            <h2 className="text-lg">Location 2</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info color="#31485e" className="group-hover/edit:scale-110" />
          </div>
        </li>
      </ul>

      {/* PAGINATION */}
      <div className="join mt-40">
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
      </div>
    </div>
  );
};

export default Locations;
