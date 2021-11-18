import React from "react";
import CategoryCommonFilterForm from "./CategoryCommonFilterForm";
import FilterPriceRange from "./FilterPriceRange";

export type FilterCommonType = {
  title: string;
  items?: { [key: string]: number };
};

const CategorySidebarFilterCommon = (props: FilterCommonType) => {
  return (
    <div className="common-filter">
      <div className="head">{props.title}</div>
      {props.items ? (
        <CategoryCommonFilterForm title={props.title} items={props.items} />
      ) : (
        <FilterPriceRange />
      )}
    </div>
  );
};

export default CategorySidebarFilterCommon;
