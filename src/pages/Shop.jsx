import { useState } from "react";
import ProductSection from "../components/ProductSection";
import products from "../data/products.js";

const Shop = () => {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  // 🔹 Filter logic
  let filteredProducts = [...products];

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="mt-20 flex max-w-7xl mx-auto gap-5">
      {/* FILTER PANEL */}
      <div className="w-[25%] h-130 bg-gray-100 p-6 rounded-xl mt-20 space-y-6">
        {/* CATEGORY FILTER */}
        <div>
          <h3 className="font-semibold mb-2">Category</h3>

          <select
            className="w-full p-2 rounded border"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="fruits">Fruits</option>
            <option value="meat">Meat</option>
          </select>
        </div>

        {/* PRICE FILTER */}
        <div>
          <h3 className="font-semibold mb-2">Sort by Price</h3>

          <select
            className="w-full p-2 rounded border"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="w-[75%]">
        <ProductSection
          heading="Products"
          products={filteredProducts}
          layoutClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        />
      </div>
    </div>
  );
};

export default Shop;
