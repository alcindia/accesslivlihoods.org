import React from "react";

const ProgramSection = ({ title, description, buttonText, buttonColor }) => {
  return (
    <section className="flex flex-grow m-10 object-contain mt-8 rounded-xl">
      <div>
        <div className="float-left w-full text-center md:w-2/4">
          <h1 className="text-5xl">{title}</h1>
        </div>
        <div className="text-orange-600 text-justify font-3xl">
          {description}
          <br />
          <button className={`rounded text-2xl text-center ${buttonColor}`}>{buttonText}</button>
          <br />
        </div>
        <hr className="py-1 bg-orange-600" />
      </div>
    </section>
  );
};

export default ProgramSection;
