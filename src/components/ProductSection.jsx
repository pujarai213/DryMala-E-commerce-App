// import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductSection = ({
  heading,
  layoutClass = "",
  containerClass = "",
  limit,
  products 
}) => {
  //limit logic

  const displayProducts = limit ? products.slice(0, limit) : products;
  return (
    <div className={containerClass}>
      <h2 className="flex justify-center text-4xl md:text-5xl text-gray-700 font-montserrat leading-relaxed tracking-widest mt-16 mb-16">
        {heading}
      </h2>
      <div className={`gap-6 ${layoutClass}`}>
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
