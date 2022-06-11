import React, { useState } from 'react';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  const [page, setPage] = useState('homePage');

  return (
    <CustomThemeProvider>
      <ShoppingCartProvider>
        <button type="button" onClick={() => setPage('homePage')}>Home Page</button>
        <button type="button" onClick={() => setPage('cartPage')}>Cart Page</button>
        {page === 'homePage' ? <Home /> : <CartPage />}
      </ShoppingCartProvider>
    </CustomThemeProvider>
  );
}

export default App;