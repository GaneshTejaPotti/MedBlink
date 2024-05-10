import React from 'react';
import FetchDb from '../api/FetchDb';

const page = () => {
  const { fetchAccounts, accountsData } = FetchDb();

  fetchAccounts();

  console.log(accountsData);

  return <div className="mt-20">Manage Requests</div>;
};

export default page;
