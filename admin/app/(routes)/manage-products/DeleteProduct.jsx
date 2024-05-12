"use client";
import React, { useState } from "react";
import classes from "../../styles/inputStyle.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IoHomeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const DeleteProduct = () => {
  const [deleteProductId, setDeleteProductId] = useState("");
  const [isProductAvailable, setIsProductAvailable] = useState(false);
  const [productData, setProductData] = useState(null); // Store product data
  const router = useRouter();

  const handleChange = (e) => {
    setDeleteProductId(e.target.value);
    console.log(e.target.value);
  };

  const handleCheck = () => {
    const mockProductData = "hello";

    console.log(!mockProductData);

    if (!mockProductData) {
      setIsProductAvailable(false);
      return;
    }

    setProductData(mockProductData);
    setIsProductAvailable(true);
  };

  const handleDeleteBatch = () => {};

  return (
    <div className="m-7 flex flex-col gap-5">
      <div className="flex  items-center justify-start border-2 p-5 w-full gap-5 rounded-lg">
        <div className="flex items-center justify-start gap-5">
          <div className={classes.group}>
            <input
              required
              type="text"
              className={`${classes.inputText} w-[400px]`}
              value={deleteProductId}
              onChange={handleChange}
            />
            <span className={classes.highlight}></span>
            <span className={classes.bar}></span>
            <label className={classes.labelInput}>ProductId</label>
          </div>

          <div>
            <button
              onClick={handleCheck}
              className="rounded py-2 px-4 text-white bg-red-600"
            >
              <div className="flex items-center gap-2 justify-center text-md">
                Check
              </div>
            </button>
          </div>
        </div>
      </div>
      {isProductAvailable && (
        <div className="flex flex-col gap-y-5 border-2 rounded-lg p-5">
          <div className="flex justify-start">
            <h2 className="font-bold text-xl italic">
              ProductId Batch Details
            </h2>
          </div>
          <div>
            <table className="border-collapse border w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-3">BatchId</th>
                  <th className="border p-3">Expiry Date</th>
                  <th className="border p-3">MRP</th>
                  <th className="border p-3">Cost Price</th>
                  <th className="border p-3">Category</th>
                  <th className="border p-3">Manufacturer</th>
                  <th className="border p-3">Actions</th>
                </tr>
              </thead>
              {/* <div className="flex justify-evenly gap-2"></div> */}
              <tbody>
                <tr className="bg-white">
                  <td className="border p-3">hello</td>
                  <td className="border p-3">hello</td>
                  <td className="border p-3">hello</td>
                  <td className="border p-3">hello</td>
                  <td className="border p-3">hello</td>
                  <td className="border p-3">hello</td>
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
                            <DialogTitle>Hellooooo</DialogTitle>
                            <DialogDescription>
                              <div className="flex flex-col mt-4 gap-y-3">
                                <div className="flex gap-2">
                                  <p className="font-bold text-lg">BatchID:</p>
                                  <p className="italic text-lg">hello</p>
                                </div>
                                <div className="flex gap-2">
                                  <p className="font-bold text-lg">
                                    Expiry Date:
                                  </p>
                                  <p className="italic text-lg">hello</p>
                                </div>
                                <div className="flex gap-2">
                                  <p className="font-bold text-lg">MRP:</p>
                                  <p className="italic text-lg">helloo</p>
                                </div>
                                <div className="flex gap-2">
                                  <p className="font-bold text-lg">Category:</p>
                                  <p className="italic text-lg">hello</p>
                                </div>
                                <div className="flex gap-2">
                                  <p className="font-bold text-lg">
                                    Manufacturer:
                                  </p>
                                  <p className="italic text-lg">hello</p>
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <p className="bg-red-500 text-white py-2 px-4 rounded-lg">
                            Delete
                          </p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This Action can't be undone. Really you want to
                              delete this batch and remove details...?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteBatch}>
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-center gap-10">
            <button
              onClick={() => {
                router.push("/");
              }}
              className="w-[350px] p-3 text-white  bg-red-600"
            >
              <div className="flex items-center gap-2 justify-center text-lg">
                Home <IoHomeOutline />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
