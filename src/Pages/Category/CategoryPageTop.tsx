import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryContent from "./CategoryContent";
import CategorySidebar from "./CategorySidebar";

const CategoryPageTop = () => {
  return (
    <Container>
      <Row>
        <Col xl={3} lg={4} md={5}>
          <CategorySidebar />
        </Col>
        <Col xl={9} lg={8} md={7}>
          <CategoryContent />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPageTop;
