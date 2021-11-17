import React from "react";
import SingleProductSlide from "./SingleProductSlide";
import { ProductDetails } from "../ExclusiveDeal/ExclusiveProductSlide";

export const latestProduct: ProductDetails = {
  title: "Apex New Hammer sole for Sports person",
  currentPrice: 150.0,
  oldPrice: 210.0,
  imgSrc: "/resource/img/product/p1.jpg",
};

const Products: React.FC = () => {
  return (
    <section className="owl-carousel active-product-area section_gap">
      {/* single product slide */}
      <SingleProductSlide
        slideTile="Latest Products"
        slideDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        product={latestProduct}
      />
      <SingleProductSlide
        slideTile="Coming Products"
        slideDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        product={latestProduct}
      />
    </section>
  );
};
export default Products;
