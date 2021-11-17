import React from "react";
import Banner from "../../Components/Banner/Index";
import Categories from "./Categories/Index";
import ExclusiveDeal from "./ExclusiveDeal/Index";
import Features from "./Features/Index";
import Products from "./Products/Index";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <ExclusiveDeal />
      <Features />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
