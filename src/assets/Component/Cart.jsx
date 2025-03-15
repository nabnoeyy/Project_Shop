import React from 'react';

const Cart = () => {
  const products = [

   
    {
      imgSrc: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/480300020_608035418651569_3052279285626856593_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YghOA3ad3VwQ7kNvgE1yoiM&_nc_oc=Adh-FmKlg8VJlCoBTfmYobiCCKl1DZ-uPf3XVaifuhnhL0GvCanybgCsfxxL6AmVyFLI0Twsn4eYrCE9qp7UviBf&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=A7cXK3s5zyg_rLbRWG_EBBC&oh=00_AYGNbInDs9h-ihb27CSfniVU-IDD6dTsIuVYWzCcuRWSyw&oe=67D4E3F8',
      alt: 'image',
      title: 'เมนูต้อนรับ Summer',
      link: 'nb-shop-1.html',
    },
    {
      imgSrc: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/480180646_606478668807244_8832744289839329953_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2vr5kEIgqGkQ7kNvgHJX7KF&_nc_oc=AdjeUOrbVsK4-y0h0ek-gT6dqlBSSeYsRN17pS_MnQUOr6OfuZQfGomEUnkGrrE6PhGacJL77iZKMmMXbCLdPAbv&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=AliyyGrVFsj6A-I-MNuWV1c&oh=00_AYHhpoOD8bjaZ_5Ln_PoHYq7RQUo5vfx-VyuJA8op6GAAA&oe=67D4E93E',
      alt: 'image',
      title: 'ชาชีส',
      link: 'nb-shop-2.html',
    },
    {
      imgSrc: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/480789957_611628591625585_4448686726057561122_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=41nk_XLIie8Q7kNvgHFByzu&_nc_oc=AdjKKPNksW6SvZ-v1W7G6h-r0stpZ9elWhsaK_YupxdfGrp2NNZkPZmAMseFzg8rW9QI-0Es2xmLDdS2R0iFve-m&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=A2RXgUSzy3JKqsPOJ5SezcE&oh=00_AYEPA0YLLK9LLp40rWjNxg5jZuGbdEASeudApU4pa9mMow&oe=67D4C6C1',
      alt: 'image',
      title: 'เมนูโซดา ห้ามพลาด!!',
      link: 'nb-shop-3.html',
    },
    {
      imgSrc: 'https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/476630764_600601782728266_4343195413154102986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qzXyr-7H2NkQ7kNvgHZrdhF&_nc_oc=AdhJMkQFsheLrpn4bVB-QVVnLS1F-zygDa_Fhztwj7cBAgKU-d9OScFoe0R6qsHCPkhSff4OiRkzgPigUlzfeKY_&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=A7wHnZtQufoLMANSdpeSGNn&oh=00_AYFR63ugPmmf_0X7uPHcXABQi05Wjrv3On2iw1DitwzQJA&oe=67D4D9ED',
      alt: 'image',
      title: 'Milkkkk',
      link: 'nb-shop-4.html',
    },
  ];

  return (
    
    <div className="container">
      <div className="card__container">
      
        {products.map((product, index) => (
          <article className="card__article" key={index}>
            <img
              src={product.imgSrc}
              alt={product.alt}
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">{product.title}</h2>
              <a href={product.link} className="card__button">
                สั่งซื้อตรงนี้เลย
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
    
  );
};

export default Cart;
