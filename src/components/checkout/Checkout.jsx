import React, { useState } from 'react';
import '../checkout/Checkout.css';
import '../styles/styles.css';

const Checkout = ({ onPurchaseComplete }) => {
  const [isPurchaseComplete, setPurchaseComplete] = useState(false);

  const handlePurchaseComplete = () => {
    setPurchaseComplete(true);
    onPurchaseComplete();
  };

  return (
    <div className="overlay">
      <div className="checkout-modal">
        {!isPurchaseComplete ? (
          <>
            <h2>Finalizar Compra</h2>
            {}
            <form>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="address">Dirección de Envío:</label>
              <textarea id="address" name="address" required></textarea>
              <button type="button" className="button button-secondary" onClick={onPurchaseComplete}>
                Cancelar
              </button>
              <button type="button" className="button button-primary" onClick={handlePurchaseComplete}>
                Comprar
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>¡Compra Exitosa!</h2>
            <p>¡Gracias por tu compra! Hemos recibido tu pedido.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;