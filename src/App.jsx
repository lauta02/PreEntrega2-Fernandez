import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import Catalogo from './components/catalogo/Catalogo';
import Contacto from './components/contacto/Contacto';
import { CartProvider } from './components/context/CartContext';

const App = () => {
  const productData = [
    
  ];

  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer data={productData} />} />
          <Route path="/item/:id" element={<ItemDetailContainer data={productData} />} />
          <Route path="/category/:id" element={<ItemListContainer data={productData} />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;