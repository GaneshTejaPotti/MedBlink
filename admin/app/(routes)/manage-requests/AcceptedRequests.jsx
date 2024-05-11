import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AccountTable = ({ accounts }) => {
  return (
    <div>
      <table className="border-collapse border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Retailer Id</th>

            <th className="border p-3">Shop Name</th>
            <th className="border p-3">Owner Name</th>
            <th className="border p-3">Phone Number</th>
            <th className="border p-3">Email Address</th>
            <th className="border p-3">More Details</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account._id} className="bg-white">
              <td className="border p-3">Retailer ID</td>
              <td className="border p-3">{account.storeName}</td>
              <td className="border p-3">{account.ownerName}</td>
              <td className="border p-3">{account.phoneNumber}</td>
              <td className="border p-3">{account.email}</td>
              <td className="border p-3">
                <div className="flex justify-evenly gap-2">
                  <Dialog>
                    <DialogTrigger>
                      <p className="p-2 bg-green-500 rounded-md text-white">
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
