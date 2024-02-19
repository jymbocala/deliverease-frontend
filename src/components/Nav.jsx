import React from "react";
import Logo from "/docs/images/deliverease-logo.png"; 

const Nav = () => {
  return (
    <div className="navbar navbar-custom" style={{ height: "70px" }}>
      <div className="navbar-start">
        {/* Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Locations</a>
              <ul className="p-2">
                <li>
                  <a>All Locations</a>
                </li>
                <li>
                  <a>New Location</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Logo Container */}
        <div className="logo-container">
          <img
            src={Logo}
            alt="DeliverEase Logo"
            style={{
              objectFit: "contain",
              maxHeight: "250px", // Adjust the logo height here
              marginLeft: "20px", // Adjust the logo margin here
            }}
          />
        </div>
      </div>

            {/* Navbar Center (Hidden on smaller screens) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a className="primary-text">Home</a>
                    </li>
                    <li>
                        <details>
                            <summary className="primary-text">Locations</summary>
                            <ul className="p-2">
                                <li>
                                    <a className="primary-text">New Location</a>
                                </li>
                                <li>
                                    <a className="primary-text">All Locations</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a className="primary-text">Contact Us</a>
                    </li>
                </ul>
            </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          className="btn bg-primary hover:bg-secondary text-white transition-colors duration-200"
          href="/login"
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Nav;
