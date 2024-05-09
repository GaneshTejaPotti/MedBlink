import React from "react";
import classes from "./inputStyle.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-row mt-20 p-5 justify-center items-center shadow-xl ">
        <div className="flex items-center m-5">
          <Image src="/logo.png" alt="logo" height={200} width={200} />
        </div>
        <div className="flex flex-col mt-5 gap-5">
          <div>
            <h2 className="text-2xl font-bold">Admin Login</h2>
            <p>Please Enter your Username & Password </p>
          </div>

          <div className={classes.group}>
            <input
              required
              type="text"
              className={`${classes.inputText} w-[400px]`}
            />
            <span className={classes.highlight}></span>
            <span className={classes.bar}></span>
            <label className={classes.labelInput}>UserName</label>
          </div>

          <div className="mt-5">
            <div className={classes.group}>
              <input
                required
                type="password"
                className={`${classes.inputText} w-[400px]`}
              />
              <span className={classes.highlight}></span>
              <span className={classes.bar}></span>
              <label className={classes.labelInput}> Password</label>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="mt-4 w-[200px]">Login</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
