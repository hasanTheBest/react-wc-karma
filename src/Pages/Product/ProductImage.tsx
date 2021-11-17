import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductImageText from "./ProductImageText";

const ProductImage: React.FC = () => {
  return (
    <div className="product_image_area">
      <Container>
        <Row className="s_product_inner">
          <Col lg={6}>
            <ProductImageCarousel />
          </Col>
          <Col lg={{ offset: 1, span: 5 }}>
            <ProductImageText />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductImage;
