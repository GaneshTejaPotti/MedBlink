import React from "react";
import FetchDb from "../api/FetchDb";

const page = () => {
  const { fetchAccounts, accountsData } = FetchDb();
  
  return (
    <div className="mt-20 ">
      <h2 className="p-4 text-white bg-primary font-bold text-3xl text-center">
        Manage Requests
      </h2>
      <div className="mt-5 gap-y-5 mx-5">
        <h2 className="font-bold text-xl mb-5">Available Requests</h2>
        <Requests />
      </div>
    </div>
  );
};

export default page;
