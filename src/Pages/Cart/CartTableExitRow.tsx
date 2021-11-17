import React from "react";

const CartTableExitRow = () => {
  return (
    <tr className="out_button_area">
      <td></td>
      <td></td>
      <td></td>
      <td>
        <div className="checkout_btn_inner d-flex align-items-center">
          <a className="gray_btn" href="#">
            Continue Shopping
          </a>
          <a className="primary-btn" href="#">
            Proceed to checkout
          </a>
        </div>
      </td>
    </tr>
  );
};

export default CartTableExitRow;
