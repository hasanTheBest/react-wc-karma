import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExclusiveCountdown from "./ExclusiveCountdown";
import ExclusiveProductSlide from "./ExclusiveProductSlide";

import eProduct1 from "../../../resource/img/product/e-p1.png";

const ExclusiveDeal: React.FC = () => {
  return (
    <section className="exclusive-deal-area">
      <Container fluid>
        <Row className="row justify-content-center align-items-center">
          <Col lg="6" className="no-padding exclusive-left">
            <Row className="clock_sec clockdiv" id="clockdiv">
              <Col lg="12">
                <h1>Exclusive Hot Deal Ends Soon!</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </Col>
              <Col lg="12">
                <Row className="clock-wrap">
                  <ExclusiveCountdown time={150} text="Days" />
                  <ExclusiveCountdown time={23} text="Hours" />
                  <ExclusiveCountdown time={47} text="Minutes" />
                  <ExclusiveCountdown time={59} text="Seconds" />
                </Row>
              </Col>
            </Row>
            <a href="" className="primary-btn">
              Shop Now
            </a>
          </Col>
          <Col lg="6" className="no-padding exclusive-right">
            <div className="active-exclusive-product-slider">
              {/* single exclusive carousel */}
              <ExclusiveProductSlide
                title="addidas New Hammer sole for Sports person"
                currentPrice={150.0}
                oldPrice={200.0}
                imgSrc={eProduct1}
              />
              <ExclusiveProductSlide
                title="Apex New Hammer sole for Sports person"
                currentPrice={160.0}
                oldPrice={210.0}
                imgSrc={eProduct1}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ExclusiveDeal;
