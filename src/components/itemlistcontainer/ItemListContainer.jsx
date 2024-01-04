import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { data } from '../../data';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal } = useContext(CartContext);
  const [selectedBrand, setSelectedBrand] = useState('Todas');
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  const onAddProduct = (product) => {
    
  };

  const filterByBrand = (brand) => {
    setSelectedBrand(brand);
    closeFilterMenu();
  };

  const closeFilterMenu = () => {
    setIsFilterMenuVisible(false);
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  const filteredData = selectedBrand !== 'Todas' ? data.filter((product) => product.brand === selectedBrand) : data;

  return (
    <div className="product-list-container">
      <div className="filter-navbar">
        <button onClick={toggleFilterMenu}>Filtrar</button>
        {isFilterMenuVisible && (
          <ul className="filter-dropdown">
            <li onClick={() => filterByBrand('Todas')}>Todas</li>
            <li onClick={() => filterByBrand('FORD')}>FORD</li>
            <li onClick={() => filterByBrand('HONDA')}>HONDA</li>
            <li onClick={() => filterByBrand('NISSAN')}>NISSAN</li>
            <li onClick={() => filterByBrand('MAZDA')}>MAZDA</li>
            <li onClick={() => filterByBrand('HYUNDAI')}>HYUNDAI</li>
            <li onClick={() => filterByBrand('KIA')}>KIA</li>
          </ul>
        )}
      </div>
      <div className="product-list">
        {filteredData.map((product) => (
          <div className="product-item" key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className="product-info">
              <h2>{product.nameProduct}</h2>
              <p className="product-price">$ {product.price}</p>
              <Link to={`/item/${product.id}`}>Ver más</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;