import React from "react";

const CheckoutCoupon = () => {
  return (
    <div className="cupon_area">
      <div className="check_title">
        <h2>
          Have a coupon? <a href="#">Click here to enter your code</a>
        </h2>
      </div>
      <input type="text" placeholder="Enter coupon code" />
      <a className="tp_btn" href="#">
        Apply Coupon
      </a>
    </div>
  );
};

export default CheckoutCoupon;
