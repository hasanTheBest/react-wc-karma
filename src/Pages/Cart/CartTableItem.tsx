import React from "react";
interface cartTDTTopType {
  img: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
const CartTableItem = (props: cartTDTTopType) => {
  const onClickHandler = () => {
    //     var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;
    // var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;
    // var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;
    // var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;
  };

  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="media-body">
            <p>{props.name}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>${props.unitPrice}</h5>
      </td>
      <td>
        <div className="product_count">
          <input
            type="text"
            name="qty"
            id="sst"
            maxLength={12}
            value={props.quantity}
            title="Quantity:"
            className="input-text qty"
          />
          <button
            onClick={onClickHandler}
            className="increase items-count"
            type="button"
          >
            <i className="lnr lnr-chevron-up"></i>
          </button>
          <button
            onClick={onClickHandler}
            className="reduced items-count"
            type="button"
          >
            <i className="lnr lnr-chevron-down"></i>
          </button>
        </div>
      </td>
      <td>
        <h5>${props.totalPrice}</h5>
      </td>
    </tr>
  );
};

export default CartTableItem;
