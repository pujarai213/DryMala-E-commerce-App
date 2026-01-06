import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-7 py-7 flex items-center justify-between bg-white h-2 my-9 rounded-full">
        <div>
          <img src="/logo.png" alt="DryMala Logo" className="h-14 w-auto" />
        </div>
        <div className="flex gap-15 text-black font-montserrat">
          <Link to="/" className="hover:text-green-300 transition ">Home</Link>
          <Link to="/shop" className="hover:text-green-300 transition">Shop</Link>
          <Link to="/collection" className="hover:text-green-300 transition">Collection</Link>
        </div>
        <div>
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
