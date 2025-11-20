import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const exist = cart.find((prod) => prod.id === item.id);
    if (exist) {
      exist.quantity += item.quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((acc, p) => acc + p.quantity, 0);
  const totalPrice = () =>
    cart.reduce((acc, p) => acc + p.quantity * p.precio, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
