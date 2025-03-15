import React, { useState, useEffect } from 'react';


const ProductSlider = () => {
  const products = [
    { id: 1, name: "Product 1", image: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/481151018_614565994665178_7851607720705465548_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ec5PjCl6pMcQ7kNvgGxe4CZ&_nc_oc=AdjdZlI24TFYjVMK41oMiVbjG6H5VzJyQfbuSyzY0-90oj2h1hvPDgbbBfG6yKYS-qQGdPlCauTRFcb-YKv30423&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=AxYX9fljjywpFRmLrUei1k7&oh=00_AYEqjnYnua34CuPpvP1mmEKeOEild20Op4nRwL9s_cMWWg&oe=67D19088" },
    { id: 2, name: "Product 2", image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/481011212_610438001744644_5819053871132443381_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=o9I0I6GsPXcQ7kNvgGewUZ8&_nc_oc=AdjYBt-ge5bs1vpJFtrdzZ9DulSiPmu1BqlBMbxEWvCAx0i3oqUKtbONTRmvTn8UA_UIBOEO895Nn5Nr_Av_GHfb&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=A3ybOZryIJWhxwb62q9C8m1&oh=00_AYH2leEAZn4exYrl0NnlQI2w5eNAS-VplKtSqQVNO6gFCg&oe=67D1BEB1" },
    { id: 3, name: "Product 3", image: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/480799327_608072561981188_7045639888422477555_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=hVR7rMC1HIQQ7kNvgHyzm0Z&_nc_oc=AdjoqTjRuxgMlYuZRld6Mq3Sw5-KQNQcRZlI44BasIQ9zG8YaJ3RZbz_-4cNGSTvrKzRG4zVqar0liVldx2MTn9A&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=A4plhBmR3O0F29nxsPog0vG&oh=00_AYEdFcN8LDgyWVU2S5BdeRHObkfki4h62VBNmFgjlozalg&oe=67D1A180" },
    { id: 4, name: "Product 4", image: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/480883379_610957201692724_3201844819058632493_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=2Mwc3NzVsgcQ7kNvgGZ0say&_nc_oc=Adg9BO4FAA3a-ZAsbieEDk8u88g7ubU2S4uz-koMeYj0sCB7h16UAiLvpjLhv9TL4Jp61Ri0YFeaXxtVih5AU-Vc&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=Ak12erGMqfRs1PrA8k4pHtn&oh=00_AYGzl3YKeLJdlMEghmHHjsFu23G0bcBM6avyJ4fH3RRCgQ&oe=67D1C123" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ฟังก์ชันเลื่อนสไลด์อัตโนมัติ
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // ทุก 3 วินาที

    return () => clearInterval(intervalId); // ทำความสะอาดเมื่อคอมโพเนนต์ unmount
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={goToPrev}>{"<<"}</button>
      <div className="slider">
        <img src={products[currentIndex].image} alt={products[currentIndex].name} />
      </div>
      <button className="next-btn" onClick={goToNext}>{">>"}</button>
    </div>
  );
};

export default ProductSlider;
