import React from "react";
import CategoryLatestProducts from "./CategoryLatestProducts";
import CategoryFilterBarBottom from "./CategoryFilterBarBottom";
import CategoryFilterBarTop from "./CategoryFilterBarTop";

const CategoryContent = () => {
  return (
    <>
      <CategoryFilterBarTop />
      <CategoryLatestProducts />
      <CategoryFilterBarBottom />
    </>
  );
};

export default CategoryContent;
