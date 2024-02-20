import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            CONTACT US
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If you have any questions or would like to get in touch, please
            don't hesitate to contact us.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {" "}
          {/* Added justify-center */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="src/assets/images/sam-portrait.jpeg"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Samuel Gifford
                </h2>
                <h3 className="text-gray-500 mb-3">Junior Software Engineer</h3>

                <div className="flex justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/samuel-gifford"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </a>
                  <a
                    href="https://github.com/scg-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </a>
                </div>

                <p className="mb-4">📧samgifford.work@gmail.com</p>
                <span className="inline-flex">{/* Social media links */}</span>
              </div>
            </div>
          </div>
          {/* Added another contact */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="src/assets/images/jym-portrait.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Jym Bocala
                </h2>
                <h3 className="text-gray-500 mb-3">Junior Software Engineer</h3>

                <div className="flex justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/jym-bocala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </a>
                  <a
                    href="https://github.com/jymbocala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </a>
                </div>

                <p className="mb-4">📧jymbocala@gmail.com</p>
                <span className="inline-flex">{/* Social media links */}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;