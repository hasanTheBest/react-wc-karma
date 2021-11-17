import React from "react";
import OrderTableRow from "./OrderTableRow";
import { Table } from "react-bootstrap";

const OrderTable = () => {
  return (
    <div className="order_details_table">
      <h2>Order Details</h2>
      <div className="table-responsive">
        <Table responsive>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {new Array(3).map((n, i) => (
              <OrderTableRow
                name="Pixelstore fresh Blackberry"
                quantity="x 02"
                price="$520.00"
              />
            ))}
            <OrderTableRow name="Subtotal" price="$2150.00" />
            <OrderTableRow name="Shipping" price="Flat rate: $50.00" />
            <OrderTableRow name="Total" price="$2210.25" />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
