import React from "react";

const CategoryFilterPagination = () => {
  return (
    <div className="pagination">
      <a href="#" className="prev-arrow">
        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
      </a>
      <a href="#" className="active">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#" className="dot-dot">
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </a>
      <a href="#">6</a>
      <a href="#" className="next-arrow">
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default CategoryFilterPagination;
