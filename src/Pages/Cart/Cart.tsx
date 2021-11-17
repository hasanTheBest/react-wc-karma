import React from "react";
import { Container, Table } from "react-bootstrap";
import CartTableHead from "./CartTableHead";
import CartTableItem from "./CartTableItem";

import imgCart from "../../resource/img/cart.jpg";
import CartTableExitRow from "./CartTableExitRow";
import CartTableCouponRow from "./CartTableCouponRow";
import CartTableTotalRow from "./CartTableTotalRow";
import CartTableShippingRow from "./CartTableShippingRow";

const Cart: React.FC = () => {
  return (
    <section className="cart_area">
      <Container className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <Table className="table">
              <CartTableHead />
              <tbody>
                {new Array(3).map(() => (
                  <CartTableItem
                    unitPrice={359.0}
                    quantity={1}
                    totalPrice={720.0}
                    name={"Minimalistic shop for multipurpose use"}
                    img={imgCart}
                  />
                ))}
                <CartTableCouponRow />
                <CartTableTotalRow subTotal={2160.0} />
                <CartTableShippingRow />
                <CartTableExitRow />
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
