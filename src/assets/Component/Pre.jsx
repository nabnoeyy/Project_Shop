import React from "react";

import { FaShoppingCart, FaClock, FaBox, FaCoffee } from "react-icons/fa";

const Pre = () => {
  return (
    <section className="pre-container">
      <div className="pre-content">
        <h1>HOP CHAFE</h1>
        <p>พบกับชานมไข่มุกที่สมบูรณ์แบบได้ทุกช่วงเวลา
        กับ Hop Chafe คุณจะได้รับชานมไข่มุกสดใหม่ ไม่ว่าคุณจะอยู่ที่ไหนก็ตาม</p>

        <div className="pre-features">
          <div className="feature">
            <FaShoppingCart className="icon cart" />
            <span>สั่งซื้อง่าย & ปลอดภัย</span>
          </div>
          <div className="feature">
            <FaClock className="icon clock" />
            <span>จัดส่งรวดเร็ว & ติดตามสถานะได้</span>
          </div>
          <div className="feature">
            <FaBox className="icon box" />
            <span> บรรจุภัณฑ์ป้องกันการหก</span>
          </div>
          <div className="feature">
            <FaCoffee className="icon coffee" />
            <span> ชานมถึงมือคุณสดชื่นทุกแก้ว</span>
          </div>
        </div>
      </div>

      <div className="pre-image">
        <img src="https://hopchafe.co.th/wp-content/uploads/2025/01/logo_hop-01.png" alt="Coffee Cup" />
      </div>
      
    </section>
    
  );
};

export default Pre;
