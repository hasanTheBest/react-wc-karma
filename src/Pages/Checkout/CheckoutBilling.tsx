import React from "react";
import { Row, Col } from "react-bootstrap";
import CheckoutBillingForm from "./CheckoutBillingForm";
import CheckoutBillingList from "./CheckoutBillingList";
import CheckoutBillingPayment from "./CheckoutBillingPayment";
import CheckoutCreateAccount from "./CheckoutCreateAccount";
import CheckoutPaymentActive from "./CheckoutPaymentActive";

const CheckoutBilling = () => {
  return (
    <div className="billing_details">
      <Row>
        <Col lg={8}>
          <h3>Billing Details</h3>
          <CheckoutBillingForm />
        </Col>
        <Col lg={4}>
          <div className="order_box">
            <h2>Your Order</h2>
            <CheckoutBillingList />
            <CheckoutBillingList listClass="list_2" />
            <CheckoutBillingPayment />
            <CheckoutPaymentActive />
            <CheckoutCreateAccount />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutBilling;
