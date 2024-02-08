import React from "react";
import { NavLink } from "react-router-dom";
import Clients from "../../Components/Clients";
import OurWork from "./OurWork";
import AlfBoardMembers from "./AboutOurTeam";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/AlfJourney/Team1.JPG";
import img2 from "../../images/AlfJourney/Team2.JPG";
import img3 from "../../images/AlfJourney/Team3.JPG";
import img4 from "../../images/AlfJourney/Team4.JPG";
import img5 from "../../images/AlfJourney/Team5.JPG";

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="text-4xl font-extrabold  text-teal-950 text-center justify-between">
        <div className=" md:max-w-[80rem] max-w-6xl  md:p-4 h-5/6" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center" data-aos="fade-up">
            <Slider {...sliderSettings} className="rounded-2xl flex justify-center w-full max-w-md mb-4">
              {[
                { id: 1, src: img1, alt: 'Team 1' },
                { id: 2, src: img2, alt: 'Team 2' },
                { id: 3, src: img3, alt: 'Team 3' },
                { id: 4, src: img4, alt: 'Team 4' },
                { id: 5, src: img5, alt: 'Team 5' },
              ].map((image) => (
                <div key={image.id} className="relative overflow-hidden rounded-2xl">
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
                </div>
              ))}
            </Slider>
            <div className="my-4 text-center lg:text-left">
              <h3 className="mb-5 text-2xl font-bold text-blue-900">Our Mission</h3>
              <p className="my-3 text-xl text-teal-900 font-semibold">
                To create a world for everyone - producers, consumers, enterprises, and entrepreneurs.
              </p>
              <h3 className="mb-5 text-3xl font-bold text-blue-900">Our Vision</h3>
              <p className="my-3 text-xl text-teal-900 font-semibold">
                We envision enhancing livelihoods of 1 million economically disadvantaged households directly by March 2028.
              </p>
              <NavLink
                to="/contact"
                className="text-white bg-teal-900 hover:bg-rose-950 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
              >
                Know More..
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AlfBoardMembers />
      </section>
      <section>
        <Clients />
      </section>
      <section>
        <OurWork />
      </section>
    </>
  );
};

export default About;
