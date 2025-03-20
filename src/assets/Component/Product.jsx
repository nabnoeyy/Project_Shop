import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/Store"; // ✅ ใช้ Zustand 

const products = [

  { id: 2, name: "ชาเขียวนม", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b899e0b8a1-13.png", menuid: 2 },
  { id: 3, name: "มะพร้าวน้ำหอมนมชาไทย",price: 35, image: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/481272340_1042852204529810_2624159658094715279_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMFX4I1WNVKv2KoBPVDGH8ZhcLGKE3JEVmFwsYoTckRajdsyPXGfb7CDnCp72nErCcW5v1OHRfMWuP_Douo2ll&_nc_ohc=N9jGq-i_fIYQ7kNvgGcDvZZ&_nc_oc=AdkqJXbH7Y_OArYcbQr3s1N-T-VzKgGhYasSAf_hxMyuLnZjsI1hcS2fDcuM_05Bj-TkbP2qoLMBz_mjY4oL6Yy3&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=eY0t_qxzBzi2XzDBRCIU0Q&oh=00_AYG1ybr3atMjz08rA_Rc_QdjdKCha_Pyv9MW1Q_CJ6sF1w&oe=67E20F9D", menuid: 2 },
  { id: 3, name: "ชาไทย", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b984e0b897e0b8a2-13.png", menuid: 2 },
  { id: 4, name: "ชาโกโก้", description: "", price: 25, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b982e0b881e0b982e0b881e0b989-13.png", menuid: 2 },
  { id: 5, name: "ชานมไต้หวัน", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b899e0b8a1e0b984e0b895e0b989e0b8abe0b8a7e0b8b1e0b899-13.png", menuid: 2 },
  { id: 6, name: "ชาเนสที", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b899e0b8aae0b897e0b8b5-13.png", menuid: 2 },
  { id: 7, name: "ชามะนาว", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b8a1e0b8b0e0b899e0b8b2e0b8a7-13.png", menuid: 2 },
  { id: 8, name: "ชาดำ", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b894e0b8b3-13.png", menuid: 2 },
  { id: 9, name: "ชาเขียวใส", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b983e0b8aa-13.png", menuid: 2 },
  { id: 10, name: "ชาเขียวน้ำผึ้งมะนาว", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b899e0b989e0b8b3e0b89ce0b8b6e0b989e0b887e0b8a1e0b8b0e0b899e0b8b2e0b8a7-13.png", menuid: 2 },
  { id: 11, name: "ชาเขียวมะนาว", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b8a1e0b8b0e0b899e0b8b2e0b8a7-13.png", menuid: 2 },
  { id: 12, name: "มะนาวโซดา",  price: 20, image: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/472713853_1003328651815499_952268243015020466_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFtdR1bJatvS-Fti6-gT_DTtUTcHTXSLHK1RNwdNdIschN5F4MslVriMZ2EFZjVr3GmB9DnG5pDTdXID_BNf04c&_nc_ohc=d9yCJkLAwgMQ7kNvgHjX1KJ&_nc_oc=Adkuixrqf2Gfe0kQaZ1Vvd29WAkYpY7rUQ77EBJOX7VTsQx78JUNlVBZAcsAipskwmsC-K-bzGiTo_sh3vgeorQM&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=UKQ_ZNL3G5etk2iL79pVfQ&oh=00_AYF5llHfrIMSYZzrzw2pPrI8aO3nfogSBUdZ3iZqqpyHMg&oe=67E21713", menuid: 1 },
  { id: 11, name: "เสาวรสโซดา",  price: 20, image: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/480685184_1035293908618973_1819902830497469556_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGdeMM2cc3n2HkORxb2Zk25BJc_7Bo9TUwElz_sGj1NTF82YecpLWM-9lB5HWvwSlYQGkhJEzLr69XwHXOSCJxG&_nc_ohc=z113zgGEOUQQ7kNvgE2Cxd3&_nc_oc=AdmkxHysQAj2YfV0q66qv2L15RDY-5pt1i5V-qUktx4q9Xn0LzBdd6D6rvcbkNY-aQTmrdRBOCXcPhMCX2mUTe94&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=D8VyiGLSakTCAOca3fWFfQ&oh=00_AYEb8Z8PXCLApdpIsTkLKEsY1SKOop_pfCY6NUfmLX_2QQ&oe=67E1F5FC", menuid: 1 },
  { id: 11, name: "ลิ้นจี่โซดา",  price: 20, image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/470204875_986632863485078_9087179327670486257_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHB1Fp4Tc0XfG9IqntbGWzRK39y0Dhjkdsrf3LQOGOR2_3D4blvQFo9iztKbhigZQp0lP3yxQe3p9r8P5p7L4Tv&_nc_ohc=zmTFlVEF06gQ7kNvgGs7Bd4&_nc_oc=AdlcINDsvOHa6S5RoIXb7eDiMo2wsayvE0Vv8dFCpfwNTJs_UN8hfNpR_c3Y2d9xwtcyqNGgUNwHv43frvq2_9bW&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=_EbskTbY_r4ZcUpi_Io24A&oh=00_AYG0nqsJIYevgzCFxpijmpJQmUHSES4cFkzBtG07KlEIyQ&oe=67E1F793", menuid: 1 },
  { id: 11, name: "สตอเบอร์รี่โซดา",  price: 20, image: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/473192505_1007516088063422_3931868220061191488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1i6NXG1VRVagUYXP1gEw3QZsb65m8N91Bmxvrmbw33dOc_5b1D6TtZJy1euw1Nob6P9d0e5X0dltYfauHTMjr&_nc_ohc=rQc0ltJdFnkQ7kNvgF2z1Uy&_nc_oc=Admx-QhEG6VbUHBcWHoVi5SkBStoycBq1We1PBYcgDQ1Mhu-O6jHSsayP17DAyPGYsqcQMQyMFlJAwJxQhnT-Kxv&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=J7Ne579_qyKtakEintTKgA&oh=00_AYH_HcJaLtGT8ncOmuTARraiUMriT410_1Gzyq4S4LSyJg&oe=67E205C7", menuid: 1 },
  { id: 11, name: "สตอเบอร์รี่ชีสเค้ก",  price: 25, image: "https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/484096650_1050765927071771_1530246862348259896_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcpOvxyEXa1E10kJvdfa49_AxDu_dphBr8DEO792mEGvQQI9YAAahpBkCD9Wtzt44qEpwa8C2OJMGuu5kVr813&_nc_ohc=J7TOgvhPj2QQ7kNvgEXX8z1&_nc_oc=AdmPRqfGN0m_DHkozcMh1LOXxLgcgKr2hlDz9ExYr2KvvNRCLl9yQ5GZY2nSfjjKjhtLFu6bWAm5Eyokis4CwgoQ&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=Q9z4lHjQOUCJxY_KlcrE3g&oh=00_AYE3d3K2Uwj2ATLVf6tfozLSVpvrLwRz4PCsjFi3K-GZlQ&oe=67E21FC2", menuid: 3 },
  { id: 11, name: "นมสดบราวน์ชูก้า",  price: 20, image: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/474081521_1009775981170766_4129808273638990825_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGEHNM3y9vdhwEI1JghvXj-Zk9M5Tu6wVxmT0zlO7rBXDdoxj10t01Ok2_dWLtyPfWmzCbQkYAYGHVQasKxKzKq&_nc_ohc=3VVCMG4CV3cQ7kNvgH6weg-&_nc_oc=AdnXRPodYlRSUGROfzZ-KvkuSmmoM-KQk8qWpkjLgnihpSc_UF88FZogHsgiKA3y-bGfeqKqER41NldmUp5CpE6p&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=NVIQ08mLOOHIQoFqoonh_g&oh=00_AYGB7_MEgE2kFDaqrD2iwYamsHoLkW1whmbIIjD137tLXQ&oe=67E209BF", menuid: 4 },
  { id: 11, name: "นมเหนียวโกโก้",  price: 40, image: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/481928578_1046555580826139_2338003435032401627_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEQpFd9qeaaC-5o8JuSkfM2gt2UmRBC-vSC3ZSZEEL69B1RPeyVra_BuIb-w-CfZfQqccmAqTTJqqmqHsh45LHk&_nc_ohc=dYsmW1yUpCMQ7kNvgHmIsMH&_nc_oc=AdlTK-7PqlBrOP-3UG4faF2eWY2IJeZRLcFPy_8vqLzyRxetkni0eN8sm61BRyBAJlKGorbx-DwR2dzBFQnD2TcT&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=ANCpqUJodG9lYtSrsDMv5A&oh=00_AYEDZx4kPFFsQFqVT6TbFNrgUNZadsZSm1EHsZ1grH7RpA&oe=67E1F689", menuid: 4 },
];


const toppings = [{ name: "บุก", price: 10 }, { name: "เฉาก๊วย", price: 5 }, { name: "วิปครีม", price: 15 },{ name: "ชีส", price: 15 }];
const sweetnessLevels = ["ไม่หวาน", "หวานน้อย", "ปกติ", "หวานมาก"];

const Product = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sweetness, setSweetness] = useState("ปกติ");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ ดึงฟังก์ชัน addToCart จาก Zustand
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const filteredProducts = products.filter((item) => item.menuid === parseInt(id));
    setProductList(filteredProducts);
  }, [id]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSweetness("ปกติ");
    setSelectedToppings([]);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  const calculateTotal = () => {
    const toppingCost = selectedToppings.reduce((sum, topping) => {
      const toppingData = toppings.find((t) => t.name === topping);
      return sum + (toppingData ? toppingData.price : 0);
    }, 0);
  
    
    return (selectedProduct?.price + toppingCost) * quantity;
  };

  const handleAddToCart = () => {
    const total = calculateTotal();
    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      price: selectedProduct.price,
      sweetness,
      selectedToppings,
      quantity,
      total,
    };

    // ✅ ใช้ Zustand เพิ่มสินค้าไปยังตะกร้า
    addToCart(cartItem);
    console.log("Cart updated:", useCartStore.getState().cart);

    closeModal();
  };

  return (
    <section className="product-container">
      <h2>Menu</h2>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-footer">
              <span className="price">฿ {product.price}</span>
              <button className="cart-button" onClick={() => openModal(product)}>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
            <h2>HOP CHAFE {selectedProduct.name}</h2>

            <div>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">ระดับความหวาน</legend>
  <select value={sweetness} onChange={(e) => setSweetness(e.target.value)} className="select">
    {sweetnessLevels.map((level) => (
      <option key={level} value={level}>
        {level}
      </option>
    ))}
  </select>
  <span className="fieldset-label"></span>
</fieldset>

  {/* เลือกท็อปปิ้ง */}
  <fieldset className="fieldset">
    <legend className="fieldset-legend">เลือกท็อปปิ้ง</legend>
    <select
      defaultValue=""
      className="select"
      onChange={(e) => setSelectedToppings([...selectedToppings, e.target.value])}
    >
      <option value="" disabled>
        กรุณาเลือกท็อปปิ้ง
      </option>
      {toppings.map((topping) => (
        <option key={topping.name} value={topping.name}>
          {topping.name} (+฿{topping.price})
        </option>
      ))}
    </select>
    <span className="fieldset-label"></span>
  </fieldset>



 {/* จำนวน */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">จำนวน</legend>
  <div className="quantity-controls">
    <button 
      onClick={() => setQuantity(Math.max(1, quantity - 1))} 
      className="btn btn-sm"
    >
      -
    </button>
    <span className="quantity-display">{quantity}</span>
    <button 
      onClick={() => setQuantity(quantity + 1)} 
      className="btn btn-sm"
    >
      +
    </button>
  </div>
  <span className="fieldset-label"></span>
</fieldset>

</div>

              <h3>ราคารวม: ฿ {calculateTotal()}</h3>

              <button className="confirm-button" onClick={handleAddToCart}>เพิ่มลงตะกร้า</button>
              <button className="close-button" onClick={closeModal}>ปิด</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
