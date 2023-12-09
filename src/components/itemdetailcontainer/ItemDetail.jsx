import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.nameProduct} />
      <h2>{product.nameProduct}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;