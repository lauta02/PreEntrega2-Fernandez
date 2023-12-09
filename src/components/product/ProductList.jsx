import React from 'react';
import Product from './Product'; // Asegúrate de importar tu componente de producto

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          {/* ... Otro contenido del producto ... */}
          <button
            className="button button-add-to-cart"
            onClick={() => onAddToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;