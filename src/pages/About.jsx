import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                The Creators
              </span>
              <h1 className="mb-3 text-4xl text-center font-medium	text-primary">
                Meet the Duo Behind DeliverEase
              </h1>
              <p className="text-base text-body-color dark:text-dark-6">
                DeliverEase was created by two junior software engineers, Jym
                Bocala and Samuel Gifford for their final project at Coder
                Academy Australia.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Jym Bocala"
            profession="Junior Software Engineer"
            imageSrc="src/assets/images/jym-portrait.png"
            githubUsername={"jymbocala"}
            linkedinUsername={"jymbocala"}
          />
          <TeamCard
            name="Samuel Gifford"
            profession="Junior Software Engineer"
            imageSrc="src/assets/images/sam-portrait.jpeg"
            githubUsername={"SamGifford"}
            linkedinUsername={"samuel-gifford"}
          />
        </div>
      </div>
    </section>
  );
};
const TeamCard = ({
  imageSrc,
  name,
  profession,
  githubUsername,
  linkedinUsername,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-auto"
            style={{ width: "100%", height: "300px" }}
          />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
              <h3 className="text-base font-semibold text-dark dark:text-black">
                {name}
              </h3>
              <p className="text-xs text-body-color dark:text-dark-6">
                {profession}
              </p>
              <div className="mt-2">
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                </a>
                <a
                  href={`https://linkedin.com/in/${linkedinUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
