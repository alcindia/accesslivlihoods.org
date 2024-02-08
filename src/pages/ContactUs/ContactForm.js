// ContactForm.js
import React from "react";

const InputField = ({ label, type, name, value, onChange, error }) => (
  <div className="mb-2 ">
    <label className="block text-sm font-bold text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border ${error ? "border-red-500" : "border-gray-300"} 
        rounded-md focus:outline-none focus:border-teal-500`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const TextAreaField = ({ label, name, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border ${error ? "border-red-500" : "border-gray-300"} 
        rounded-md focus:outline-none focus:border-teal-500`}
    ></textarea>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const SubmitButton = ({ label }) => (
  <div className="mb-4">
    <button
      type="submit"
      className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none"
    >
      {label}
    </button>
  </div>
);

const ContactForm = ({
  formData,
  errors,
  handleChange,
  clearErrors,
  handleSubmit,
}) => {
  const { firstName, lastName, email, phone, message } = formData;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <InputField
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <InputField
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Phone"
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <TextAreaField
        label="Message"
        name="message"
        value={message}
        onChange={handleChange}
        error={errors.message}
      />
      <SubmitButton label="Send Message" />
    </form>
  );
};

export default ContactForm;
