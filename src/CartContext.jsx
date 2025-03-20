import React, { createContext, useState } from 'react';

// สร้าง Context สำหรับตะกร้า
const CartContext = createContext();

// สร้าง Provider สำหรับแชร์ข้อมูลตะกร้า
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
