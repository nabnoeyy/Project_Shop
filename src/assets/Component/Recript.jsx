import React from "react";
import { useCart } from "./CartContext";

const Receipt = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div>
      <h2>Receipt</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - Sweetness: {item.sweetness}, Toppings: {item.toppings.join(", ")}, Quantity: {item.quantity}, Price: {item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ฿ {calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Receipt;