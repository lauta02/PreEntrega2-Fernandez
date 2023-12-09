import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import './CartModal.css';

const CartModal = ({ isOpen, onClose }) => {
  const { cart } = useCart();

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
      <div className="cart-modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;