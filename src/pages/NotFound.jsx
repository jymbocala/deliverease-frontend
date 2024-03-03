import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="relative z-10 py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-primary sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-primary">
                  Oops! That page can’t be found
                </h4>
                <Link
                  to="/"
                  className="inline-block rounded-lg border border-accent mt-6 px-8 py-3 text-center text-base font-semibold text-accent transition hover:bg-accent hover:text-white"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
