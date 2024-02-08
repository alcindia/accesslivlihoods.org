import React from "react";

import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

function AlfEventsCard({ imageSrc, title, description, linkText, linkUrl, buttonText, buttonIcon }) {
  return (
    <Card className="flex-grow divide-y-2 p-4 m-8 md:max-w-[80rem] flex-row">
      <CardHeader shadow={false} floated={false} className="m-0 w-full md:w-2/5 rounded-r-none">
        <img
          src={imageSrc}
          alt="card-img"
          className="h-full w-full object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody className="w-full md:w-3/5">
        <Typography variant="h4" color="gray" className="mb-4 uppercase">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {description}
        </Typography>
        <a href={linkUrl} className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            {linkText}
            {buttonIcon && (
              <span>
                {buttonIcon}
              </span>
            )}
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

function AlfEventsCardContainer() {
  const cards = [
    {
      imageSrc: "https://media.licdn.com/dms/image/D5622AQExpeJZP4oJOw/feedshare-shrink_800/0/1706865673246?e=1709769600&v=beta&t=02q5xi6jIssGzSrrtwJHyjYbN28EP-lB4HzxjSWA6V8", // Replace with optimized image URL
      title: "Inspired by durable and sustainable transformation",
      description: "Our models seek to transform livelihoods by promoting the development of two capabilities that we believe communities already have: self-reliance and evolution.",
      linkText: "Learn More",
      linkUrl: "https://www.alcindia.org/our-journey",
      buttonText: "Learn More",
      buttonIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      ),
    },
    {
      imageSrc: "https://media.licdn.com/dms/image/D5622AQERcJkxUZ-MFw/feedshare-shrink_2048_1536/0/1706947517939?e=1709769600&v=beta&t=Y__koWLfd-h7sibFE28YycL8MbQRH9Vm_XfH6mNr5oo", // Replace with optimized image URL
      title: "Growth - Transforming Lives",
      description: "In working to transform the livelihoods of the marginalized, ALC India recognizes the need to work with committed professionals, expert associates, enthusiastic interns and volunteers.",
      linkText: "Transparency and Accountability",
      linkUrl: "https://www.alcindia.org/transparency-and-accountability/",
      buttonText: "Transparency and Accountability",
      buttonIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <AlfEventsCard key={index} {...card} />
      ))}
    </>
  );
}

export default AlfEventsCardContainer;
