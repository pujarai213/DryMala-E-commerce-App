const ProductCard = ({ product }) => {
    if (!product) return null;

  return (
    <div>
      <div className="w-75 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="w-full h-99 object-cover" />
      </div>
      {/* Product Info */}
      <div className="p-4 font-montserrat">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        <p className="text-gray-600 mt-1 font-medium">Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
