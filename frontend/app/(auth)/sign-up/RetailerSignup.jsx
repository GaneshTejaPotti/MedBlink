'use client';
import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import classes from '../styles/inputStyle.module.css';
import Link from 'next/link';
import PostDb from '@/helpers/postDb';

const RetailerSignup = () => {
  const { signupRetailer } = PostDb();
  const [newRetailerDetail, setNewRetailerDetail] = useState({
    storeName: '',
    address: '',
    phoneNumber: '',
    email: '',
    ownerName: '',
    city: '',
  });

  const retailerHandleChange = (event) => {
    const { name, value } = event.target;
    setNewRetailerDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(newRetailerDetail);

    await signupRetailer(newRetailerDetail);
  };

  return (
    <div className="mx-5 flex flex-col">
      <h2 className="text-2xl font-bold">Retailer Sign Up</h2>
      <h2 className="font-bold">Please Enter below Details </h2>
      <p>For Verification</p>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            name="storeName"
            className={`${classes.inputText} w-[400px]`}
            onChange={retailerHandleChange}
            value={newRetailerDetail.storeName}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Authorized Store Name</label>
        </div>
      </div>

      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            name="ownerName"
            className={`${classes.inputText} w-[400px]`}
            onChange={retailerHandleChange}
            value={newRetailerDetail.ownerName}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Owner Name</label>
        </div>
      </div>

      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            name="address"
            className={`${classes.inputText} w-[400px]`}
            onChange={retailerHandleChange}
            value={newRetailerDetail.address}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Address</label>
        </div>
      </div>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            name="city"
            className={`${classes.inputText} w-[400px]`}
            onChange={retailerHandleChange}
            value={newRetailerDetail.city}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>City</label>
        </div>
      </div>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="tel"
            name="phoneNumber"
            className={`${classes.inputText} w-[400px]`}
            onChange={retailerHandleChange}
            value={newRetailerDetail.phoneNumber}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Phone Number</label>
        </div>
      </div>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            name="email"
            className={`${classes.inputText} w-[400px]`}
            onChange={retailerHandleChange}
            value={newRetailerDetail.email}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Email</label>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold underline">Note: </p>
        <p>Login Details will be sent to Registered E-mail</p>
      </div>
      <div className="flex justify-center">
        <Button onClick={handleSubmit} className="mt-4 w-[200px]">
          Sign up
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p>Have an account?</p>
        <Link href="/login" className="underline text-red-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RetailerSignup;
