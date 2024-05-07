'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

// import GlobalApi from '../_utils/GlobalApi';

function Header() {
  // const [categoryList, setCategoryList] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // useEffect(() => {
  //   getCategoryList();
  // }, []);

  // const getCategoryList = () => {
  //   GlobalApi.getCategory().then((resp) => {
  //     setCategoryList(resp.data.data);
  //   });
  // };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] z-50 bg-white shadow-md transition-all duration-300">
      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex gap-8">
          <Link href="/">
            <Image src="/logo.png" width={150} height={100} alt="logo" />
          </Link>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h2
                  className="hidden md:flex items-center gap-2 border rounded-full p-2 px-10 bg-red-50 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <LayoutGrid className="h-5 w-5" />
                  Category
                </h2>
              </DropdownMenuTrigger>
              {isDropdownOpen && (
                <DropdownMenuContent>
                  <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {/* {categoryList.map((category, index) => (
                    <DropdownMenuItem key={index} onClick={handleDropdownItemClick}>
                      <Link
                        href={'/products-category/' + category.attributes.name}
                        className="flex flex-row justify-center"
                      >
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                            category?.attributes?.icon?.data?.attributes?.url
                          }
                          unoptimized={true}
                          alt="icon"
                          height={27}
                          width={27}
                        />
                        <p className="mx-2 text-lg">{category?.attributes?.name}</p>
                      </Link>
                    </DropdownMenuItem>
                  ))} */}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </div>
          <div className="hidden md:flex items-center gap-3 border rounded-full p-2 px-5">
            <Search />
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <h2 className="flex items-center gap-2 text-lg">
            <ShoppingBag className="h-5 w-5 gap-2 text-lg" /> 0
          </h2>
          <div className="flex flex-row gap-2">
            <Link
              href="/login"
              className="cursor-pointer hover:text-red-600 hover:scale-110 transition-all ease-in-out"
            >
              Login
            </Link>
            <h2>|</h2>
            <Link
              href="/sign-up"
              className="cursor-pointer hover:text-red-600 hover:scale-110 transition-all ease-in-out"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
