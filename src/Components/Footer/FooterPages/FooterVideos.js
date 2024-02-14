import React from "react";

const YoutubeEmbed = () => (
  <div className="flex flex-wrap justify-center">
    {/* YouTube Content */}
    <div className="flex-inline float-start  h-svh ml-0 sm:m-12 py-10  w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 video-responsive">
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
    <div className="flex-inline float-right h-svh mr-0 sm:m-12 py-10 w-[60] sm:w-1/2 lg:w-1/2 xl:w-1/3">
      
      
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7159069369522622465"
          height="100%"
          width="125%"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="LinkedIn Posts"
        ></iframe>
        <button className="text-blue-500 mt-4 inline-block hover:underline" href="https://www.linkedin.com/company/access-livelihoods/about/" >
        Read more

        </button>
       
      </div>
    
    
  </div>
);

export default YoutubeEmbed;