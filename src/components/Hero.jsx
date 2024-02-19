import React from "react";
import { useSpring, animated } from "react-spring";

const Hero = () => {
    const props = useSpring({
        to: { x: 0 }, // Target rightward movement of 200 units (tweak as needed)
        from: { x: -200 }, // Start off-screen to the left
        config: { duration: 500 }, // Adjust the duration for desired speed
    });
    
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Navigate Your Delivery Points With{" "}
            <animated.span style={{ ...props, display: 'inline-block' }} className="italic text-accent">Ease</animated.span>

          </h1>
          <p className="mb-8 leading-relaxed">
            Experience seamless delivery operations with DeliverEase at your fingertips.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded text-lg">
              Get Started
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary-dark rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/docs/images/hero.png"
            style={{ transform: "scale(2)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
