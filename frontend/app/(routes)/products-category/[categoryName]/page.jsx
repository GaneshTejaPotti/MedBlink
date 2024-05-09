// import GlobalApi from '../../../../app/_utils/GlobalApi';
import React from 'react';
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '../../../_components/ProductList';

async function ProductCategory({ params }) {
//   const productList = await GlobalApi.getProductsByCategory(params.categoryName);
//   const categoryList = await GlobalApi.getCategoryList();
  return (
    <div className="mt-20">
      <h2 className="p-4 text-white bg-primary font-bold text-3xl text-center">
        {/* {params.categoryName}  */}
        category Name
      </h2>
      <TopCategoryList
    //    categoryList={categoryList} selectedCategoryName={params.categoryName}
     />
      <div className="p-5 md:p-10 ">
        <ProductList 
        // productList={productList} 
        />
        product-1
      </div>
    </div>
  );
}

export default ProductCategory;