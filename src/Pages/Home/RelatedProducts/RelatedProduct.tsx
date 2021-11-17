import React from "react";
import { Col } from "react-bootstrap";
import { ProductDetails } from "../ExclusiveDeal/ExclusiveProductSlide";

export interface ProductType extends ProductDetails {
  itemCount: number;
}

const RelatedProduct = (props: ProductType) => {
  return (
    <Col lg="4" md="4" sm="12" className="mb-20">
      <div className="single-related-product d-flex">
        <a href="#">
          <img
            src={props.imgSrc.replace("r1.jpg", `r${props.itemCount}.jpg`)}
            alt={props.title}
          />
        </a>
        <div className="desc">
          <a href="#" className="title">
            {props.title}
          </a>
          <div className="price">
            <h6>${props.currentPrice}</h6>
            <h6 className="l-through">${props.oldPrice}</h6>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RelatedProduct;
