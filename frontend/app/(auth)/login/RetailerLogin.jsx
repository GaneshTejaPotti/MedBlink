'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import classes from '../styles/inputStyle.module.css';
import useLogin from '@/app/(routes)/api/useLogin';

const RetailerLogin = () => {
  const { login } = useLogin();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await login({ retailerId: username, password: password });
  };

  return (
    <div className="mx-5 flex flex-col">
      <h2 className="text-2xl font-bold">Retailer Login</h2>
      <p>Please Enter your Username & Password </p>
      <div className="mt-5">
        <div className={classes.group}>
          <input
            required
            type="text"
            className={`${classes.inputText} w-[400px]`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            type="password"
            className={`${classes.inputText} w-[400px]`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}> Password</label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 w-[200px]" onClick={handleLogin}>
          Login
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p>New on medBlink? </p>
        <Link href="/sign-up" className="underline text-red-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default RetailerLogin;
