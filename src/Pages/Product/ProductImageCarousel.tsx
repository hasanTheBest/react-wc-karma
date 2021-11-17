import React from "react";

import productImg from "../../resource/img/category/s-p1.jpg";

const ProductImageCarousel = () => {
  return (
    <div className="s_Product_carousel">
      {new Array(3).fill(1).map((a, i) => (
        <div className="single-prd-item" key={i}>
          <img className="img-fluid" src={productImg} alt="single-prd-item" />
        </div>
      ))}
    </div>
  );
};

export default ProductImageCarousel;
