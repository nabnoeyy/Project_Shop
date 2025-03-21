import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

// รายการเมนูสินค้า
const menuItems = [
  {
    id: 1,
    name: "เมนูโซดาาาาา",
    description: "",
    image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/481151018_614565994665178_7851607720705465548_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF16V3DxgVuffRl5LAbUJFdMWkwKiBFk4MxaTAqIEWTg7nEb1Y5L931eiF81DUmhbz92H1joRfWENvRz7qK4xPj&_nc_ohc=wcgrMT0UM2QQ7kNvgGyf5il&_nc_oc=AdnWOIO8CuImpSvUk02cpoIisFvv5fBK9NiyggPP2oNA0ge4RsSPBAhd-1OB3p_uesFvWm00xHAnYv-hbuUY_chk&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=jR4Xsy61xq4ACBl0RCYCEA&oh=00_AYHvryiCdmjH4gZ_ZBbmJu3wRNI94qe93zWXPAi4sWWThw&oe=67E0B9C8", // เปลี่ยนเป็น URL จริง
  },
  {
    id: 2,
    name: "เมนูชา และ โนมมม",
    description: "",
    image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b984e0b897e0b8a2-13.png",
  },
  {
    id: 3,
    name: "ชาชีสสส",
    description: "",
    image: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/484988139_627642263357551_4101480457320959377_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFcDi1lPZRw_To-c551aivgCChWbJS7TLgIKFZslLtMuARVD_CkpGYhD1THkBlda5zrwM2RJkLIrwi9X7ex1O_f&_nc_ohc=4lFfsZlEijMQ7kNvgEWx-rA&_nc_oc=Adlfwm3ULO-X29dQM_7ZoAjnVUY7dXCDuDoscZgWhhl1LOW7hUa0DBY3yG8J-u0DF7X-QMMpHduTuZESNm8V2p7Z&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=JJXZeYbLAXeaA6AIE_5SBw&oh=00_AYHpqN906zvWsUicvHfK15v-9RAEHMBCHF1s6sRPBdfy9g&oe=67E0A2C5",
  },
  {
    id: 4,
    name: "หวานตัดขาาา",
    description: "",
    image: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/481208115_611892748265836_4166766116691130544_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEZgpNTZyGoeFjNK_vo24GJPy5DdvsKBV8_LkN2-woFX0lAL9ay7wt9kCaLbUn6MPn0ZboNpMwfooUyucC_0XCs&_nc_ohc=d2Ed3mvQ8o0Q7kNvgEUnM8x&_nc_oc=Adnx2_ALEI8nU5Rn5AhDn6GTKABYzDcoZ7Fs5kMCV8EYnQEiT9kiaM_JbAVlz62Kbhl39NmWLwqs5J-7i9aFuSkh&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=Dk0Y8ananNgkPxaSVMn3Kg&oh=00_AYFOY3bYTVoZtyTJ-3P0Sggntb-eOmRi5fF_3YB3jUx-HQ&oe=67E0B0D5",
  },
];

const MenuPage = () => {
  return (
    <section className="menu-container">
      <h2 className="menu-title">เมนูเครื่องดื่ม</h2>
      <div className="menu-grid">
        {menuItems.map((item,index) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-footer">
                <Link to={`/product/${item.id}`}> ดูสินค้า </Link>

               
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
