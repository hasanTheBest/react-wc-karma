import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandSingleImg from "./BrandSingleImg";

import brandImg1 from "../../../resource/img/brand/1.png";
import brandImg2 from "../../../resource/img/brand/2.png";
import brandImg3 from "../../../resource/img/brand/3.png";
import brandImg4 from "../../../resource/img/brand/4.png";
import brandImg5 from "../../../resource/img/brand/5.png";

export const Brand = () => {
  return (
    <section className="brand-area section_gap">
      <Container>
        <Row>
          <BrandSingleImg imgUrl={brandImg1} brandUrl="#" />
          <BrandSingleImg imgUrl={brandImg2} brandUrl="#" />
          <BrandSingleImg imgUrl={brandImg3} brandUrl="#" />
          <BrandSingleImg imgUrl={brandImg4} brandUrl="#" />
          <BrandSingleImg imgUrl={brandImg5} brandUrl="#" />
        </Row>
      </Container>
    </section>
  );
};

export default Brand;
