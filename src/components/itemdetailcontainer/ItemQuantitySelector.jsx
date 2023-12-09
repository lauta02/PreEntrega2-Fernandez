import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemQuantitySelector = ({ product }) => {
  const { updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div>
      <label>Cantidad:</label>
      <input
        type="number"
        min="1"
        value={product.quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default ItemQuantitySelector;