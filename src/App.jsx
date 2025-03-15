import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HopCoffee from "./assets/Component/HopCoffee";
import Header from "./assets/Component/Header";
import Product from "./Product"
import ProductSlider from "./assets/Component/ProductSlider";
import Footer from "./assets/Component/Footer";
import Contact from "./Contact"; // นำเข้าหน้า Contact
import About from "./About"; // นำเข้าหน้า About
import Cart from "./Cart"; // นำเข้าหน้า Cart
import Home from "./Home"; // นำเข้าหน้า Home

import "./index.css";

function App() {
  return (
    <Router>
     <HopCoffee/>
      <Header />
      <ProductSlider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
