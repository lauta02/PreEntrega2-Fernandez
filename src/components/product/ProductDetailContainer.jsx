import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { addToCart } from '../context/CartContext';

const ProductDetailContainer = () => {
  const { id } = useParams();
  const product = data.find(p => p.id === parseInt(id, 10));

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.nameProduct,
      price: product.price,
      quantity: 1,
      details: product.description,
    };

    addToCart(productToAdd);
  };

  return (
    <div>
      {product ? (
        <>
          <ProductDetail product={product} />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailContainer;