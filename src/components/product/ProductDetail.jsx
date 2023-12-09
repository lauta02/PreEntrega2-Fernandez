import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.nameProduct} />
      <h2>{product.nameProduct}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;