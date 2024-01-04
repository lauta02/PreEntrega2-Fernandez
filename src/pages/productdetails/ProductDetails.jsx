import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data';

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>{product.nameProduct}</h2>
      <img src={product.img} alt={product.nameProduct} />
      <p>Precio: $ {product.price}</p>
    </div>
  );
};

export default ProductDetails;
