const ProductCard = ({ image, name, price }) => {
  return (
    <div>
      <div className="w-80 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
        {/* Product Image */}
        <img src={image} alt={name} className="w-full h-99 object-cover" />
      </div>
      {/* Product Info */}
      <div className="p-4 font-montserrat">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        <p className="text-gray-600 mt-1 font-medium">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
