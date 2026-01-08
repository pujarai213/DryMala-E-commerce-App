import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-80 border-t mt-25">
      <div className="max-w-7xl mx-auto px-6 py-12 flex justify-between gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">DryMala</h3>
          <p className="text-sm text-gray-500 mt-2">
            Naturally dehydrated foods
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/shop">Products</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-500 md:text-right">
          <p>© {new Date().getFullYear()} DryMala</p>
          <div className="flex md:justify-end gap-4 mt-2">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
