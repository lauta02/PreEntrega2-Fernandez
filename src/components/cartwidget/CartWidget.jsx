import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Checkout from '../checkout/Checkout';
import { useCart } from '../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart, removeFromCart } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handlePurchaseClick = () => {
    setCheckoutOpen(true);
  };

  const handlePurchaseComplete = () => {
    setCheckoutOpen(false);
  };

  return (
    <div className="cart-widget">
      <div className="cart-icon" onClick={handleDropdownToggle}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
      </div>
      {isDropdownOpen && (
        <div className="cart-dropdown">
          {cart.length > 0 ? (
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong> - Precio: ${product.price} - Cantidad: {product.quantity}
                  <button className="button button-remove-from-cart" onClick={() => handleRemoveFromCart(product.id)}>
                    Eliminar del carrito
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
          <button className="button button-checkout" onClick={handlePurchaseClick}>
            Comprar
          </button>
        </div>
      )}

      {isCheckoutOpen && (
        <Checkout onPurchaseComplete={handlePurchaseComplete} />
      )}
    </div>
  );
};

export default CartWidget;