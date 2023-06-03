import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Store from './components/Store/Store';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/shared/Navbar/Navbar';
import ShopCart from './components/ShopCart/ShopCart';

// Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

const App = () => {

  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;