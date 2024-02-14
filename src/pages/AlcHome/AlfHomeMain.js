import React from "react";
import { Link } from "react-router-dom";
import OurApproach from "./OurApproach";
import HomeCarousel from "./HomeCarousel";
import ProfileSlider from "../AlcHome/CardSlider/HomeCardSlider";
import AlfEventsCardContainer from "../Models/AlfEventsCard";


const AlfHome = () => {
  return (
    <div className="text-4xl font-extrabold m-4 mt-4 text-teal-950 text-center justify-between " id="AlfHome">
      <ProfileSlider />
      <HomeCarousel />
      <div className="overflow-hidden mx-4  lg:mt-4 p-2 md:p-12 h-fit" data-aos="zoom-in">
        <div className="lg:w-fit md:w-fit justify-center" data-aos="zoom-in" data-aos-delay="50">
          <h6 className="md:text-2xl text-3xl font-bold text-blue-900">Reimagine Livelihoods</h6>
          <div className="m-4 text-xl font-sans text-justify text-teal-900 font-medium tracking-tight">
            <p>
              We established Access Livelihoods in "2005" in our quest to find effective ways to solve the persistent problems faced in the livelihoods of economically marginalized communities. Our work across 26 states in India over the last seventeen years has helped us create and test new livelihood models that transform producers' lives and usher greater self-reliance. Through our Beehive model for building producer enterprises, we presently partner over 75,000 farmers, weavers and tribal farmers in building 68 producer companies in five states of India. We also work at the macro level, with innovative platforms that seek to shape the livelihood environment.
            </p>
          </div>

          <div className="m-4 md:space-x-2 md:mb-8">
            <Link
              to="https://www.alcindia.org/projects/"
              className="text-white bg-teal-900 hover:bg-rose-950 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <OurApproach />
      <AlfEventsCardContainer />
    </div>
  );
};

export default AlfHome;
