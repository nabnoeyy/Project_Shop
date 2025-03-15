import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <header>
   
  
      
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      
    </header>
  );
};

export default Header;
