import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/deliverease-logo.png";

const Nav = ({ isLoggedIn, updateLoginStatus }) => {
  // localStorage.removeItem("loggedin");

  // State to check if user is logged in
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("loggedin")
  // );

  const nav = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // TODO: Call the logoutUser function from the API

    // Clear localStorage and update login state
    localStorage.removeItem("loggedin");
    updateLoginStatus(false);

    // Redirect to home page
    nav("/");
  };

  return (
    <div
      className="navbar navbar-custom sticky top-0 z-50"
      style={{
        height: "70px",
        backgroundColor: "#f2f7fd",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
      }}
    >
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
              <Link to="/" className="primary-text">
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <a>Locations</a>
                <ul className="p-2">
                  <li>
                    <Link to="/locations">All Locations</Link>
                  </li>
                  <li>
                    <Link to="/locations/new">New Location</Link>
                  </li>
                </ul>
              </li>
            )}
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Logo Container - Wrapped in Link */}
        <Link to="/">
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
        </Link>
      </div>

      {/* Navbar Center (Hidden on smaller screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="primary-text">
              Home
            </Link>
          </li>

          {isLoggedIn && (
            <li>
              <details>
                <summary className="primary-text">Locations</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/locations/new" className="primary-text">
                      New Location
                    </Link>
                  </li>
                  <li>
                    <Link to="/locations" className="primary-text">
                      All Locations
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile" className="primary-text">
                Profile
              </Link>
            </li>
          )}
          <li>
            <Link to="/contact" className="primary-text">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn bg-primary hover:bg-secondary text-white transition-colors duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-primary hover:bg-secondary text-white transition-colors duration-200"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
