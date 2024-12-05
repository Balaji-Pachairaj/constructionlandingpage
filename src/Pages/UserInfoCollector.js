import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';

const UserInfoCollector = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mail, setMail] = useState(false);
  const [cookies, setCookies] = useState(false);

  const handleSubmit = () => {
    const userInfo = {
      name,
      phone,
      email,
      address,
      mail,
      cookies,
    };
    console.log(userInfo);
  };

  return (
    <div className="user-info-collector mb-10 p-4">
      <h4 className="text-black text-2xl font-bold text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
        User Information
      </h4>
      <div className="h-2 w-1/3 mx-auto bg-black mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mb-4">
          <FaUser className="absolute left-2 top-3 text-gray-500 transition-transform transform hover:scale-110" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 pl-10 w-full h-12 rounded-md focus:outline-none"
            style={{ borderColor: '#ccc', fontSize: '16px' }}
          />
        </div>
        <div className="relative mb-4">
          <FaPhone className="absolute left-2 top-3 text-gray-500 transition-transform transform hover:scale-110" />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 pl-10 w-full h-12 rounded-md focus:outline-none"
            style={{ borderColor: '#ccc', fontSize: '16px' }}
          />
        </div>
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-2 top-3 text-gray-500 transition-transform transform hover:scale-110" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 pl-10 w-full h-12 rounded-md focus:outline-none"
            style={{ borderColor: '#ccc', fontSize: '16px' }}
          />
        </div>
        <div className="relative mb-4">
          <FaHome className="absolute left-2 top-3 text-gray-500 transition-transform transform hover:scale-110" />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-3 pl-10 w-full h-12 rounded-md focus:outline-none"
            style={{ borderColor: '#ccc', fontSize: '16px' }}
          />
        </div>
      </div>

      <div className="flex items-center mt-4">
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            checked={mail}
            onChange={(e) => setMail(e.target.checked)}
            className="form-checkbox text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <span className="ml-2 text-black">Receive promotional mail</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={cookies}
            onChange={(e) => setCookies(e.target.checked)}
            className="form-checkbox text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <span className="ml-2 text-black">Accept cookies</span>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-3 px-6 rounded-md mt-4 transition-transform transform hover:scale-105 hover:bg-blue-600 active:scale-95"
      >
        Submit
      </button>
    </div>
  );
};

export default UserInfoCollector;
