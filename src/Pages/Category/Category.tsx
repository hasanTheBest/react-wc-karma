import React from "react";
import { Container, Row } from "react-bootstrap";
import RelatedProducts from "../Home/RelatedProducts/";
import CategoryContent from "./CategoryContent";
import CategorySidebar from "./CategorySidebar";

const Category: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <CategorySidebar />
          <CategoryContent />
        </Row>
      </Container>

      <RelatedProducts />
    </>
  );
};

export default Category;
