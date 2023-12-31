import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget.jsx';
import { useCart } from '../context/CartContext';
import CartModal from '../cartmodal/CartModal';
import FilterModal from '../filtermodal/FilterModal'; // Agrega la importación

import './NavBar.css';

const NavBar = ({ allProducts, setFilteredProducts }) => {
  const { cart } = useCart();
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  const toggleFilterModal = () => {
    setFilterModalOpen(!isFilterModalOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../imagenes/logo.png" alt="Logo de Autos Platinum" />
      </div>
      <div className="navbar-title">Autos Platinum</div>
      <div className="navbar-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/vehiculos">Vehículos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
      <button onClick={toggleFilterModal}>Filtrar</button>
      <CartWidget onClick={toggleCartModal} />
      {isCartModalOpen && <CartModal onClose={toggleCartModal} />}
      {isFilterModalOpen && (
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={toggleFilterModal}
          uniqueBrands={allProducts.map(product => product.brand)}
          onFilter={(brand) => {
            const filteredProducts = allProducts.filter(product => product.brand === brand);
            setFilteredProducts(filteredProducts);
            toggleFilterModal();
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;