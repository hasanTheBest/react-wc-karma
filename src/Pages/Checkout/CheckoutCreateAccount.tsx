import React from "react";

const CheckoutCreateAccount = () => {
  return (
    <>
      <div className="creat_account">
        <input type="checkbox" id="f-option4" name="selector" />
        <label htmlFor="f-option4">I’ve read and accept the </label>
        <a href="#">terms & conditions*</a>
      </div>
      <a className="primary-btn" href="#">
        Proceed to Paypal
      </a>
    </>
  );
};

export default CheckoutCreateAccount;
