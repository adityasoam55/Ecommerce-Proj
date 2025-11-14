import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalQty, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE — ITEMS */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* RIGHT SIDE — ORDER SUMMARY */}
          <div className="bg-white shadow-lg rounded-xl p-6 border sticky top-24 h-fit">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>

            <div className="border-t pt-4 space-y-2">
              <p className="flex justify-between text-gray-700">
                <span>Total Items:</span> <span>{totalQty}</span>
              </p>

              <p className="flex justify-between text-gray-800 text-lg font-semibold">
                <span>Total Price:</span> <span>₹{totalPrice.toFixed(2)}</span>
              </p>
            </div>

            <Link
              to="/checkout"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg block text-center transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
