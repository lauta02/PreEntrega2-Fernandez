import React from 'react';
import Product from './Product'; 

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          {}
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