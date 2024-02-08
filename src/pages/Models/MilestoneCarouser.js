import React, { useState, useRef, useEffect } from "react";
import data from "./AlfEvent.json";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const tileWidth = 400; // Set your desired tile width here
  const numSlides = 3; // Number of slides to display

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = currentIndex * tileWidth;
    }
  }, [currentIndex]);

  return (
    <div className="carousel my-6 mx-auto">
      <h2 className="text-center text-4xl font-extrabold text-orange-600">
        Our Milestone
      </h2>

      <div className="ml-8 mr-8 md:max-w-[80rem] relative overflow-hidden">
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden snap-x snap-mandatory z-0"
        >
          {data.map((resource, index) => (
            <div
              key={index}
              className="flex-grow p-auto m-auto text-center w-screen h-screen snap-start"
              style={{ minWidth: `${tileWidth}px` }}
            >
              <div>
                <span className="inline-block h-max w-max aspect-square max-h-96 p-10 mt-1 ml-6 mr-6 bg-center-top bg-orange-100 bg-no-repeat z-0">
                  <h1 className="font-extrabold text-4xl">
                    {resource.year} <br /> {resource.month}
                  </h1>
                  <p className="text-teal-600 mt-4 ml-2 mr-2 mb-2 text-base aspect-square mx-auto text-wrap text-center font-extrabold">
                    {resource.description}
                  </p>
                  <a
                    href={resource.url}
                    className="bg-gray-300 text-orange-950 absolute h-fit w-fit rounded aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat "
                    style={{
                      backgroundImage: `url(${resource.url || ""})`,
                    }}
                  >
                   
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
