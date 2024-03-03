import { FaGithub } from "react-icons/fa"; // Import the GitHub icon
import Logo from "../assets/images/deliverease-logo-cropped.png";

const Footer = () => {
  return (
    <footer className="mt-auto bg-base-100 text-gray-600 body-font w-full">
      <div className="container px-5 py-2 mx-auto flex flex-col items-center justify-center sm:flex-row sm:items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center mb-2 sm:mb-0"
        >
          <img
            src={Logo}
            alt="DeliverEase Logo"
            className="w-30 h-12 text-white p-2 object-cover transform hidden sm:block" // Reduced the width and height to 24
          />
        </a>
        <p className="text-sm text-gray-500 text-center sm:text-left sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
          {" "}
          {/* Changed text-base to text-sm */}© 2024 DeliverEase —
          <a
            href="https://www.linkedin.com/in/jym-bocala/" // LinkedIn link for @jymbocala
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @JymBocala
          </a>
          &nbsp; &amp; &nbsp;
          <a
            href="https://www.linkedin.com/in/samuel-gifford/" // LinkedIn link for @samgifford
            className="text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @SamGifford
          </a>
        </p>
        <div className="flex mt-2 sm:mt-0 justify-center sm:justify-end">
          <a
            className="text-gray-500 ml-4"
            href="https://github.com/jymbocala/deliverease-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
