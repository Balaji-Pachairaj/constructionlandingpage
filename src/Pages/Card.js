// src/Card.js
import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';

const Card = ({ title, image, address, phone, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 p-4 w-80 flex flex-col relative">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="mt-4 flex-grow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center mt-2">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <span className="text-gray-700">{address}</span>
        </div>
        <div className="flex items-center mt-1">
          <FaPhone className="text-gray-500 mr-2" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div className="mt-2 text-gray-700">{email}</div>
      </div>
      <div className="absolute top-2 right-2 flex items-center">
        <span className="relative inline-block group">
          <FaBookmark className="text-gray-400 group-hover:text-black transition-colors duration-300" style={{ fontSize: '32px' }} />
          <FaMapMarkerAlt className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 group-hover:text-silver transition-colors duration-300" style={{ fontSize: '20px' }} />
        </span>
      </div>
    </div>
  );
};

export default Card;
