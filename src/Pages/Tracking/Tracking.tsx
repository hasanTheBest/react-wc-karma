import React from "react";
import { Container, Form, Col, FormControl, Button } from "react-bootstrap";

const Tracking: React.FC = () => {
  return (
    <section className="tracking_box_area section_gap">
      <Container className="container">
        <div className="tracking_box_inner">
          <p>
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <Form className="row tracking_form" noValidate>
            <Col md={12} className="form-group">
              <FormControl
                type="text"
                id="order"
                name="order"
                placeholder="Order ID"
                onFocus={() => {
                  console.log("this.placeholder = ''");
                }}
                onBlur={() => {
                  console.log("this.placeholder = 'Order Id'");
                }}
              />
            </Col>
            <Col md={12} className="form-group">
              <FormControl
                type="email"
                id="email"
                name="email"
                placeholder="Billing Email Address"
                onFocus={() => {
                  console.log("this.placeholder = ''");
                }}
                onBlur={() => {
                  console.log("this.placeholder = 'Billing Email Address'");
                }}
              />
            </Col>
            <Col md={12} className="form-group">
              <Button
                variant="primary"
                type="submit"
                value="submit"
                className="primary-btn"
              >
                Track Order
              </Button>
            </Col>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Tracking;
