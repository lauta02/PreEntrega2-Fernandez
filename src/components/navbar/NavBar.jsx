import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget.jsx';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/src/imagenes/vector logo2.png" alt="Logo de Autos Platinum" />
      </div>
      <div className="navbar-title">
        Autos Platinum
      </div>
      <div className="navbar-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/vehiculos">Vehículos</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          {/* Agrega más enlaces con el mismo formato si es necesario */}
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;