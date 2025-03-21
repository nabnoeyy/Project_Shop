import React from "react";
import { Link } from "react-router-dom"; // นำเข้า Link

const AlbumCard = () => {
  return (
    <div className="album-container">
      <div className="container-text1">
        <div className="text1">เมนูใหม่</div>
      </div>

      <figure>
        <Link to="/product/2">
          <img
            src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/480868528_933468385611562_7676045720022828126_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEfsVcbKVNsbtMcMxSSiLALLgAzFF2qvuMuADMUXaq-4-e_yQyGIxsqL4KTE7gMYLWylvi289deU0qWrHKP7MYi&_nc_ohc=FzYzrXP8UAcQ7kNvgHtm7Vw&_nc_oc=AdlgMTsBTDyw7hlA02pADf9_a4HydnHShVb39xIgwrqueprAVR8Fhhh5vktK2iQjxZY&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=YBORzi4au5opWoWtQ93p3A&oh=00_AYEC9yTX0UOKV-d9WzYhQjc9ZZzTmLLujVZuYSrkFAlvIA&oe=67E2B2C1"
            alt="เมนูใหม่"
          />
        </Link>
      </figure>

      <figure>
      <Link to="/product/2">
        <img
          src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/481461827_1044467067701657_374255865436539361_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGjRAN8fzoeXA0zhdLEi1YEEVXkrqcS6-sRVeSupxLr6y46nnqOekO71pr_wTQRAWuT0wv-1mLL-U5AmoRfdQdt&_nc_ohc=mSP_-SMlQ80Q7kNvgFAt17D&_nc_oc=AdnyXDqnGW-FQgIcg1sq4v0bGI6fSzp8aJ1ukX-WBuwOa9xjyod8fx2harNPEhV6GI8&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=Av8Kl2PncEbB4RlWuwWh0w&oh=00_AYEULJrguDDEbrtVr2qNFkDYIym2CDcOk9pEfI1k2cuncA&oe=67E299E6"
          alt="เมนูเพิ่มเติม"
        />
         </Link>
      </figure>

      <figure>
      <Link to="/product/4">
        <img
          src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/475842740_1019575813524116_4498552683249802042_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEktF_VQ1gRcS9J9kGz5EUQMiUcqUpm8WoyJRypSmbxaoQQYyY15tIFIf-I6ZJJNk8LgwtL2wV423K-0z8Jbdpp&_nc_ohc=r6P0eIvpBLUQ7kNvgGjUB_v&_nc_oc=AdlpCkSrrPuZJIGAtjsrmWl96VoWiSN4A6PqxBLmK8wpolbJ6s9KyvuYPK0Bh-P1594&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=8Y21wo79IYYKwZ4_Oezs-w&oh=00_AYFxcNdU7W3_qGbfTALaG9W8-Sz8mGciblOFTLn7CIbw1w&oe=67E28DD8"
          alt="เครื่องดื่มใหม่"
        />
        </Link>
      </figure>
    </div>
  );
};

export default AlbumCard;
