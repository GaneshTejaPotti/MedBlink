'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import UserSignup from './UserSignup';
import RetailerSignup from './RetailerSignup';
import Link from 'next/link';

const SignUp = () => {
  const [selectedSignup, setSelectedSignup] = useState('user');

  const handleRetailerSignupClick = () => {
    setSelectedSignup('retailer');
  };

  const handleUserSignupClick = () => {
    setSelectedSignup('user');
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col justify-center shadow-2xl rounded-lg pb-5">
        <div className="flex flex-row justify-center items-start">
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedSignup === 'retailer' ? 'bg-red-600 text-white' : 'hover:text-black'
            }`}
            onClick={handleRetailerSignupClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Retailer Signup
            </h2>
          </button>
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedSignup === 'user' ? 'bg-red-600 text-white' : ' hover:text-black'
            }`}
            onClick={handleUserSignupClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">User Signup</h2>
          </button>
        </div>
        <div className="flex flex-row justify-center p-5">
          <div className="flex flex-col justify-center items-start gap-5">
            <Image src="/logo.png" alt="logo" height={200} width={200} />
            <div className="flex gap-1">
              <h2>Back to</h2>
              <Link href="/" className="text-red-600 underline">
                Home
              </Link>
              <h2>...</h2>
            </div>
          </div>
          {selectedSignup === 'user' && <UserSignup />}
          {selectedSignup === 'retailer' && <RetailerSignup />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;