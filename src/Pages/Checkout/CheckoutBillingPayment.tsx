import React from "react";

const CheckoutBillingPayment = () => {
  return (
    <div className="payment_item">
      <div className="radion_btn">
        <input type="radio" id="f-option5" name="selector" />
        <label htmlFor="f-option5">Check payments</label>
        <div className="check"></div>
      </div>
      <p>
        Please send a check to Store Name, Store Street, Store Town, Store State
        / County, Store Postcode.
      </p>
    </div>
  );
};

export default CheckoutBillingPayment;
