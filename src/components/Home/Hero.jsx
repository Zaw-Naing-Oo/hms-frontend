import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-white/70 pb-12 pt-16 lg:py-20 xl:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-10 gap-y-6 lg:max-w-none lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-4 max-w-2xl text-[26px] font-bold leading-[1.2] text-gray-800 sm:text-3xl lg:mb-6 lg:text-4xl xl:text-[40px] xl:leading-[1.2]">
              Find & Book <span className="text-teal-700">Appointment</span> with
              your favourite <span className="text-teal-700">Doctors</span>
            </h1>
            <div>
            <p className="max-w-2xl text-[15px] text-gray-600 sm:text-base lg:text-justify">
            Discover top doctors near you with our easy-to-use search and booking platform. Whether you need a general check-up or specialist consultation, book appointments online and stay informed about your health
            </p>
            </div>
            <Button
              className="mt-6 rounded-full border-2 border-teal-700 bg-teal-700 px-5 py-6 text-[15px] transition-colors duration-300 hover:bg-transparent hover:text-teal-700 lg:mt-7"
              asChild
            >
              <Link to="/doctors">Find a Doctor</Link>
            </Button>
          </div>
          <div className="">
            <img src="/doctor.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
