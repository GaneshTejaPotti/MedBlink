'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import UserLogin from './UserLogin';
import RetailerLogin from './RetailerLogin';
import Link from 'next/link';

const Login = () => {
  const [selectedLogin, setSelectedLogin] = useState('user');

  const handleRetailerLoginClick = () => {
    setSelectedLogin('retailer');
  };

  const handleUserLoginClick = () => {
    setSelectedLogin('user');
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col justify-center rounded-lg shadow-2xl">
        <div className="flex flex-row justify-center items-start">
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedLogin === 'retailer' ? 'bg-red-600 text-white' : 'hover:text-black'
            }`}
            onClick={handleRetailerLoginClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Retailer Login
            </h2>
          </button>
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedLogin === 'user' ? 'bg-red-600 text-white' : 'hover:text-black'
            }`}
            onClick={handleUserLoginClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">User Login</h2>
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
          {selectedLogin === 'user' && <UserLogin />}
          {selectedLogin === 'retailer' && <RetailerLogin />}
        </div>
      </div>
    </div>
  );
};

export default Login;