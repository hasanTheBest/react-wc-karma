import React from "react";
type CartTotalType = {
  subTotal: number;
};
const CartTableTotalRow = (props: CartTotalType) => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td>
        <h5>Subtotal</h5>
      </td>
      <td>
        <h5>${props.subTotal}</h5>
      </td>
    </tr>
  );
};

export default CartTableTotalRow;
