import React from "react";
import CategoryFilterPagination from "./CategoryFilterPagination";
import CategoryFilterSorting from "./CategoryFilterSorting";
import CategoryFilterSortByMeta from "./CategoryFilterSorting";

const CategoryFilterBarTop = () => {
  return (
    <div className="filter-bar d-flex flex-wrap align-items-center">
      <CategoryFilterSorting
        sortBy={["Price Low to high", "Price hight to low", "Color", "Size"]}
      />
      <CategoryFilterSorting sortBy={["12", "16", "20", "24"]} mr="mr-auto" />
      <CategoryFilterPagination />
    </div>
  );
};

export default CategoryFilterBarTop;
