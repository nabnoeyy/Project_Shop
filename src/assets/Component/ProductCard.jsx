import React from 'react';


const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/480180646_606478668807244_8832744289839329953_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mLfCGlk1MwUQ7kNvgGHLQ7t&_nc_oc=AdiVbQq2LX7M_sr4ImpVkjb5SRm92iO072bYWd7ioqio-KFo2NJRTOUh90Y6HKbqA4O9okm8hzf4ME9N5i6fF-P7&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=AmdVXYexMVnFx7tAloYV_Gx&oh=00_AYGrBoDaforqgxcOEx3WkFusn_wF4gFbD8GPeINe6GdLdg&oe=67D19D7E" alt="Product" />
      </div>
      <div className="product-details">
        <h2>Product Title</h2>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero sit amet lorem feugiat aliquet.
        </p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
