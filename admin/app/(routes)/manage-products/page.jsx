"use client";
import React, { useState } from "react";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

const page = () => {
  const [selectedOperation, setSelectedOperation] = useState("createProduct");

  const handleCreateProductClick = () => {
    setSelectedOperation("createProduct");
  };

  const handleUpdateProductClick = () => {
    setSelectedOperation("updateProduct");
  };

  const handleDeleteProductClick = () => {
    setSelectedOperation("deleteProduct");
  };

  return (
    <div className="mt-20 ">
      <h2 className="p-4 text-white bg-primary font-bold text-3xl text-center">
        Manage Products
      </h2>
      <div className="mt-5 gap-y-5 mx-5">
        <div className="flex flex-row justify-center items-start">
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedOperation === "createProduct"
                ? "bg-red-600 text-white"
                : "hover:text-black"
            }`}
            onClick={handleCreateProductClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Create Product
            </h2>
          </button>
          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedOperation === "updateProduct"
                ? "bg-red-600 text-white"
                : "hover:text-black"
            }`}
            onClick={handleUpdateProductClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Update Product
            </h2>
          </button>

          <button
            className={`text-black-200 p-5 w-[300px] ${
              selectedOperation === "deleteProduct"
                ? "bg-red-600 text-white"
                : "hover:text-black"
            }`}
            onClick={handleDeleteProductClick}
          >
            <h2 className="hover:scale-110 hover:transition-all hover:ease-in-out">
              Delete Product
            </h2>
          </button>
        </div>
        {selectedOperation === "createProduct" && (
          <div>
            <h2 className="font-bold text-2xl italic m-5">Create Product</h2>
            <CreateProduct />
          </div>
        )}

        {selectedOperation === "updateProduct" && (
          <div>
            <h2 className="font-bold text-2xl italic m-5">Update Product</h2>
            <UpdateProduct />
          </div>
        )}

        {selectedOperation === "deleteProduct" && (
          <div>
            <h2 className="font-bold text-2xl italic m-5">Delete Product</h2>
            <DeleteProduct />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
