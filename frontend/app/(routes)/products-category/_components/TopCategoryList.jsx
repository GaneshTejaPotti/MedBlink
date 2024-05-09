import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

const TopCategoryList = ({ categoryList, selectedCategoryName }) => {
  return (
    <div>
      <div className="flex gap-5 mt-5 overflow-auto mx-5 md:mx-20 justify-center no-scrollbar">
        {/* {categoryList.map((category, index) => (
          <Link
            className={`flex flex-col items-center gap-2 bg-red-50 p-5 rounded group cursor-pointer hover:bg-red-200 w-[150px] min-w-[100px] ${
              selectedCategoryName == category.attributes.name &&
              ' bg-red-600 text-white hover:bg-red-600'
            }`}
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
            <h2
              className={`text-center text-red-800 ${
                selectedCategoryName == category.attributes.name && 'text-white'
              }`}
            >
              {category.attributes.name}
            </h2>
          </Link>
        ))} */}
        Top Categories List
      </div>
    </div>
  );
};

export default TopCategoryList;