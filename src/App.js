import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import LoginForm from './component/LoginForm';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import RegisterForm from './component/RegisterForm';
import OTPVerify from './component/OTPVerify';
import LoginRegister from './component/LoginRegister';

const App = () => {
  const [cartCount, setCartCount] = useState(0); // Manage cart count state

  return (
    <div className="App">
      {/* Render Navbar once and pass cartCount as prop */}
      <Navbar cartCount={cartCount} />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cartCount={cartCount} setCartCount={setCartCount} />} /> {/* Pass cartCount and setCartCount */}
        <Route path="/product/:id" element={<Product cartCount={cartCount} setCartCount={setCartCount} />} /> {/* Pass cartCount and setCartCount */}
        <Route path="/cart" element={<Cart cartCount={cartCount} setCartCount={setCartCount} />} /> {/* Pass cartCount and setCartCount */}
        <Route path="/about" element={<About />} /> {/* Fixed path */}
        <Route path="/contact" element={<Contact />} /> {/* Fixed path */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/login-register" element={<LoginRegister/>} />
      </Routes>
    </div>
  );
};

export default App;
