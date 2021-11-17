import React from "react";
import { Container, Row } from "react-bootstrap";

export const BrandDep = () => {
  return (
    <section className="brand-area section_gap">
      <Container>
        <Row>
          <a className="col single-img" href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="img/brand/1.png"
              alt=""
            />
          </a>
          <a className="col single-img" href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="img/brand/2.png"
              alt=""
            />
          </a>
          <a className="col single-img" href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="img/brand/3.png"
              alt=""
            />
          </a>
          <a className="col single-img" href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="img/brand/4.png"
              alt=""
            />
          </a>
          <a className="col single-img" href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="img/brand/5.png"
              alt=""
            />
          </a>
        </Row>
      </Container>
    </section>
  );
};

export default BrandDep;
