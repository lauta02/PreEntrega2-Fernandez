import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    console.log(product); // Agrega esto para depurar
    setCart((prevCart) => [...prevCart, product]);
    setTotal((prevTotal) => prevTotal + parseFloat(product.price));
  };

  const removeFromCart = (productId) => {
    const removedProduct = cart.find((product) => product.id === productId);

    if (removedProduct) {
      setTotal((prevTotal) => prevTotal - parseFloat(removedProduct.price));
    }

    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const buy = () => {
    // Lógica para finalizar la compra (puedes ajustar según tus necesidades)
    console.log('Compra realizada. Gracias por tu compra!');
    clearCart(); // Limpiar el carrito después de la compra
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, clearCart, buy }}>
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