import React from "react";
import ProductSection from "../components/ProductSection";

const Product = () => {
  return (
    <div className="mt-20 flex max-w-7xl mx-auto gap-5">
      <div className="w-[25%] bg-gray-100 p-6 rounded-xl mt-20">Filter</div>

      <div className="w-[75%]">
        <ProductSection
          heading="Products"
          layoutClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        />
      </div>
    </div>
  );
};

export default Product;
