'use client';
import React from 'react';
import { Button } from '../../../components/ui/button';
import classes from '../styles/inputStyle.module.css';
import Link from 'next/link';
import { useState } from 'react';

const UserSignup = () => {
  const [newUserDetail, setNewUserDetail] = useState({
    username: '',
    email: '',
    password: '',
  });

  const userHandleChange = (event) => {
    const { name, value } = event.target;
    setNewUserDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="mx-5 flex flex-col">
      <h2 className="text-2xl font-bold">User Sign Up</h2>
      <p>Please Enter Details to create Account </p>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            className={`${classes.inputText} w-[400px]`}
            onChange={userHandleChange}
            value={newUserDetail.username}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>UserName</label>
        </div>
      </div>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            className={`${classes.inputText} w-[400px]`}
            onChange={userHandleChange}
            value={newUserDetail.email}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Email</label>
        </div>
      </div>

      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="password"
            className={`${classes.inputText} w-[400px]`}
            onChange={userHandleChange}
            value={newUserDetail.password}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>Password</label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 w-[200px]">Sign up </Button>
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

export default UserSignup;