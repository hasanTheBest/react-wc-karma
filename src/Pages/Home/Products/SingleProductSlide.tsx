import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductDetails } from "../ExclusiveDeal/ExclusiveProductSlide";
import SingleProduct from "./SingleProduct";

interface PropsType {
  slideTile: string;
  slideDescription: string;
  product: ProductDetails;
}

const SingleProductSlide = (props: PropsType) => {
  return (
    <div className="single-product-slider">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <div className="section-title">
              <h2>{props.slideTile}</h2>
              <p>{props.slideTile}</p>
            </div>
          </Col>
        </Row>
        <Row>
          {new Array(8).fill(props.product).map((p: ProductDetails, i) => (
            <SingleProduct {...p} itemCount={i + 1} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SingleProductSlide;
