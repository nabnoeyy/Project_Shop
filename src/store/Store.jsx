import { create } from "zustand"; 
const useCartStore = create((set) => ({
    cart: [],
    addToCart: (item) =>
      set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id);
        if (existingItem) {
          return {
            cart: state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity, total: i.total + item.total } : i
            ),
          };
        } else {
          return { cart: [...state.cart, item] };
        }
      }),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    clearCart: () => set({ cart: [] }),
  }));
  
  export { useCartStore };
  