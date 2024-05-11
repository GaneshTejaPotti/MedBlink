'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import classes from '../../styles/inputStyle.module.css';
import PostDb from '../api/PostDb';

const AccountTable = ({ accounts }) => {
  const { saveRetailer } = PostDb();

  const [saveRetailerAuthDetail, setSaveRetailerAuthDetail] = useState({
    _id: '',
    retailerId: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSaveRetailerAuthDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async (accountId) => {
    await saveRetailer({
      _id: accountId,
      retailerId: saveRetailerAuthDetail.retailerId,
      password: saveRetailerAuthDetail.password,
    });
  };

  return (
    <div>
      <table className="border-collapse border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Shop Name</th>
            <th className="border p-3">Owner Name</th>
            <th className="border p-3">Phone Number</th>
            <th className="border p-3">Email Address</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account._id} className="bg-white">
              <td className="border p-3">{account.storeName}</td>
              <td className="border p-3">{account.ownerName}</td>
              <td className="border p-3">{account.phoneNumber}</td>
              <td className="border p-3">{account.email}</td>
              <td className="border p-3">
                <div className="flex justify-evenly gap-2">
                  <Dialog>
                    <DialogTrigger>
                      <p className="p-2 bg-orange-500 rounded-md text-white">
                        See Details
                      </p>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{account.storeName}</DialogTitle>
                        <DialogDescription>
                          <div className="flex flex-col mt-4 gap-y-3">
                            <div className="flex gap-2">
                              <p className="font-bold text-lg">Owner Name:</p>
                              <p className="italic text-lg">
                                {account.ownerName}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <p className="font-bold text-lg">Phone Number:</p>
                              <p className="italic text-lg">
                                {account.phoneNumber}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <p className="font-bold text-lg">
                                Email Address:
                              </p>
                              <p className="italic text-lg">{account.email}</p>
                            </div>
                            <div className="flex gap-2">
                              <p className="font-bold text-lg">Shop Address:</p>
                              <p className="italic text-lg">
                                {account.address}
                              </p>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <button className="p-2 bg-red-500 rounded-md text-white">
                    Revoke
                  </button>
                  <Dialog>
                    <DialogTrigger>
                      <p className="p-2 bg-green-500 rounded-md text-white">
                        Accept
                      </p>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogDescription>
                          <div className="flex flex-col">
                            <h2 className="text-2xl font-bold">
                              {account.storeName}
                            </h2>
                            <p>Please Set Retailer Id & Password </p>

                            <div className="flex flex-col gap-5 mt-7">
                              <div className={classes.group}>
                                <input
                                  required
                                  type="text"
                                  className={`${classes.inputText} w-[400px]`}
                                  name="retailerId"
                                  value={saveRetailerAuthDetail.retailerId}
                                  onChange={onChangeHandler}
                                />
                                <span className={classes.highlight}></span>
                                <span className={classes.bar}></span>
                                <label className={classes.labelInput}>
                                  RetailerId
                                </label>
                              </div>

                              <div className="mt-5">
                                <div className={classes.group}>
                                  <input
                                    required
                                    type="password"
                                    className={`${classes.inputText} w-[400px]`}
                                    name="password"
                                    value={saveRetailerAuthDetail.password}
                                    onChange={onChangeHandler}
                                  />
                                  <span className={classes.highlight}></span>
                                  <span className={classes.bar}></span>
                                  <label className={classes.labelInput}>
                                    Password
                                  </label>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <Button
                                  onClick={() => handleSave(account._id)}
                                  className="mt-4 w-[200px]"
                                >
                                  Save
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
