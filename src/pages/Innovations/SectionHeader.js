import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="m-auto max-w-full md:p-2 h-full">
      <h2 className=" text-center text-3xl text-rose-900 uppercase font-bold">
        {title}
      </h2>

      <h2 className=" mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-600">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
