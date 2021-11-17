import React from "react";
interface OrderTableRowType {
  price: string;
  name: string;
  quantity?: string;
}
const OrderTableRow = (props: OrderTableRowType) => {
  return (
    <tr>
      <td>
        <p>{props.name}</p>
      </td>
      <td>
        <h5>{props?.quantity}</h5>
      </td>
      <td>
        <p>{props.price}</p>
      </td>
    </tr>
  );
};

export default OrderTableRow;
