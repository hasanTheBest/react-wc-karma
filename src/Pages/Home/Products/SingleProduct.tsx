import React from "react";
import { Col } from "react-bootstrap";
import { ProductType } from "../RelatedProducts/RelatedProduct";

const SingleProduct = (props: ProductType) => {
  return (
    <Col lg="3" md="6">
      <div className="single-product">
        <img
          className="img-fluid"
          src={props.imgSrc.replace("p1.jpg", `p${props.itemCount}.jpg`)}
          alt={props.title}
        />
        <div className="product-details">
          <h6>{props.title}</h6>
          <div className="price">
            <h6>${props.currentPrice}</h6>
            <h6 className="l-through">${props.oldPrice}</h6>
          </div>
          <div className="prd-bottom">
            <a href="" className="social-info">
              <span className="ti-bag"></span>
              <p className="hover-text">add to bag</p>
            </a>
            <a href="" className="social-info">
              <span className="lnr lnr-heart"></span>
              <p className="hover-text">Wishlist</p>
            </a>
            <a href="" className="social-info">
              <span className="lnr lnr-sync"></span>
              <p className="hover-text">compare</p>
            </a>
            <a href="" className="social-info">
              <span className="lnr lnr-move"></span>
              <p className="hover-text">view more</p>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleProduct;
