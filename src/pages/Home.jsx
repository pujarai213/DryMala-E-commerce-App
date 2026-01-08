import Hero from "../components/Hero";
import products from "../data/products.js";

import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductSection
        heading="See What We Dry"
        limit={4}
        layoutClass="flex justify-center flex-nowrap overflow-x-auto px-6"
        containerClass="max-w-8xl mx-auto"
        products = {products}
        
      />
      
    </>
  );
};

export default Home;
