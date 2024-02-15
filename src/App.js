import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBarOptions";
import SocialMedia from "./pages/SocialMedia";
import AlfHome from "./pages/AlcHome/AlfHomeMain";
import Contact from "./pages/ContactUs/Contact";
import Models from "./pages/Models/Models";
import Innovations from "./pages/Innovations/Innovations";
import { useDocTitle } from "./Components/CustomHook";
import Careers from "./Components/Careers";
import Clients from "./Components/Clients";
import About from "./pages/AboutUs/AboutUs";
import Resources from "./pages/Resources/Resources";
import DonateForm from "./pages/Donate";
import Footer from "./Components/Footer/FooterPages/AclFooter";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useDocTitle("Access Livelihoods");

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route path="/" element={<AlfHome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Innovations" element={<Innovations />} />
        <Route path="/Models" element={<Models />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Donate" element={<DonateForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer className="absolute mb-0 footer--pin gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 flex object-contain max-w-full mx-auto px-2 sm:px-6 shadow-md" />
    </Router>
  );
};

export default App;
