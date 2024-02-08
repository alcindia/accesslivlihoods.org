import React from "react";

const PartnerSection = ({ title, buttonText, buttonLink, images }) => {
  return (
    <div>
      <button className="block font-extrabold text-2xl text-rose-950 px-2 ps-2 w-auto rounded py-2 m-4">
        <a href={buttonLink}>{buttonText}</a>
      </button>
      <div className="flex flex-grow object-contain md:max-w-screen-xs rounded-xl m-2 bg-orange-100">
        {images.map((src, index) => (
          <img key={index} className="m-4" src={src} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
