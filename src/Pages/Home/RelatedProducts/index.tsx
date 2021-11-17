import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductDetails } from "../ExclusiveDeal/ExclusiveProductSlide";
import RelatedProduct from "./RelatedProduct";

// import rp1 from "../../../resource/img/r1.jpg";
import imgCat5 from "../../../resource/img/category/c5.jpg";
import SectionTitle from "./SectionTitle";

const RelatedProducts: React.FC = () => {
  const relatedProduct: ProductDetails = {
    title: "Black Lace Heels",
    currentPrice: 155.0,
    oldPrice: 230.0,
    imgSrc: "resource/img/r1.jpg",
  };

  return (
    <section className="related-product-area section_gap_bottom">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <SectionTitle
              title="Deals of the Week"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              "
            />
          </Col>
        </Row>
        <Row>
          <Col lg="9">
            <Row>
              {new Array(12)
                .fill(relatedProduct)
                .map((rp: ProductDetails, i) => (
                  <RelatedProduct {...rp} itemCount={i + 1} />
                ))}
            </Row>
          </Col>
          <Col lg="3">
            <div className="ctg-right">
              <a href="#" target="_blank">
                <img
                  className="img-fluid d-block mx-auto"
                  src={imgCat5}
                  alt="Related Product"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default RelatedProducts;
