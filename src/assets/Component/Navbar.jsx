import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://hopchafe.co.th/wp-content/uploads/2025/01/logo_hop-01.png"
          alt="Hop Chafe"
        />
        <span>
          <Link to="/">HOP CHAFE</Link>
        </span>
      </div>
      <div className="navbar-right">
        <div className="navbar-location">
          <span>
            <Link to="/menu">เมนู</Link>
          </span>
        </div>
        <div className="navbar-cart">
          <Link to="/cart"> {/* แก้ไขตรงนี้ */}
            <FaShoppingCart className="icon" />
            <span className="cart-badge"></span>
          </Link>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;