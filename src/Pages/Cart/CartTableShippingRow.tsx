import React from "react";
import { FormSelect } from "react-bootstrap";

const CartTableShippingRow = () => {
  return (
    <tr className="shipping_area">
      <td></td>
      <td></td>
      <td>
        <h5>Shipping</h5>
      </td>
      <td>
        <div className="shipping_box">
          <ul className="list">
            <li>
              <a href="#">Flat Rate: $5.00</a>
            </li>
            <li>
              <a href="#">Free Shipping</a>
            </li>
            <li>
              <a href="#">Flat Rate: $10.00</a>
            </li>
            <li className="active">
              <a href="#">Local Delivery: $2.00</a>
            </li>
          </ul>
          <h6>
            Calculate Shipping{" "}
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </h6>
          <FormSelect className="shipping_select">
            <option value="1">Bangladesh</option>
            <option value="2">India</option>
            <option value="4">Pakistan</option>
          </FormSelect>
          <FormSelect className="shipping_select">
            <option value="1">Select a State</option>
            <option value="2">Select a State</option>
            <option value="4">Select a State</option>
          </FormSelect>
          <input type="text" placeholder="Postcode/Zipcode" />
          <a className="gray_btn" href="#">
            Update Details
          </a>
        </div>
      </td>
    </tr>
  );
};

export default CartTableShippingRow;
