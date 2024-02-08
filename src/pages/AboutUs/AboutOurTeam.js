import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AlfBoardMembers = () => {
  const [showMore, setShowMore] = useState(false);

  const boardMembers = [
    {
      name: 'Mr. A Praveen Reddy',
      imageSrc: 'https://www.alcindia.org/assets/team-member-image-80-f281f49146e9ae746169ee044ed5fd3f.jpg',
      description: 'Mr. A Praveen Reddy, a management graduate and an ex-MLA from Husnabad, is the president of Mulukanoor Rural Co-operative Bank and Marketing Society. He was awarded the “Best Cooperator”, by the Government of Andhra Pradesh on the occasion of centenary celebrations of the cooperative movement in India.',
      additionalInfo: 'Building on the foundation laid by his father Mr. Vishwanath Reddy, he has enabled an impressive increase in the revenue of the bank. During his tenure as president, he has established godowns in every village, computerized the entire business, and enabled the supply of good quality seeds to farmers.',
      designation: 'Independent Director (Current)',
      socialLinks: {
        facebook: '#facebook',
        twitter: '#twitter',
        instagram: '#instagram',
      },
    },

  {
    name: "Mr. P. Mohanaiah",
    imageSrc: "https://www.alcindia.org/images/team-member-image-75.jpg",
    description: "Mr. Mohanaiah is a retired Chief General Manager of NABARD. Trained as an economist, Mr. Mohanaiah held important positions throughout his career in different organizations. He led two Regional Offices of NABARD (West Bengal, 2007-2010 and Andhra Pradesh, 2010-2012) to the top slot among all the major Regional Offices of NABARD consecutively. These ROs recorded all round achievement in terms of business development, promotional initiatives, supervisory oversight and other aspects. NABARD became a household name in these two states during this period in view of Mr. Mohanaiah's 'people centric' approach.",
    additionalInfo: "A postgraduate in Economics from Osmania University, Mr. Mohanaiah brings rich and a varied experience in Banking and Rural Development. He started his career as a Branch Manager in Nagarjuna Grameena Bank (NGB) in the Khammam District of Andhra Pradesh. Over 35 years, he has served in NGB, Management Development Institute (MDI) Gurgaon, Reserve Bank of India (RBI) and NABARD in various capacities. He has worked in various locations including Maharashtra, Gujarat, Andhra Pradesh, North Eastern States and West Bengal.",
    designation: "Independent Director (Current)",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
  },
  },
  
  {
    name: "Mr. G.V. Krishnagopal",
    imageSrc: "https://www.alcindia.org/images/team-member-image-75.jpg",
    description: "A rural management professional from IRMA, he is passionate about working with the economically marginalized in their efforts to transform their lives and be self-reliant. His experience in the development sector extends to over 15 years primarily with specific focus in development of producer owned organizations (cooperatives and producer companies). He has had the opportunity to be the Manager_ Dairy Cooperative Promotion in Cooperative Development Foundation to promote, design and develop India's first all - women cooperative dairy enterprise at Mulukanoor, Karimnagar District, Andhra Pradesh. He later worked with Society for Elimination of Rural Poverty on extending support to self help groups of women in Srikakulam District, Andhra Pradesh where they were enabled to manage the large self sustaining food security program.",
    additionalInfo: "His areas of interests include enterprise promotion, employment generation, cooperatives and producer companies, managerial applications for development and institution development. He extends consulting services on evaluation & assessment, strategic & business planning, capacity building, research & studies. He has presented papers including: “Tribal Livelihoods - Emerging Initiatives” - in a National Seminar on Tribal Livelihoods and “Role of Cooperatives in Financial Inclusion” to College of Agricultural Banking, Reserve Bank of India. He has also represented the interest of farmers and producers in National Advisory Committee Meetings.",
    designation: "Executive Director",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
  },
},

  {
    name: "Mr. G.V. Sarat Kumar",
    imageSrc: "https://www.alcindia.org/assets/team-member-image-61-398d432027e5fbc9d16ac4e69921cd9a.png",
    description: "Mr. G. V. Sarat Kumar is a rural management graduate from Institute of Rural Management, Anand (IRMA). He has over 12 years of experience in development sector; more than three and half years at the grassroots level. He has experience in community health, human resource management and livelihood promotion.",
    additionalInfo: "His areas of interest are youth employment, artisan livelihoods, and business plan development. He has extended consulting services to various organizations like Indian Cooperative Union, Kotak Education Foundation, World Vision India, Odisha Watershed Development Mission and NABARD.",
    designation: "Executive Director",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
  },
  },

  {
    name: "Ms. Sonal Shah",
    imageSrc: "https://www.alcindia.org/assets/team-member-image-84-d5bcbb69b7d0b146f21317d7d7719985.png",
    description: "Sonal Shah, Director of RK Group began her business journey at 22. She established a proprietary angel investment fund, Tempus Capital which has made 27 investments across diverse industries. Tempus's recent exit has been Twitter's acquisition of ZipDial. Post her graduation from Columbia Business School in New York Sonal returned to India to explore the excitement of the online business in India. The group's traditional business was that of textiles with specialization in excess and leftover textiles.",


    additionalInfo: "Being in the e-commerce capital of the country, Bangalore and witnessing the massive opportunity in online, Sonal ventured into the e-commerce industry. Partnering with one of the largest e-commerce players in the country, Sonal built & scaled the group's online business by establishing relationships with over 300 brands and achieving a GMV of $16 million in less than 12 months.",
    designation: "Director",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
  },
  },
];



const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <SliderArrow direction="left" />,
    nextArrow: <SliderArrow direction="right" />,
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  function SliderArrow({ direction, onClick }) {
    return (
      <div
        className={`absolute top-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} cursor-pointer transform -translate-y-1/2`}
        onClick={onClick}
      >
        <i className={`fas fa-chevron-${direction} text-3xl text-gray-800`} />
      </div>
    );
  }

  return (
    <>
      <div className="flex text-justify m-4">
        <h1 className="font-extrabold text-2xl text-rose-950 rounded-2xl">
          Our Board of Directors
          <hr className="py-2 bg-teal-950" />
        </h1>
      </div>

      <Slider {...sliderSettings}>
        {boardMembers.map((member, index) => (
          <div key={index} className="flex justify-center m-4 px-4">
            <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="object-cover object-center w-full h-64 transition-transform transform hover:scale-105"
                src={member.imageSrc}
                alt={member.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className={`mt-2 text-sm text-gray-600 ${showMore ? 'block' : 'overflow-hidden h-16'}`}>
                  {member.description}
                </p>
                {member.description.length > 160 && (
                  <button
                    className="text-blue-500 hover:text-blue-600 focus:outline-none"
                    onClick={toggleShowMore}
                  >
                    {showMore ? 'Show Less' : 'Show More'}
                  </button>
                )}
                {showMore && (
                  <>
                    <p className="mt-2 text-xs text-gray-500 font-light">
                      {member.additionalInfo}
                    </p>
                    <p className="mt-2 text-teal-950 text-xs font-extrabold">
                      {member.designation}
                    </p>
                    <div className="flex mt-4 space-x-2">
                      <a
                        href={member.socialLinks.facebook}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <i className="fab fa-facebook" />
                      </a>
                      <a
                        href={member.socialLinks.twitter}
                        className="text-light-blue-500 hover:text-light-blue-600"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href={member.socialLinks.instagram}
                        className="text-purple-500 hover:text-purple-600"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AlfBoardMembers;