import React from 'react';
import { useCart } from '../context/CartContext';

const FilterModal = ({ isOpen, onClose, uniqueBrands, onFilter }) => {
  const { cart } = useCart();

  // Verifica si uniqueBrands es undefined antes de intentar mapearlo
  const brandsToRender = uniqueBrands || [];

  return (
    <div className={`filter-modal ${isOpen ? 'open' : ''}`}>
      <div className="filter-modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2>Filtrar por Marca</h2>
        <ul>
          {brandsToRender.map((brand) => (
            <li key={brand}>
              <button onClick={() => onFilter(brand)}>{brand}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterModal;