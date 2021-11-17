import React from "react";
import CheckoutBillingItem from "./CheckoutBillingItem";
type PropsType = {
  listClass?: string;
};
const CheckoutBillingList = (props: PropsType) => {
  return (
    <ul className={`list ${props?.listClass}`}>
      <CheckoutBillingItem>
        <>
          Product <span>Total</span>
        </>
      </CheckoutBillingItem>
      <CheckoutBillingItem>
        <>
          Fresh Blackberry <span className="middle">x 02</span>{" "}
          <span className="last">$720.00</span>
        </>
      </CheckoutBillingItem>
      <CheckoutBillingItem>
        <>
          Fresh Tomatoes <span className="middle">x 02</span>{" "}
          <span className="last">$720.00</span>
        </>
      </CheckoutBillingItem>
      <CheckoutBillingItem>
        <>
          Fresh Brocoli <span className="middle">x 02</span>{" "}
          <span className="last">$720.00</span>
        </>
      </CheckoutBillingItem>
    </ul>
  );
};

export default CheckoutBillingList;
