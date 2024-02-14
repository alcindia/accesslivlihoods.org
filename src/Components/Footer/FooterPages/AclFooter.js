import React from "react";
import FooterDropMenu from "./FooterItems";
import { Link } from "react-router-dom";
import logo from "./AccessLivelihoodsLogo.svg";

const Footer = () => {
  return (
    <footer>

      {/* Top Section */}
      <div className="bg-orange-400 text-teal-900 bg-blend-multiply py-2 md:py-4">
        <FooterDropMenu />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row items-center justify-center sm:px-4 px-2 bg-amber-200 text-white py-2">

        {/* Logo */}
        <img
          className="relative left-0  w-full md:w-1/6 max-w-full h-auto md:max-h-full rounded-e-2xl hover:bg-orange-400 object-contain"
          src={logo}
          alt="ALF_LOGO"
        />

        {/* Links Grid */}
        <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4 p-2 text-xs rounded-xl border-sky-100 bg-sky-50 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">

          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods Consulting India Limited
          </Link>
          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods Artisans Foundation
          </Link>
          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods Foundation
          </Link>
          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods Development Finance
          </Link>
          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods Learning Foundation
          </Link>
          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods Marketing Services
          </Link>
          <Link to="/#19alcil05" className="block font-normal text-rose-950 hover:text-teal-900 hover:bg-white transition duration-300 ease-in-out p-2">
            Access Livelihoods International Foundation
          </Link>

     
          
        </div>

      </div>

      {/* Separator */}
      <hr className="py-4 md:py-2" />

      {/* Bottom Section */}
      <div className="text-teal-100 bg-rose-950 flex flex-col md:flex-row items-center md:justify-between justify-center mx-auto px-4 py-2">
        <div className="md:w-4/12 px-4 mx-auto text-center mb-4 md:mb-0">
          <div className="text-xs font-sans font-thin">
            <Link to="/" className="text-teal-100 hover:text-white hover:underline">
              Access Livelihoods
            </Link>
            <hr className="border-teal-300 my-2" />
            Copyright &copy; {new Date().getFullYear()} · Privacy Policy · Developed by: Tathagat
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
