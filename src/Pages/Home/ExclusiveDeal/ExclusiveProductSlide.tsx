import React from "react";

export type ProductDetails = {
  title: string;
  imgSrc: string;
  currentPrice: number;
  oldPrice: number;
};

const ExclusiveProductSlide = (props: ProductDetails) => {
  return (
    <div className="single-exclusive-slider">
      <img className="img-fluid" src={props.imgSrc} alt="Slide Image" />
      <div className="product-details">
        <div className="price">
          <h6>${props.currentPrice}</h6>
          <h6 className="l-through">${props.oldPrice}</h6>
        </div>
        <h4>{props.title}</h4>
        <div className="add-bag d-flex align-items-center justify-content-center">
          <a className="add-btn" href="">
            <span className="ti-bag"></span>
          </a>
          <span className="add-text text-uppercase">Add to Bag</span>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProductSlide;
