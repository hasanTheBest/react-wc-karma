import React from "react";
import CategorySidebarFilter from "./CategorySidebarFilter";
import CategorySidebarFilterByCategories from "./CategorySidebarFilterByCategories";

const CategorySidebar = () => {
  return (
    <>
      <CategorySidebarFilterByCategories />
      <CategorySidebarFilter />
    </>
  );
};

export default CategorySidebar;
