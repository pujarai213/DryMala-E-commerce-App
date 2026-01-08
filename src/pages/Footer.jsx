import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-80 border-t mt-25">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">DryMala</h3>
          <p className="text-sm text-gray-500 mt-2">
            Naturally dehydrated foods
          </p>
        </div>
        <div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>© {new Date().getFullYear()} DryMala</p>
          <div>
            <ul>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
