import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const buy = () => {
    // Lógica para finalizar la compra (puedes ajustar según tus necesidades)
    console.log('Compra realizada. Gracias por tu compra!');
    clearCart(); // Limpiar el carrito después de la compra
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, buy }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};

export { CartContext, CartProvider, useCart };