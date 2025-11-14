import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  // Calculate discounted price
  const discount = product.discountPercentage || 0;
  const finalPrice = (product.price * (1 - discount / 100)).toFixed(2);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-xl shadow-sm p-4 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            {discount}% OFF
          </div>
        )}

        {/* Product Image */}
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded-lg overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.title}
        </h3>

        {/* Price section */}
        <div className="mb-3 flex items-center gap-3">
          <p className="text-xl font-bold text-gray-900">₹{finalPrice}</p>

          {discount > 0 && (
            <p className="text-sm text-gray-400 line-through">
              ₹{product.price}
            </p>
          )}
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductItem;
