"use client";
import React, { useEffect, useState } from "react";
import PendingRequests from "./PendingRequests";
import AcceptedRequests from "./AcceptedRequests";
import FetchDb from "../api/FetchDb";
// import FetchDb from "../api/FetchDb";

const page = () => {
  const { fetchAccounts, accountsData } = FetchDb();

  useEffect(() => {
    fetchAccounts();
  }, []);

  console.log(accountsData);

  const [selectedRequests, setSelectedRequests] = useState("pending");

  const handlePendingRequestsClick = () => {
    setSelectedRequests("pending");
  };

  const handleAcceptedRequestsClick = () => {
    setSelectedRequests("accepted");
  };

  return (
    <div className="mt-20 ">
      <h2 className="p-4 text-white bg-primary font-bold text-3xl text-center">
        Manage Requests
      </h2>
      <div className="mt-5 gap-y-5 mx-5">
        <div className="flex flex-row justify-center items-start">
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedRequests === "pending"
                ? "bg-red-600 text-white"
                : "hover:text-black"
            }`}
            onClick={handlePendingRequestsClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Pending Requests
            </h2>
          </button>
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedRequests === "accepted"
                ? "bg-red-600 text-white"
                : "hover:text-black"
            }`}
            onClick={handleAcceptedRequestsClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Accepted Requests
            </h2>
          </button>
        </div>
        {selectedRequests === "pending" && (
          <div>
            <h2 className="font-bold text-2xl italic m-5">Pending Requests</h2>
            <PendingRequests accounts={accountsData} />
          </div>
        )}

        {selectedRequests === "accepted" && (
          <div>
            <h2 className="font-bold text-2xl italic m-5">Accepted Requests</h2>
            <AcceptedRequests accounts={accountsData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
