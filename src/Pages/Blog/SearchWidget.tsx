import React, { useRef } from "react";
import { FormControl } from "react-bootstrap";

const SearchWidget = () => {
  const searchRef = useRef(null);
  const handleFocus = () => {
    // searchRef.current.placeholder = "";
  };

  const handleBlur = () => {
    // searchRef.current.placeholder = "Search Text"
  };

  return (
    <div className="single_sidebar_widget search_widget">
      <div className="input-group">
        <FormControl
          type="text"
          ref={searchRef}
          placeholder="Search Posts"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">
            <i className="lnr lnr-magnifier"></i>
          </button>
        </span>
      </div>
      <div className="br"></div>
    </div>
  );
};

export default SearchWidget;
