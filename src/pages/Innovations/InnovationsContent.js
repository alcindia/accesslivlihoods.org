import React from "react";
import img1 from "../../images/AlfJourney/ReimagineLearning.jpg";
import img2 from "../../images/AlfJourney/ReimagineFinance.jpg"

const InnovationsContent = () => {
  return (
    <>
      

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2  text-center text-xl lg:text-2xl font-semibold text-teal-950">
            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <h1>Reimagine Learning</h1>
          <h4>An open-source knowledge platform A</h4>
          <p className="text-md m-8 text-justify font-medium">
             
            practitioner's platform that catalyses livelihood learning curve
            through training videos, visual data, policy analysis, case studies,
            best practices, interviews and more.
          </p>
          <div className="items-center md:ml-12 w-1/2 h-1/2" id="RLI">
          <img
          src={img1}
          alt="Reimagine Learning"  
          /> 
          </div>
        </div>


        <div className="m-auto max-w-full p-2 md:p-4 h-fit py-4 justify-between lg:text-left" data-aos="fade-down" data-aos-delay="600">
          <h1>Reimagine Finance</h1>
          <h4>Connecting investors and social enterprises</h4>
          <p className="text-md m-8 text-justfy font-medium">
             
          A crowd-sourced funding platform that raises low-interest funds for producer-owned enterprises.
          </p>
          <div className="items-center md:ml-12 w-1/2 h-1/2"  data-aos="zoom-out">
          <img
          src={img2}
          alt="Reimagine Finance"  
          /> 
          </div>
        </div>

        </div>
     
    </>
  );
};

export default InnovationsContent;
