import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-3 border">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="px-2 py-1 border rounded"
        >
          -
        </button>

        <span className="font-semibold">{item.qty}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-600 font-semibold hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
