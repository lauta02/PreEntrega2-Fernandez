// Contacto.jsx
import React from 'react';

const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>Podes ponerte en contacto con nosotros a través de:</p>
      <ul>
        <li>Email: contacto@autosplatinum.com</li>
        <li>Teléfono: +123456789</li>
      </ul>
      <div>
        <img
          src="./src/imagenes/asesores.jpg" 
          alt="Descripción de la imagen"
          style={{ maxWidth: '40%', height: 'auto' }}
        />
      </div>
    </div>
  );
}

export default Contacto;