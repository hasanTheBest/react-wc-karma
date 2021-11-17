import React from "react";

const ProductImageCount = () => {
  const clickHandler = () => {
    // "var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;";
    // "var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
  };
  return (
    <div className="product_count">
      <label htmlFor="qty">Quantity:</label>
      <input
        type="text"
        name="qty"
        id="sst"
        maxLength={12}
        value="1"
        title="Quantity:"
        className="input-text qty"
      />
      <button
        onClick={clickHandler}
        className="increase items-count"
        type="button"
      >
        <i className="lnr lnr-chevron-up"></i>
      </button>
      <button
        onClick={clickHandler}
        className="reduced items-count"
        type="button"
      >
        <i className="lnr lnr-chevron-down"></i>
      </button>
    </div>
  );
};

export default ProductImageCount;
