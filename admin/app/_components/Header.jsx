import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] z-50 bg-white shadow-md transition-all duration-300">
      <div className="px-5 py-3 flex justify-between items-center gap-10">
        <div>
          <Link href="/">
            <Image src="/logo.png" width={150} height={100} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-10">
          <Link
            href="/manage-requests"
            className="cursor-pointer hover:text-red-600 hover:scale-110 transition-all ease-in-out"
          >
            Manage Requests
          </Link>
          <Link
            href="/manage-products"
            className="cursor-pointer hover:text-red-600 hover:scale-110 transition-all ease-in-out"
          >
            Manage Products
          </Link>
        </div>
        <div className="flex justify-end flex-grow">
          <Link href="/login" className="hover:text-red-600">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
