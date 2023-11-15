import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/productdetails/ProductDetails';
import Navbar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import CartWidget from './components/cartwidget/CartWidget';
import Contacto from './components/contacto/Contacto';

const App = () => {
  // Ahora puedes usar useState
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Agrega una ruta para los detalles del producto */}
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
