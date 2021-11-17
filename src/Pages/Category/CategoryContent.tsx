import React from "react";
import { Col } from "react-bootstrap";
import CategoryLatestProducts from "./CategoryLatestProducts";
import CategoryFilterBarBottom from "./CategoryFilterBarBottom";
import CategoryFilterBarTop from "./CategoryFilterBarTop";

const CategoryContent = () => {
  return (
    <Col xl={9} lg={8} md={7}>
      <CategoryFilterBarTop />
      <CategoryLatestProducts />
      <CategoryFilterBarBottom />
    </Col>
  );
};

export default CategoryContent;
