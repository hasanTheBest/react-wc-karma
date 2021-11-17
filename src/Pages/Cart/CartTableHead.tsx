import React from "react";
import { Col } from "react-bootstrap";

const CartTableHead = () => {
  return (
    <thead>
      <tr>
        <Col as="th">Product</Col>
        <Col as="th">Price</Col>
        <Col as="th">Quantity</Col>
        <Col as="th">Total</Col>
      </tr>
    </thead>
  );
};

export default CartTableHead;
