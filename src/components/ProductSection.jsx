import ProductCard from "./ProductCard";

const ProductSection = ({ heading }) => {
  return (
    <div>
      <h2 className="flex justify-center text-4xl md:text-5xl text-gray-700 font-montserrat leading-relaxed tracking-widest mt-16 mb-16">
        {heading}
      </h2>
      <div className="flex justify-center gap-6">
        <ProductCard image="/apple.jpg" name="Apple" price="1600" />{" "}
        <ProductCard image="/orange.png" name="Orange" price="1500" />{" "}
        <ProductCard image="/meat.png" name="Meat" price="2500" />{" "}
        <ProductCard image="/banana.png" name="Banana" price="1200" />{" "}
      </div>
    </div>
  );
};

export default ProductSection;
