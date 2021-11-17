import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterCopy from "./FooterCopy";
import FooterInstaFeed from "./FooterInstaFeed";
import FooterSocial from "./FooterSocial";
import FooterWidgetSignUp from "./FooterWidgetSignUp";
import SingleFooterWidget from "./SingleFooterWidget";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area section_gap">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <SingleFooterWidget
              title="About Us"
              description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua."
            />
          </Col>
          <Col lg="4" md="6" sm="6">
            <SingleFooterWidget
              title="Newsletter"
              description="Stay update with our latest"
            >
              <FooterWidgetSignUp />
            </SingleFooterWidget>
          </Col>
          <Col lg="3" md="6" sm="6">
            <SingleFooterWidget title="Instagram Feed" className="mail-chimp">
              <FooterInstaFeed />
            </SingleFooterWidget>
          </Col>
          <Col lg="2" md="6" sm="6">
            <div className="single-footer-widget">
              <SingleFooterWidget
                title="Follow Us"
                description="Let us be social"
              >
                <FooterSocial />
              </SingleFooterWidget>
            </div>
          </Col>
        </Row>

        <FooterCopy>
          Copyright &copy;{new Date().getFullYear()} All rights reserved | This
          template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </FooterCopy>
      </Container>
    </footer>
  );
};

export default Footer;
