import ProductCard from "./ProductCard";

const products = [
  { id: 1, image: "/apple.jpg", name: "Apple", price: "1600" },
  { id: 2, image: "/orange.png", name: "Orange", price: "1500" },
  { id: 3, image: "/meat.png", name: "Meat", price: "2500" },
  { id: 3, image: "/meat.png", name: "Meat", price: "2500" },
  { id: 4, image: "/banana.png", name: "Banana", price: "1200" },
  { id: 5, image: "/banana.png", name: "Banana", price: "1200" },
];

const ProductSection = ({
  heading,
  layoutClass = "",
  containerClass = "",
  limit,
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
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
