import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../../data';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error('Producto no encontrado');
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.nameProduct}</h2>
          <img src={product.img} alt={product.nameProduct} />
          <p>Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}

      <Link to="/">Volver al Catálogo</Link>
    </div>
  );
};

export default ItemDetailContainer;