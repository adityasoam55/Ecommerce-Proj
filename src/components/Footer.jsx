import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">ShopEase</h2>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for premium products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <Link to="/">
                <li className="hover:text-white cursor-pointer">Home</li>
              </Link>
              <Link to="about">
                <li className="hover:text-white cursor-pointer">About</li>
              </Link>
              <Link to="/cart">
                <li className="hover:text-white cursor-pointer">Cart</li>
              </Link>
              <Link to="/checkout">
                <li className="hover:text-white cursor-pointer">Checkout</li>
              </Link>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Shipping Info</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Policies
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe for special offers & updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-l bg-gray-800 text-gray-300 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r text-white hover:bg-blue-700">
                Join
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ShopEase — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
