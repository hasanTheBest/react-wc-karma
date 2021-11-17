import React, { Children, ReactNode } from "react";
interface OrderListType {
  children: JSX.Element;
}
const CheckoutBillingItem = (props: OrderListType) => {
  return (
    <li>
      <a href="#">{props.children}</a>
    </li>
  );
};

export default CheckoutBillingItem;
