import React from "react";

const CartTableCouponRow = () => {
  return (
    <tr className="bottom_button">
      <td>
        <a className="gray_btn" href="#">
          Update Cart
        </a>
      </td>
      <td></td>
      <td></td>
      <td>
        <div className="cupon_text d-flex align-items-center">
          <input type="text" placeholder="Coupon Code" />
          <a className="primary-btn" href="#">
            Apply
          </a>
          <a className="gray_btn" href="#">
            Close Coupon
          </a>
        </div>
      </td>
    </tr>
  );
};

export default CartTableCouponRow;
