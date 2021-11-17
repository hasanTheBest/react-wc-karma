import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const Contact: React.FC = () => {
  return (
    <section className="contact_area section_gap_bottom">
      <Container className="container">
        <ContactMap />
        <Row>
          <Col lg={3}>
            <ContactInfo />
          </Col>
          <Col lg={9}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
