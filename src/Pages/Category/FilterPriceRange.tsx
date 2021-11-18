import React from "react";

const FilterPriceRange = () => {
  return (
    <div className="price-range-area">
      <div id="price-range"></div>
      <div className="value-wrapper d-flex">
        <div className="price">Price:</div>
        <span>$</span>
        <div id="lower-value"></div>
        <div className="to">to</div>
        <span>$</span>
        <div id="upper-value"></div>
      </div>
    </div>
  );
};

export default FilterPriceRange;
