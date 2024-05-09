import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="text-red-600 font-bold text-2xl">Shop by Category</h2>
      <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lh:grid-cols-8 gap-5 ">
        <Link className='flex flex-col items-center gap-2 bg-red-50 p-5 rounded group cursor-pointer hover:bg-red-200'
        href=''>
            <Image
              src='/logo.png'
              width={50}
              height={50}
              alt="icon"
              className="group-hover:scale-125 transition-all ease-in-out"
            />
        </Link>

        <Link className='flex flex-col items-center gap-2 bg-red-50 p-5 rounded group cursor-pointer hover:bg-red-200'
        href=''>
            <Image
              src='/logo.png'
              width={50}
              height={50}
              alt="icon"
              className="group-hover:scale-125 transition-all ease-in-out"
            />
        </Link>
        {/* {categoryList.map((category, index) => (
          <Link
            className="flex flex-col items-center gap-2 bg-red-50 p-5 rounded group cursor-pointer hover:bg-red-200"
            href={'/products-category/' + category.attributes.name}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                category.attributes.icon.data.attributes.url
              }
              width={50}
              height={50}
              alt="icon"
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className="text-center text-red-800">{category.attributes.name}</h2>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default CategoryList;