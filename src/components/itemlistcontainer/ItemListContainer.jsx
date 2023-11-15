import React from 'react';
import { data } from '../../data';
import './ItemListContainer.css';

const ItemListContainer = () => ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...updatedProducts]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className='product-list-container'>
      {data.map((product) => (
        <div className='product-item' key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className='product-info'>
            <h2>{product.nameProduct}</h2>
            <p className='product-price'>$ {product.price}</p>
            <button onClick={() => onAddProduct(product)}>Agregar al Carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};


