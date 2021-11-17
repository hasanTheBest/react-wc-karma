import React from "react";
import ProductImageButton from "./ProductImageButton";
import ProductImageCount from "./ProductImageCount";
import ProductImageDescription from "./ProductImageDescription";

const ProductImageText = () => {
  return (
    <div className="s_product_text">
      <ProductImageDescription />
      <ProductImageCount />
      <ProductImageButton />
    </div>
  );
};

export default ProductImageText;
