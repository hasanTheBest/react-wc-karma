import React from "react";
import CategorySidebarFilterCommon from "./CategorySidebarFilterCommon";
import FilterPriceRange from "./FilterPriceRange";
const FILTER_OBJ = {
  brands: {
    title: "Brands",
    items: {
      Sumsung: Math.round(50 + Math.random() * 10),
      Apple: Math.round(20 + Math.random() * 10),
      Asus: Math.round(30 + Math.random() * 10),
      Goinee: Math.round(10 + Math.random() * 10),
      Micromax: Math.round(15 + Math.random() * 10),
      Walton: Math.round(25 + Math.random() * 10),
      Symphony: Math.round(45 + Math.random() * 10),
    },
  },
  colors: {
    title: "Colors",
    items: {
      Black: Math.round(50 + Math.random() * 10),
      Blue: Math.round(20 + Math.random() * 10),
      Crimson: Math.round(30 + Math.random() * 10),
      Violet: Math.round(10 + Math.random() * 10),
      darkred: Math.round(15 + Math.random() * 10),
      navyblue: Math.round(25 + Math.random() * 10),
      lightgrey: Math.round(45 + Math.random() * 10),
    },
  },
};

const CategorySidebarFilter = () => {
  return (
    <div className="sidebar-filter mt-50">
      <div className="top-filter-head">Product Filters</div>
      <CategorySidebarFilterCommon {...FILTER_OBJ.brands} />
      <CategorySidebarFilterCommon {...FILTER_OBJ.colors} />
      <CategorySidebarFilterCommon title="Price" />
    </div>
  );
};

export default CategorySidebarFilter;
