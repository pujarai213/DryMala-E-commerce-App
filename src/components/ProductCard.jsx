const ProductCard = ({ image, name, price }) => {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>

        <p className="text-gray-600 mt-1 font-medium">
          Rs. {price}
        </p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
