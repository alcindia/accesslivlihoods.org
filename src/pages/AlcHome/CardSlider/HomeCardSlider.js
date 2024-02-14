import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProfileCard from './HomeCard';

const profiles = [
  {
    name: 'Access Livelihoods',
    description:
      'Access Livelihoods (AL) is a group of Hyderabad-based social enterprises that work with marginalized communities to reimagine their livelihoods. Established in 2005, AL is an AIM-NITI Aayog recognized Established Incubation Centre, primarily working on incubating women-owned producer enterprises across primary sectors to create equitable and lasting livelihood opportunities',
    image:
      'https://media.licdn.com/dms/image/D5622AQHf7ydUeeuv3w/feedshare-shrink_1280/0/1693905250604?e=1709769600&v=beta&t=BEhV0aXcyMDA9-8JNGXuMY39uoQ-oHO9CADrM4P2gO4',
  },
  {
    name: 'Access Livelihoods',
    description: " 'Learning and Sharing' - Access Livelihoods (AL) is a group of Hyderabad-based social enterprises that work with marginalized communities to reimagine their livelihoods. Established in 2005, AL is an AIM-NITI Aayog recognized Established Incubation Centre, primarily working on incubating women-owned producer enterprises across primary sectors to create equitable and lasting livelihood opportunities",
    image:
      'https://media.licdn.com/dms/image/D5622AQEDB4NZG2wm7g/feedshare-shrink_2048_1536/0/1695201736826?e=1709769600&v=beta&t=gLVDwO0kGT0iKY364jnEp-0SBvZ-IXj6jwshTRYl_kg',
  },
  // Add more profiles as needed
];

const ProfileSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="w-full max-w-screen-lg mx-auto">
      {profiles.map((profile, index) => (
        <div key={index} className="outline-none focus:outline-none">
          
          <ProfileCard {...profile} />
          
        </div>
      ))}
    </Slider>
  );
};

export default ProfileSlider;
