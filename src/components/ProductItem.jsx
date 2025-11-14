import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-gray-600 font-medium mb-3">₹{product.price}</p>

      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
