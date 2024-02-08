import React, { useState } from "react";
import { useDocTitle } from "../../Components/CustomHook";
import Notiflix from "notiflix";
import ContactForm from "./ContactForm";
import logo from "../../images/AlcLogo/AccessLivelihoodsLogo.svg";

const Contact = () => {
  useDocTitle("Contact Us");

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation logic for required fields and email format
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const clearErrors = () => {
    setErrors({});
  };

  const clearInput = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, perform actions or submit
      clearInput();
      Notiflix.Notify.success("Form submitted successfully!");
    } else {
      // If form is invalid, show errors or take appropriate action
      Notiflix.Notify.failure("Please fill in the required fields correctly.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    clearErrors();
  };

  return (
    <div className="ml-8 mt-8 flex flex-wrap">
      <div className="  w-full md:w-1/2 ">
        <div className=" flex justify-center items-center relative group rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition duration-300 ease-in-out flex-col">
          <div className=" flex-grow mb-2 px-8  ">{/* This will push the content to the bottom */}
          <div className="text-center px-8 py-12 ">
            <h1 className="text-2xl text-teal-800 font-bold mb-8 ">Head Office</h1>
            <p className="text-rose-950 text-sm ">17-1-383/47, 4th Cross Road,</p>
            <p className="text-rose-950 py-4">Vinay Nagar Colony Saidabad </p> 
            <p> Hyderabad, Telangana 500059, IN</p>
            <p className="text-rose-950 py-4">Phone: +9140 2453 2729 </p> <p className="text-rose-950 "> Email: reimagine@accesslivelihoods.org</p>
          </div>
          </div> 
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <img src={logo} alt="Company Logo" className="w-fit h-1/12 group-hover:scale-50 transform transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 " id="contact">
        <div className=" flex justify-center items-center w-full bg-white py-8">
          <div className="container mx-auto my-0 px-4 lg:px-20" data-aos="zoom-in">
            <ContactForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              clearErrors={clearErrors}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
