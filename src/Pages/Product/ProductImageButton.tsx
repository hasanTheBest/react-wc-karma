import React from "react";

const ProductImageButton = () => {
  return (
    <div className="card_area d-flex align-items-center">
      <a className="primary-btn" href="#">
        Add to Cart
      </a>
      <a className="icon_btn" href="#">
        <i className="lnr lnr lnr-diamond"></i>
      </a>
      <a className="icon_btn" href="#">
        <i className="lnr lnr lnr-heart"></i>
      </a>
    </div>
  );
};

export default ProductImageButton;
