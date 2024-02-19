import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const props = useSpring({
    to: { x: 0 }, // Target rightward movement of 200 units (tweak as needed)
    from: { x: -200 }, // Start off-screen to the left
    config: { duration: 500 }, // Adjust the duration for desired speed
  });

  return (
    <>
      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Navigate Your Delivery Points With{" "}
              <animated.span
                style={{ ...props, display: "inline-block" }}
                className="italic text-accent"
              >
                Ease
              </animated.span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Experience seamless delivery operations with DeliverEase at your
              fingertips.
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:items-center">
              <RouterLink to="/sign-up" className="mb-4 lg:mb-0">
                <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded text-lg">
                  Get Started
                </button>
              </RouterLink>
              <ScrollLink
                to="howDoesItWork"
                smooth={true}
                duration={500}
                className="ml-0 lg:ml-4"
              >
                <button
                  className="inline-flex text-gray-700 bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary-dark rounded text-lg"
                  style={{ cursor: "pointer" }}
                >
                  Learn More
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="src/assets/images/hero.png"
              style={{ transform: "scale(2)" }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-6">Key Features</h1>
          {/* Paragraph */}
          <p className="text-lg text-gray-700 text-center mb-40">
            Discover the powerful features of DeliverEase that will
            revolutionise your delivery operations.
          </p>
          {/* Features Section */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            {/* Feature 1 */}
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden">
              <img
                src="src/assets/images/map-image.png"
                alt="Map"
                className="sm:w-48 sm:h-48 w-24 h-24 object-cover"
              />
            </div>

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                Effortless Delivery Location Management
              </h2>
              <p className="leading-relaxed text-base">
                DeliverEase enables users to effortlessly manage their delivery
                locations with intuitive search and discovery features, ensuring
                streamlined delivery operations.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                Comprehensive Location Details
              </h2>
              <p className="leading-relaxed text-base">
                Access detailed delivery location including addresses, contact
                details, and essential notes, ensuring efficient delivery
                logistics.
              </p>
            </div>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden">
              <img
                src="src/assets/images/document-image.png"
                alt="Map"
                className="sm:w-48 sm:h-48 w-24 h-24 object-cover"
              />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden">
              <img
                src="src/assets/images/dashboard-image.png"
                alt="Map"
                className="sm:w-48 sm:h-48 w-24 h-24 object-cover"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                User-Friendly Interface
              </h2>
              <p className="leading-relaxed text-base">
                DeliverEase offers a user-friendly interface designed to
                simplify the delivery management process, allowing users to
                easily navigate, search, and organise delivery locations with
                ease.
              </p>
            </div>
          </div>
          <RouterLink to="/sign-up">
            <button className="flex mx-auto mt-20 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg">
              Sign Up
            </button>
          </RouterLink>
        </div>
      </section>
      <section className="p-6 bg-secondary dark:text-gray-100">
        <div id="howDoesItWork" className="container mx-auto">
          <h2 className="text-5xl font-bold text-center dark:text-gray-50">
            How does it work?
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-primary">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-accent dark:text-gray-900">
                1
              </div>
              <p className="text-2xl font-semibold">
                <b>Sign Up</b> to Deliver<em className="text-accent">Ease</em>.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-primary">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-accent dark:text-gray-900">
                2
              </div>
              <p className="text-2xl font-semibold">
                <b>Easily</b> log all of your delivery locations.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-primary">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-accent dark:text-gray-900">
                3
              </div>
              <p className="text-2xl font-semibold">
                <b>Search</b> locations quickly on the go.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
