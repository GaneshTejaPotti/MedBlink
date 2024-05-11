// import { UseAuthContext } from '../context/useAuthContext';
"use client";
import React, { useState } from "react";
const FetchDb = () => {
  //   const { user } = UseAuthContext();

  const BACKEND_URL =
    process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

  const [accountsData, setAccountsdata] = useState([]);

  const fetchAccounts = async (data) => {
    console.log(data);
    const response = await fetch(`${BACKEND_URL}/api/admin/getaccounts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    console.log(response);

    if (!response.ok) {
      console.log(response);
    }
    if (response.ok) {
      setAccountsdata(json.accounts);

      console.log(response);
    }
  };

  return {
    fetchAccounts,
    accountsData,
  };
};

export default FetchDb;
