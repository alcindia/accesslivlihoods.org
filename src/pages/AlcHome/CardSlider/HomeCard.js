import React from 'react';

const ProfileCard = ({ name, role, image }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default ProfileCard;
