import React from "react";
import Banner from "../../Components/Banner";
import Product from "../Product/Product";
import Categories from "./Categories";
import ExclusiveDeal from "./ExclusiveDeal";
import Features from "./Features";
import RelatedProducts from "./RelatedProducts";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Features />
      <ExclusiveDeal />
      <Product />
      <RelatedProducts />
    </>
  );
};

export default Home;
