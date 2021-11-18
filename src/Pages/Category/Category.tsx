import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RelatedProducts from "../Home/RelatedProducts/";
import CategoryPageTop from "./CategoryPageTop";

const Category: React.FC = () => {
  return (
    <>
      <CategoryPageTop />
      <RelatedProducts />
    </>
  );
};

export default Category;
