import React from 'react';
// import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="text-red-600 font-bold text-2xl text-center">Our Popular Products</h2>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* {productList.map(
            (product, index) =>
              index < 8 && (
                <div>
                  <ProductItem product={product} />
                </div>
              ),
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;