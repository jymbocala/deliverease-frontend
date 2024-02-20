import { Info, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

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
        <Link to="new" className="btn inline-flex btn-outline btn-primary px-3 text-md">
          <Plus color="#31485e" />
          New Location
        </Link>
      </div>

      {/* FILTER */}
      <div className="mt-8">
        <label>Filter:</label>
        <select className="select select-ghost max-w-xs">
          {/* <option disabled selected>
            Filter
          </option> */}
          <option selected>A-Z</option>
          <option>Most Recent</option>
        </select>

      </div>

      {/* LOCATIONS LIST */}
      <ul role="list" className="flex flex-col mt-8 w-full">
        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-50 cursor-pointer">
          <div>
            <h2 className="text-lg">Location 1</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            />

            <dialog
              id="my_modal_1"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Location Heading1</h3>
                <p className="py-4">Address</p>
                <p className="py-4">Contacts</p>
                <p className="py-4">Notes</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
        <span style={{ borderTop: "1px solid #31485e" }}></span>

        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-20 cursor-pointer">
          <div>
            <h2 className="text-lg">Location 2</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            />

            <dialog
              id="my_modal_2"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Location Heading2</h3>
                <p className="py-4">Address</p>
                <p className="py-4">Contacts</p>
                <p className="py-4">Notes</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
        <span style={{ borderTop: "1px solid #31485e" }}></span>

        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-50 cursor-pointer">
          <div>
            <h2 className="text-lg">Location 3</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />

            <dialog
              id="my_modal_3"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Location Heading2</h3>
                <p className="py-4">Address</p>
                <p className="py-4">Contacts</p>
                <p className="py-4">Notes</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
        <span style={{ borderTop: "1px solid #31485e" }}></span>

        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-20 cursor-pointer">
          <div>
            <h2 className="text-lg">Location 4</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            />

            <dialog
              id="my_modal_4"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Location Heading4</h3>
                <p className="py-4">Address</p>
                <p className="py-4">Contacts</p>
                <p className="py-4">Notes</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
        <span style={{ borderTop: "1px solid #31485e" }}></span>

        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-50 cursor-pointer">
          <div>
            <h2 className="text-lg">Location 5</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            />

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Location Heading5</h3>
                <p className="py-4">Address</p>
                <p className="py-4">Contacts</p>
                <p className="py-4">Notes</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
        <span style={{ borderTop: "1px solid #31485e" }}></span>

        <li className="flex items-center justify-between p-4 bg-secondary group/item hover:border-accent border-transparent border-2 bg-opacity-20 cursor-pointer">
          <div>
            <h2 className="text-lg">Location 6</h2>
            <p>Address</p>
          </div>
          <div className="flex gap-4 group/edit invisible group-hover/item:visible">
            <Info
              color="#31485e"
              className="group-hover/edit:scale-110"
              onClick={() => document.getElementById("my_modal_6").showModal()}
            />

            <dialog
              id="my_modal_6"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Location Heading6</h3>
                <p className="py-4">Address</p>
                <p className="py-4">Contacts</p>
                <p className="py-4">Notes</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
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
