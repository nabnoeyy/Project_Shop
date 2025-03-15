import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      {/* ปุ่ม Toggle Icon */}
      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* แถบเมนู */}
      {isOpen && (
        <div className="menu-items">
          <a href="#">หน้าหลัก</a>
          <a href="#">เกี่ยวกับเรา</a>
          <a href="#">บริการ</a>
          <a href="#">ติดต่อ</a>
        </div>
      )}

      {/* เพิ่มเติม: พื้นหลังทึบเมื่อเมนูเปิด */}
      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
}