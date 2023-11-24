import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget.jsx';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../imagenes/logo.png" alt="Logo de Autos Platinum" />
      </div>
      <div className="navbar-title">
        Autos Platinum
      </div>
      <div className="navbar-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/vehiculos">Vehículos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;