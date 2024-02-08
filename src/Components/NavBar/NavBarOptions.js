// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./AccessLivelihoodsLogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-amber-50  py-4 p-2 rounded-e-4xl sticky top-0 z-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-orange-900 text-lg text-pretty  font-medium">
       
          <img className='h-full w-1/2 object-contain m-0 '
          src={logo}
          alt='Access Livelihoods'          
          />
      
          
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-rose-950 focus:outline-none focus:ring focus:border-blue-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="blue"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-0 text-orange-900 bg-amber-50  p-8 space-y-2">
               <div className="group relative inline-block">
              <Link to="/About" onClick={toggleMenu}>
              About Us
              </Link>
              <ul className=" absolute hidden group-hover:flex-inline bg-gray-50 text-rose-950 py-6  px-4 space-y-8">
              <li>
                <Link to="/About/About%Access%Livelihoods ">Access Livelihoods </Link>
              </li>
              <li>
                <Link to="/About/Vision&Mission">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/About/Approach">Approach</Link>
              </li>bout/Values
              <li>
                <Link to="/About/Team">Team</Link>
              </li>
              <li>
                <Link to="/About/Values ">Values </Link>
              </li>
              <li>
                <Link to="/About/Partners ">Partners </Link>
              </li>
              
              {/* Add more submenu items as needed */}
            </ul>
              </div>
              <div className="group relative inline-block">
              <Link to="/Resources" onClick={toggleMenu}>
              Resources
              </Link>
              <ul className=" absolute hidden group-hover:flex-inline bg-gray-50 text-rose-950 py-6  px-4 space-y-8">
              <li>
                <Link to="https://www.alcindia.org/knowledge/">Knowledge Bank</Link>
              </li>
              <li>
                <Link to="https://www.alcindia.org/knowledge#case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/c/AccessLivelihoods">Videos</Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/accesslivelihoods.org">Blog </Link>
              </li>
              
              
              {/* Add more submenu items as needed */}
            </ul>
              </div>

              <div className="group relative inline-block">
              <Link to="/Models" onClick={toggleMenu}>
              Models
              </Link>
              <ul className=" absolute hidden group-hover:flex-inline bg-gray-50 text-rose-950 py-6  px-4 space-y-8">
              <li>
                <Link to="https://www.alcindia.org/models/show/beehive">Operation Beehive</Link>
              </li>
              <li>
                <Link to="https://www.alcindia.org/models/show/web">Operation Web</Link>
              </li>
              <li>
                <Link to="/About/OperationButterfly">Operation Butterfly</Link>
              </li>
              <li>
                <Link to="https://tii.alcindia.org/">Transforming India Initiative</Link>
              </li>
              <li>
                <Link to="https://www.alcindia.org/platforms/show/reimagine-finance">Digital Financial Inclusion</Link>
              </li>
              
              {/* Add more submenu items as needed */}
            </ul>
              </div>
              <Link to="/Innovations" onClick={toggleMenu}>
              Innovations
              </Link>
              <Link to="https://www.alcindia.org/careers/" onClick={toggleMenu}>
              Work With Us
              </Link>
              <Link to="/Donate" onClick={toggleMenu}>
              Donate
              </Link>
              <Link to="/Contact" onClick={toggleMenu}>
              Contact Us
              </Link>
              
            </div>
          )}
        </div>

        
        <div className="hidden lg:flex space-x-2">

          <div className="group relative inline-block">
          <Link to="/About" className=" hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty">
          About Us
          </Link>
          <ul className="absolute hidden group-hover:block text-teal-950 text-lg  px-4 bg-gray-50 w-max py-8  bg-blend-hue space-y-4">
              <li>
                <Link to="/About/AboutAccessLivelihoods "  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Access Livelihoods </Link>
              </li>
              <li>
                <Link to="/About/Vision&Mission"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/About/Approach"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Approach</Link>
              </li>
              <li>
                <Link to="/About/Team"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl"> Team</Link>
              </li>
              <li>
                <Link to="/About/Values " className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Values </Link>
              </li>
              <li>
                <Link to="/About/Partners "  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Partners </Link>
              </li>
              
              {/* Add more submenu items as needed */}
            </ul>
            </div>
            <div className="group relative inline-block">
          <Link to="/Resources" className=" hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty ">
          Resources
          </Link>
          <ul className="absolute hidden group-hover:block text-rose-950 text-lg w-max py-8 px-4 bg-gray-50 bg-blend-hue space-y-4">
              <li>
                <Link to="https://www.alcindia.org/knowledge/"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Knowledge Bank</Link>
              </li>
              <li>
                <Link to="https://www.alcindia.org/knowledge#case-studies"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl"> Case Studies</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/c/AccessLivelihoods"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Videos</Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/accesslivelihoods.org"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Blog </Link>
              </li>
              
              
              {/* Add more submenu items as needed */}
            </ul>
          </div>

          <div className="group relative inline-block">
          <Link to="/Models" className="hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty ">
          Models
          </Link>
          
          <ul className="absolute hidden group-hover:block text-rose-950 text-lg w-max py-8 px-4 bg-gray-50 bg-blend-hue space-y-4">
              <li>
                <Link to="https://www.alcindia.org/models/show/beehive" className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Operation Beehive</Link>
              </li>
              <li>
                <Link to="https://www.alcindia.org/models/show/web" className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Operation Web</Link>
              </li>
              <li>
                <Link to="/About/OperationButterfly"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Operation Butterfly</Link>
              </li>
              <li>
                <Link to="https://tii.alcindia.org/"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Transforming India Initiative</Link>
              </li>
              <li>
                <Link to="https://www.alcindia.org/platforms/show/reimagine-finance"  className="hover:text-amber-600 hover:font-bold hover:translate-x-full hover:text-xl">Digital Financial Inclusion</Link>
              </li>
              
              {/* Add more submenu items as needed */}
            </ul>
          
          </div>

          <div className=" relative inline-block">
          <Link to="/Innovations" className=" hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty">
          Innovations
          </Link>
          </div>
          <div className=" relative inline-block">
          <Link to="https://www.alcindia.org/careers/" className=" hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty">
          Work With Us
          </Link>
          </div>
          <div className=" relative inline-block">
          <Link to="/Donate" className=" hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty">
          Donate
          </Link>
          </div>

          <div className=" relative inline-block">
          <Link to="/Contact" className=" hover:bg-orange-400  hover:rounded-full px-4 py-2 text-rose-950 font-medium text-lg text-pretty">
          Contact Us
          </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
