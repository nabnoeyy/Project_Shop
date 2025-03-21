import React, { useEffect } from "react";
import { useCartStore } from "../../store/Store"; // ✅ ใช้ Zustand 
import { jsPDF } from "jspdf"; // นำเข้า jsPDF

const CartComponent = () => {
  const { cart } = useCartStore();  // เข้าถึงข้อมูลจาก Zustand store

  // ใช้ useEffect เพื่อติดตามการเปลี่ยนแปลงใน cart
  useEffect(() => {
    console.log("Cart state ใน CartComponent:", cart);
  }, [cart]);  // ทำงานทุกครั้งที่ cart เปลี่ยนแปลง

  const calculateTotal = () =>
    cart.reduce((sum, item) => sum + (item.total || 0), 0);

  const handlePrint = () => {
    window.print();
  };

  // ฟังก์ชันสำหรับสร้าง PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("ตะกร้าสินค้า", 14, 16); // ตั้งชื่อในหัว PDF
    doc.text(`ยอดรวม: ฿ ${calculateTotal()}`, 14, 20); // แสดงยอดรวม

    let y = 30; // เริ่มที่ตำแหน่ง y สำหรับข้อมูลในตาราง

    // เพิ่มตารางข้อมูลสินค้า
    cart.forEach(item => {
      doc.text(`สินค้า: ${item.name}`, 14, y);
      doc.text(`ระดับความหวาน: ${item.sweetness}`, 100, y);
      doc.text(`ท็อปปิ้ง: ${item.selectedToppings.join(", ")}`, 14, y + 10);
      doc.text(`จำนวน: ${item.quantity}`, 100, y + 10);
      doc.text(`ราคารวม: ฿ ${item.total}`, 14, y + 20);
      y += 30; // ปรับตำแหน่ง y สำหรับรายการถัดไป
    });

   
  };

  return (
    <div className="cart-container">
      <h2>ตะกร้าสินค้า</h2>
      {cart.length === 0 ? (
        <p>ตะกร้าของคุณว่าง</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>สินค้า</th>
                <th>ระดับความหวาน</th>
                <th>ท็อปปิ้ง</th>
                <th>จำนวน</th>
                <th>ราคารวม</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.sweetness}</td>
                  <td>{item.selectedToppings.join(", ")}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>ยอดรวม:  {calculateTotal()} บาท</h3>
          <button1 onClick={handlePrint}>ปริ้น PDF</button1> 
        </div>
      )}
    </div>
  );
};

export default CartComponent;
