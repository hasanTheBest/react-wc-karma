import React from "react";
import { ProductDescription, ProductImage } from ".";
import RelatedProducts from "../Home/RelatedProducts";

const Product: React.FC = () => {
  return (
    <>
      <ProductImage />
      <ProductDescription />
      <RelatedProducts />
    </>
  );
};

export default Product;
