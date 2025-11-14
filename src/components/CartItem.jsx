import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow-md border p-5">
      {/* LEFT — IMAGE + INFO */}
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-20 h-20 object-contain"
          />
        </div>

        <div>
          <h3 className="font-bold text-xl">{item.title}</h3>
          <p className="text-gray-600 font-medium">₹{item.price}</p>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg font-medium text-sm transition"
          >
            Remove
          </button>
        </div>
      </div>

      {/* RIGHT — QTY CONTROLS */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="w-9 h-9 flex items-center justify-center text-lg border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          –
        </button>

        <span className="font-semibold text-lg">{item.qty}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="w-9 h-9 flex items-center justify-center text-lg border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
