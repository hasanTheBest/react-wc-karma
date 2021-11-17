import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleFeature from "./SingleFeature";

import featureImg1 from "../../../resource/img/features/f-icon1.png";
import featureImg2 from "../../../resource/img/features/f-icon2.png";
import featureImg3 from "../../../resource/img/features/f-icon3.png";
import featureImg4 from "../../../resource/img/features/f-icon4.png";

const Features: React.FC = () => {
  return (
    <section className="features-area section_gap">
      <Container>
        <Row className="features-inner">
          {/* single features */}
          <SingleFeature
            title="Free Delivery"
            description="Free Shipping on all order"
            imgSrc={featureImg1}
          />
          <SingleFeature
            title="Return Policy"
            description="Free Shipping on all order"
            imgSrc={featureImg2}
          />
          <SingleFeature
            title="24/7 Support"
            description="Free Shipping on all order"
            imgSrc={featureImg3}
          />
          <SingleFeature
            title="Secure Payment"
            description="Free Shipping on all order"
            imgSrc={featureImg4}
          />
        </Row>
      </Container>
    </section>
  );
};
export default Features;
