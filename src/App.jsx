import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Product"
import Footer from "./assets/Component/Footer";
import Home from "./Home"; // นำเข้าหน้า Home
import Cart from "./Cart";



import "./index.css";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
