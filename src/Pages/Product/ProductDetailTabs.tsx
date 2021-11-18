import React from "react";
import { Tabs, Tab, NavLink } from "react-bootstrap";
import ProductTabContentContact from "./ProductTabContentContact";
import ProductTabContentDescription from "./ProductTabContentDescription";
import ProductTabContentSpecification from "./ProductTabContentSpecification";

const ProductDescriptionNavTabs2 = () => {
  return (
    <Tabs defaultActiveKey="description">
      <Tab title="Description" eventKey="description">
        <ProductTabContentDescription />
      </Tab>
      <Tab title="Specification" eventKey="specification">
        <ProductTabContentSpecification />
      </Tab>
      <Tab title="Comments" eventKey="comments">
        <ProductTabContentContact />
      </Tab>
      <Tab title="Reviews" eventKey="reviews">
        <ProductTabContentDescription />
      </Tab>
    </Tabs>
  );
};

export default ProductDescriptionNavTabs2;
