import React from "react";

interface OrderInfoType {
  title: string;
  info: {
    [index: string]: string;
  };
}

const OrderInfo = (props: OrderInfoType) => {
  return (
    <div className="details_item">
      <h4>{props.title}</h4>
      <ul className="list">
        {Object.entries(props.info).map(([key, value]) => (
          <li key={key + value}>
            <a href="#">
              <span>{key.replace("_", " ")}</span> : {value}
            </a>
          </li>
        ))}
        <li>
          <a href="#">
            <span>{props.info.orderNumber}</span> : 60235
          </a>
        </li>
        <li>
          <a href="#">
            <span>Date</span> : Los Angeles
          </a>
        </li>
        <li>
          <a href="#">
            <span>Total</span> : USD 2210
          </a>
        </li>
        <li>
          <a href="#">
            <span>Payment method</span> : Check payments
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OrderInfo;
