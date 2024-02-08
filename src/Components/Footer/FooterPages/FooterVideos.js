import React from "react";

const YoutubeEmbed = () => (
  <div className="flex flex-wrap justify-center">
    {/* YouTube Content */}
    <div className="h-svh m-4 sm:m-12 py-12 border-solid border-2 border-gray-100 w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 video-responsive">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/videoseries?si=dRs7BFHoIhKLtDIx&amp;list=PLA3nyg6uUHxj1qsexfsE2HMe1GfjAL1sV"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>

    {/* Blog Card */}
    <div className="m-4 sm:m-12 py-12 w-full sm:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="bg-white p-6 rounded-md shadow-md">
      
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7159069369522622465"
          height="400"
          width="504"
          // frameBorder="0"
          allowFullScreen=""
          title="Embedded post"
        ></iframe>
        <a
          href="https://www.linkedin.com/company/access-livelihoods/about/"
          className="text-blue-500 mt-4 inline-block hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  </div>
);

export default YoutubeEmbed;