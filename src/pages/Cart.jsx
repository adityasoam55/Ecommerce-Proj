import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalQty, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold mb-3">Order Summary</h3>

            <p className="text-gray-700 mb-1">Total Items: {totalQty}</p>
            <p className="text-gray-700 mb-3">
              Total Price: <span className="font-semibold">₹{totalPrice}</span>
            </p>

            <Link
              to="/checkout"
              className="bg-blue-600 text-white px-4 py-2 rounded block text-center mt-4"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
