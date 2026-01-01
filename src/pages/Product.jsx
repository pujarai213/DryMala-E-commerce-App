import React from 'react'
import ProductCard from '../components/ProductCard'

const Product = () => {
  return (
    <div>
      <h2 className="flex justify-center text-5xl md:text-7xl font-garamond font-bold mt-16 mb-16">Shop Our Product</h2>
      <div className="flex justify-center gap-16">

      <ProductCard image="/apple.jpg" name="Dried Apple" price="1600" />{" "}
      <ProductCard image="/orange.png" name="Dried Orange" price="1500" />{" "}
      <ProductCard image="/meat.png" name="Dried Meat" price="2500" />{" "}
      <ProductCard image="/banana.png" name="Dried Banana" price="1200" />{" "}
      </div>
    </div>
  )
}

export default Product
