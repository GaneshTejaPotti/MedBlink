"use client";
import React, { useEffect, useState } from "react";

import FilterDropdown from "../../_ui_components/FilterDropdown";
import { useRouter } from "next/navigation";
import { VscSaveAs } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";

const CreateProduct = () => {
  const router = useRouter();

  const [newProductDetail, setNewProductDetail] = useState({
    productId: "",
    productName: "",
    productDescription: "",
    productMrp: "",
    costPrice: "",
    retailerPrice: "",
    userPrice: "",
    discount: "",
    gst: "",
    pack: "",
    batch: "",
    expiryDate: "",
    category: "",
    manufacturer: "",
    hsnCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(newProductDetail);
  };

  useEffect(() => {
    console.log(newProductDetail);
  }, []);

  const handleCategorySelect = (category) => {
    setNewProductDetail((prev) => {
      return { ...prev, category: category };
    });
  };

  const handleManufacturerSelect = (manufacturer) => {
    setNewProductDetail((prev) => {
      return { ...prev, manufacturer: manufacturer };
    });
  };

  const handleCancel = () => {
    router.push("/");
  };
  return (
    <div className="flex">
      <div className="flex flex-col gap-y-5 border-2 p-5 m-5 rounded-lg">
        <div className="flex gap-5">
          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="productId"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Product Id:
            </label>
            <input
              id="productId"
              type="text"
              placeholder="Eg: ALK2XXXX4"
              value={newProductDetail.productId}
              name="productId"
              onChange={handleChange}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="productName"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Product Name:
            </label>
            <input
              id="productName"
              type="text"
              placeholder="Eg: Aceclo Plus"
              name="productName"
              onChange={handleChange}
              value={newProductDetail.productName}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[450px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="productDescription"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Product Description:
            </label>
            <input
              id="productDescription"
              type="text"
              placeholder="Eg: Aceclofenac & Paracetamol Tablets"
              name="productDescription"
              onChange={handleChange}
              value={newProductDetail.productDescription}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[620px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>
        </div>

        <div className="flex gap-10 items-center justify-start">
          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="productMrp"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              MRP:
            </label>
            <input
              id="productMrp"
              type="number"
              placeholder="Eg: XX.XX Rs"
              name="productMrp"
              onChange={handleChange}
              value={newProductDetail.productMrp}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="costPrice"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Cost Price:
            </label>
            <input
              id="costPrice"
              type="number"
              placeholder="Eg: XX.XX Rs"
              name="costPrice"
              onChange={handleChange}
              value={newProductDetail.costPrice}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="retailerPrice"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Retailer Price:
            </label>
            <input
              id="retailerPrice"
              type="number"
              placeholder="Eg: XX.XX Rs"
              name="retailerPrice"
              onChange={handleChange}
              value={newProductDetail.retailerPrice}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="userPrice"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              User Price:
            </label>
            <input
              id="userPrice"
              type="number"
              placeholder="Eg: XX.XX Rs"
              name="userPrice"
              onChange={handleChange}
              value={newProductDetail.userPrice}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>
        </div>

        <div className="flex gap-10 items-center justify-start">
          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="discount"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Discount (%):
            </label>
            <input
              id="discount"
              type="text"
              placeholder="Eg: 10ML, 20GM, etc..."
              name="discount"
              onChange={handleChange}
              value={newProductDetail.discount}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="gst"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              GST (%):
            </label>
            <input
              id="gst"
              type="text"
              placeholder="Eg: 5%, 12%, etc..."
              name="gst"
              onChange={handleChange}
              value={newProductDetail.gst}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="pack"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Pack:
            </label>
            <input
              id="pack"
              type="text"
              placeholder="Eg: 10ML, 20GM, etc..."
              name="pack"
              onChange={handleChange}
              value={newProductDetail.pack}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="batch"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              Batch:
            </label>
            <input
              id="batch"
              type="text"
              placeholder="Eg: 10ML, 20GM, etc..."
              name="batch"
              onChange={handleChange}
              value={newProductDetail.batch}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg italic">Other Details</h2>
        </div>

        <div className="flex gap-10 items-baseline justify-start">
          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="expiryDate"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit"
            >
              Expiry Date:
            </label>
            <input
              id="expiryDate"
              type="date"
              name="expiryDate"
              onChange={handleChange}
              value={newProductDetail.expiryDate}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[300px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="category"
              className="text-black text-md font-semibold ml-3 mb-1"
            >
              Select Category:
            </label>
            <FilterDropdown
              options={["Tablets", "Syrups", "Powders"]}
              onSelect={handleCategorySelect}
            />
          </div>
          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="manufacturer"
              className="text-black text-md font-semibold ml-3 mb-1"
            >
              Select Manufacturer:
            </label>
            <FilterDropdown
              options={["Alkem", "Biokem", "Solvis"]}
              onSelect={handleManufacturerSelect}
            />
          </div>

          <div className="input flex flex-col w-fit static">
            <label
              htmlFor="hsnCode"
              className="text-black text-md font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit "
            >
              HSN Code:
            </label>
            <input
              id="hsnCode"
              type="text"
              placeholder="Eg: XXXXXXXX"
              name="hsnCode"
              onChange={handleChange}
              className="border-gray-300 input px-[10px] py-[11px] text-md bg-white border-2 rounded-[5px] w-[490px] focus:outline-none placeholder:text-black/25 focus:border-red-500"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <button
            onClick={handleCancel}
            className="w-[350px] p-3 text-white  bg-red-600"
          >
            <div className="flex items-center gap-2 justify-center text-lg">
              Home <IoHomeOutline />
            </div>
          </button>
          <button
            onClick={handleCancel}
            className="w-[350px] p-3 text-white  bg-green-600"
          >
            <div className="flex items-center gap-2 justify-center text-lg">
              Submit <VscSaveAs />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
