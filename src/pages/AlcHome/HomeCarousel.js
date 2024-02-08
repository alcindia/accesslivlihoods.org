import React, { useState, useEffect } from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function HomeCarousel() {
  const slides = [
    {
      url: "https://www.alcindia.org/assets/banner-image-10-51f67d906f573fb2d903c3f28b42828e.png",
    },
    {
      url: "https://www.alcindia.org/assets/banner-image-12-7cb76dc0b9de304eebdbba82ea807fe2.png",
    },
    {
      url: "https://www.alcindia.org/assets/banner-image-2-9d9cb533b0ee3c81243e22cfd0394550.jpg",
    },
    {
      url: "https://www.alcindia.org/assets/banner-image-9-67c80231d4418d20dc820d94d1d29d86.jpg",
    },
    {
      url: "https://www.alcindia.org/assets/banner-image-3-da240a58a02bca8c85994c47d26afde7.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, 2000); // Adjust the interval duration (in milliseconds) as needed
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]); // Run the effect only once on mount

  return (
    <div className='relative'>
      <div className='relative overflow-hidden rounded-2xl w-full max-w-full'>
        <div onClick={resetAutoSlide} className='cursor-pointer'>
          <img
            src={slides[currentIndex].url}
            alt={`slide-${currentIndex}`}
            className='w-full h-auto object-cover object-center duration-500'
          />
        </div>
        {/* Right Arrow */}
        <div className='hidden md:block absolute top-1/2 right-2 md:right-5 xl:right-32 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className='flex justify-center mt-2 space-x-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? 'text-black' : 'text-white'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel;
