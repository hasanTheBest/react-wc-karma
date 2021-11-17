import React from "react";

const CheckoutPaymentActive = () => {
  return (
    <div className="payment_item active">
      <div className="radion_btn">
        <input type="radio" id="f-option6" name="selector" />
        <label htmlFor="f-option6">Paypal </label>
        <img src="img/product/card.jpg" alt="" />
        <div className="check"></div>
      </div>
      <p>
        Pay via PayPal; you can pay with your credit card if you don’t have a
        PayPal account.
      </p>
    </div>
  );
};

export default CheckoutPaymentActive;
