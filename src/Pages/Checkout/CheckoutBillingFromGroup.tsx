import React from "react";
import { Col, FormControl } from "react-bootstrap";

interface FromGroupType {
  colMd: number;
  id: string;
  placeholder: string;
  name: string;
  pStar?: Boolean;
}

const CheckoutBillingFromGroup = (props: FromGroupType) => {
  return (
    <Col
      md={props.colMd}
      className={`form-group ${typeof props.pStar !== undefined && "p_star"}`}
    >
      <FormControl type="text" id={props.id} name="name" />
      <span className="placeholder" data-placeholder={props.placeholder}></span>
    </Col>
  );
};

export default CheckoutBillingFromGroup;
