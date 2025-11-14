import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // slice uses cartItems, not items
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    // Empty cart
    dispatch(clearCart());

    // Redirect after 2 sec
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {orderPlaced && (
        <p className="bg-green-100 text-green-700 p-3 rounded mb-4">
          🎉 Order placed successfully! Redirecting to Home...
        </p>
      )}

      <form onSubmit={handlePlaceOrder} className="space-y-4">
        {/* User Details */}
        <span className="flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border p-2 rounded"
          />
        </span>

        <textarea
          placeholder="Shipping Address"
          required
          className="w-full border p-2 rounded"
          rows={2}
        ></textarea>
        <span className="flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            placeholder="City"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="State"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Pincode"
            required
            className="w-full border p-2 rounded"
          />
        </span>

        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in cart.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-2">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))
          )}

          <p className="font-bold mt-3">Total: ₹{totalAmount}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
