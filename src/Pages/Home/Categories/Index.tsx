import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategorySingleDeal from "./CategorySingleDeal";

import catImg1 from "../../../resource/img/category/c1.jpg";
import catImg2 from "../../../resource/img/category/c2.jpg";
import catImg3 from "../../../resource/img/category/c3.jpg";
import catImg4 from "../../../resource/img/category/c4.jpg";

const Categories: React.FC = () => {
  return (
    <section className="category-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <Row>
              <CategorySingleDeal
                catTitle="Sneaker for Sports"
                catImgSrc={catImg1}
                colLg={8}
                colMd={8}
              />
              <CategorySingleDeal
                catTitle="Sneaker for Sports"
                catImgSrc={catImg2}
                colLg={4}
                colMd={4}
              />
              <CategorySingleDeal
                catTitle="Product for Couple"
                catImgSrc={catImg3}
                colLg={4}
                colMd={4}
              />
              <CategorySingleDeal
                catTitle="Sneaker for Sports"
                catImgSrc={catImg4}
                colLg={8}
                colMd={8}
              />
            </Row>
          </Col>
          <CategorySingleDeal
            catTitle="Product for Couple"
            catImgSrc={catImg3}
            colLg={4}
            colMd={6}
          />
        </Row>
      </Container>
    </section>
  );
};
export default Categories;
