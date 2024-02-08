import React from "react";
import { Link } from "react-router-dom";
import AlfEventsCard from "./AlfEventsCard";
import Carousel from "./MilestoneCarouser";



const platforms = [
  {
    title: "Reimagine Learning",
    subtitle: "An open-source knowledge platform",
    description: "A practitioner's platform that catalyses livelihood learning curve through training videos, visual data, policy analysis, case studies, best practices, interviews and more.",
    buttonText: "Partner With Us"
  },
  {
    title: "Reimagine Finance",
    subtitle: "Connecting investors and social enterprises",
    description: "A crowd-sourced funding platform that raises low-interest funds for producer-owned enterprises.",
    buttonText: "Know More.."
  },
  {
    title: "Reimagine Opportunities",
    subtitle: "Connecting engagement seekers and engagement",
    description: "A platform that helps professionals identify and engage with opportunities in the livelihood space. This also helps livelihood organizations recruite and manage talent effectively.",
    buttonText: "Get Started"
  },
  {
    title: "Reimagine Communities",
    subtitle: "A forum to sing the songs of the unsung communities",
    description: "A forum that sings the songs of the unsung, that narrates the stories of rural communities and their unbeatable spirit aganist all odds, that captures the beauty of their dreams and is the repository of their traditional wisdom.",
    buttonText: "Partner with us"
  }
];


const Portfolio = () => {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <AlfEventsCard />
      </div>

      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-teal-900 uppercase font-bold">
          Innovative Platforms
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-teal-900 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4" data-aos="fade-down" data-aos-delay="600">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{platform.title}</h4>
                <h6>{platform.subtitle}</h6>
                <p className="text-md font-medium leading-5 h-auto md:h-48">{platform.description}</p>
                <div className="flex justify-center my-4">
                  <Link to="/get-demo" className="text-white bg-rose-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">{platform.buttonText}
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;