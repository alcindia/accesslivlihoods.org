import React from "react";

const OurWork = () => {
  return (
    <>
      <div
        id="ourWork"
        className="w-full bg-white p-4 lg:p-10 md:container mx-auto lg:px-8 animate-fadeIn"
      >
        <h1 className="font-extrabold md:text-justify lg:text-center text-red-950 uppercase text-3xl">
          Our Work
          <hr className="border-spacing-3 border-rose-950 border-y-2" /> Case Studies
        </h1>
        <div className="  flex m-8 font-bold text-center lg:text-left text-teal-950 text-sm my-4 lg:my-6">

        <p >
          13 years of work on over 450 projects across 21 states for diverse
          partners, and with communities majorly in 5 states, has given ALC
          India an opportunity to understand the complex livelihoods sector and
          generate knowledge about communities and domains. Here, we share all
          this knowledge in the 'open source' format. At ALC India, we strongly
          believe that knowledge should be free so that it can grow and social
          impact can be multiplied.
        </p>
        </div>

        <button
          className="flex m-4 font-bold text-center uppercase text-xs py-2 px-2 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]"
          type="button"
        >
          <a href="https://www.alcindia.org/knowledge#case-studies">Know More</a>
        </button>
      </div>

      <div className="flex-col col-span-4 lg:flex-row items-center ml-2 lg:ml-12 mt-0 lg:my-4  lg:m-6 font-bold text-center uppercase text-xs py-2 px-2 rounded-lg bg-gray-50 text-rose-950 shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]">
        <button
          className="m-2 lg:m-6 font-bold text-center uppercase text-xs py-2 px-2 rounded-lg bg-teal-300 text-rose-950 shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]"
          type="button"
        >
          <a href="https://www.alcindia.org/impact/">Success Stories-Impact </a>
        </button>

        <button
          className="m-2 lg:m-6 font-bold text-center uppercase text-xs py-2 px-6 rounded-lg bg-teal-300 text-rose-950 shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]"
          type="button"
        >
          <a href="https://www.alcindia.org/impact/">Beneficiaries Infographics</a>
        </button>

        <button
          className="m-2 lg:m-6 font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-teal-300 text-rose-950 shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]"
          type="button"
        >
          <a href="https://www.alcindia.org/impact/">Valued Articles</a>
        </button>

        <button
          className="m-2 lg:m-6 font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-teal-300 text-rose-950 shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]"
          type="button"
        >
          <a href="https://www.alcindia.org/impact/">Words of Wisdom - Interviews</a>
        </button>
      </div>
    </>
  );
};

export default OurWork;
