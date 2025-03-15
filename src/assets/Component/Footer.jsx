import React from "react";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* โลโก้ */}
        <div className="footer-logo">
          <img src="https://i.pinimg.com/736x/5d/37/6e/5d376e68aca3dea8cfd94b568099c191.jpg" alt="HOP CHAFE Logo" />
          <p>ชานมไข่มุก หอม อร่อย เคี้ยวหนึบ สดชื่นทุกแก้ว</p>
        </div>

        {/* เมนู */}
        <div className="footer-links">
          <a href="#">หน้าแรก</a>
          <a href="#">เมนู</a>
          <a href="#">โปรโมชั่น</a>
          <a href="#">ติดต่อเรา</a>
        </div>

        {/* ไอคอนโซเชียล */}
        <div className="footer-icons">
          <a href="https://www.facebook.com/HOPChafenpru"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLine /></a>
        </div>
      </div>
      <p className="footer-text">© 2025 HOP CHAFE. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
