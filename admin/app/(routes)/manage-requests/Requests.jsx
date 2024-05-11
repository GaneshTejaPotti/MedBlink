"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Requests = () => {
  return (
    <div>
      <div className="flex flex-row gap-10 border rounded-lg items-center justify-between p-3">
        <h2>Devi Medicals</h2>
        <h2>Ganesh Teja Potti</h2>
        <h2>9246744448</h2>
        <div className="flex flex-row justify-end gap-10">
          <Dialog>
            <DialogTrigger>
              <p className="p-2 bg-orange-500 rounded-md text-white">
                See Details
              </p>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Devi Medical Corporation</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col mt-4 gap-y-3">
                    <div className="flex gap-2">
                      <p className="font-bold text-lg">Owner Name: </p>
                      <p className="italic text-lg">Ganesh Potti</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-bold text-lg">Phone Number: </p>
                      <p className="italic text-lg">9246744448</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-bold text-lg">Email Address: </p>
                      <p className="italic text-lg">
                        ganeshpotti2003@gmail.com
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-bold text-lg">Shop Address: </p>
                      <p className="italic text-lg">
                        1-31-16/1 S.V.N Colony 2nd Lane
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-bold text-lg">City: </p>
                      <p className="italic text-lg">Guntur</p>
                    </div>

                    <div className="flex flex-row gap-10 justify-evenly">
                      <button className="p-2 bg-red-500 rounded-md text-white">
                        Revoke
                      </button>
                      <button className="p-2 bg-green-500 rounded-md text-white">
                        Accept
                      </button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <button className="p-2 bg-green-500 rounded-md text-white">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
