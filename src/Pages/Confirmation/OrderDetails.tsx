import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OrderInfo from "./OrderInfo";
import OrderTable from "./OrderTable";

const OrderDetails: React.FC = () => {
  const orderInfo = {
    Order_number: "60250",
    Date: "Los Angeles",
    Total: "USD 2210",
    Payment_method: "Check",
  };

  const billingAddress = {
    Street: "56/8",
    City: "Los Angeles",
    Country: "United Stated",
    Postcode: "350593",
  };
  return (
    <section className="order_details section_gap">
      <Container className="container">
        <h3 className="title_confirmation">
          Thank you. Your order has been received.
        </h3>
        <Row className="order_d_inner">
          <Col lg="4">
            <OrderInfo title="Order Info" info={orderInfo} />
          </Col>
          <Col lg="4">
            <OrderInfo title="Billing Address" info={billingAddress} />
          </Col>
          <Col lg="4">
            <OrderInfo title="Shipping Address" info={billingAddress} />
          </Col>
        </Row>
        <OrderTable />
      </Container>
    </section>
  );
};

export default OrderDetails;
