import React from 'react';
import { Typography } from '@material-tailwind/react';
import YouTubeEmbed from './FooterVideos';

const SITEMAP = [
  {
    title: 'CAREERS',
    links: ['Consultants', 'Interns', 'Volunteers', 'Fellowships'],
  },
  {
    title: 'RESOURCES',
    links: ['Knowledge Bank', 'Case Studies', 'Blog',  'Videos'],
  },
  {
    title: 'LEGAL',
    links: ['Documentation', 'Financial Statements'],
  },
  {
    title: 'APPROACH',
    links: [ 'Success Stories', 'Intervention Models'],
  },
];

const FooterDropMenu = () => {
  return (
    <footer>
      <div className="grid-flow-row object-cover overflow-hidden bg-white">
        <YouTubeEmbed />
      </div>

      <div className="grid text-center gap-2 px-2 py-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {SITEMAP.map(({ title, links }, key) => (
          <div key={key} className="w-full relative group mb-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold uppercase opacity-50 cursor-pointer group-hover:opacity-100"
            >
              {title}
            </Typography>
            <ul className="space-y-1 opacity-0 group-hover:opacity-100 absolute top-full right-0 bg-white border border-blue-gray-200 py-2 px-4 rounded-md transition-opacity duration-300 invisible group-hover:visible">
              {links.map((link, key) => (
                <Typography key={key} as="li" color="blue-gray" className="font-normal">
                  <a href={link} className="inline-block py-1 -2 transition-transform hover:scale-105">
                    {link}
                  </a>
                </Typography>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
      
    </footer>
  );
};

export default FooterDropMenu;
