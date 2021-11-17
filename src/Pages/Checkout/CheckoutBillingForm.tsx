import React from "react";
import { Form, FormControl, Col } from "react-bootstrap";
import CheckoutBillingFromGroup from "./CheckoutBillingFromGroup";

const CheckoutBillingForm = () => {
  return (
    <Form className="row contact_form" action="#" method="post" noValidate>
      <CheckoutBillingFromGroup
        id="first"
        name="name"
        placeholder="First Name"
        colMd={6}
      />
      <CheckoutBillingFromGroup
        id="last"
        name="name"
        placeholder="Last Name"
        colMd={6}
        pStar
      />
      <CheckoutBillingFromGroup
        id="company"
        name="company"
        placeholder="Company Name"
        colMd={12}
      />
      <CheckoutBillingFromGroup
        id="number"
        name="number"
        placeholder="Phone Number"
        colMd={6}
        pStar
      />
      <CheckoutBillingFromGroup
        id="email"
        name="email"
        placeholder="Email Address"
        colMd={6}
      />

      <Col md={12} className="form-group p_star">
        <FormControl as="select" className="country_select">
          <option value="1">Country</option>
          <option value="2">Country</option>
          <option value="4">Country</option>
        </FormControl>
      </Col>
      <CheckoutBillingFromGroup
        id="add1"
        name="add1"
        placeholder="Address Line 1"
        colMd={12}
        pStar
      />
      <CheckoutBillingFromGroup
        id="add2"
        name="add2"
        placeholder="Address Line 2"
        colMd={12}
        pStar
      />
      <CheckoutBillingFromGroup
        id="city"
        name="city"
        placeholder="Town/City"
        colMd={12}
        pStar
      />
      <div className="col-md-12 form-group p_star">
        <select className="country_select">
          <option value="1">District</option>
          <option value="2">District</option>
          <option value="4">District</option>
        </select>
      </div>
      <CheckoutBillingFromGroup
        id="zip"
        name="zip"
        placeholder="Postcode/ZIP"
        colMd={12}
      />
      <div className="col-md-12 form-group">
        <div className="creat_account">
          <input type="checkbox" id="f-option2" name="selector" />
          <label htmlFor="f-option2">Create an account?</label>
        </div>
      </div>
      <div className="col-md-12 form-group">
        <div className="creat_account">
          <h3>Shipping Details</h3>
          <input type="checkbox" id="f-option3" name="selector" />
          <label htmlFor="f-option3">Ship to a different address?</label>
        </div>
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows={1}
          placeholder="Order Notes"
        ></textarea>
      </div>
    </Form>
  );
};

export default CheckoutBillingForm;
