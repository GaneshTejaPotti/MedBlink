import React from 'react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import classes from '../styles/inputStyle.module.css'

const RetailerLogin = () => {
  return (
    <div className="mx-5 flex flex-col">
      <h2 className="text-2xl font-bold">Retailer Login</h2>
      <p>Please Enter your Username & Password </p>
      <div className="mt-5">
        <div className={classes.group}>
          <input required type="text" className={`${classes.inputText} w-[400px]`} />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}>UserName</label>
        </div>
      </div>

      <div className="mt-5">
        <div className={classes.group}>
          <input required type="password" className={`${classes.inputText} w-[400px]`} />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.labelInput}> Password</label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 w-[200px]">Login</Button>
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