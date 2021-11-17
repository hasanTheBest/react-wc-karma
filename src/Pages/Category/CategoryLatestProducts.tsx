import React from "react";
import { Row } from "react-bootstrap";
import { ProductDetails } from "../Home/ExclusiveDeal/ExclusiveProductSlide";
import { latestProduct } from "../Home/Products/Index";
import SingleProduct from "../Home/Products/SingleProduct";

const CategoryLatestProducts = () => {
  return (
    <section className="lattest-product-area pb-40 category-list">
      <Row>
        {new Array(8).fill(latestProduct).map((p: ProductDetails, i) => (
          <SingleProduct {...p} itemCount={i + 1} />
        ))}
      </Row>
    </section>
  );
};

export default CategoryLatestProducts;
