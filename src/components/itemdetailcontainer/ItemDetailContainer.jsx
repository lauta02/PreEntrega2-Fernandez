import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { CartContext } from '../context/CartContext';
import { data } from '../../data'; // Importa la fuente de datos
import '../styles/styles.css'; // Asegúrate de importar tu archivo de estilos

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error('Producto no encontrado');
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      {product ? (
        <div>
          <ItemDetail product={product} />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}

      <Link to="/">Volver al Catálogo</Link>
    </div>
  );
};

export default ItemDetailContainer;