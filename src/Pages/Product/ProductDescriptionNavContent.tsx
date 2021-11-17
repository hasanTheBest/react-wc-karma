import React from "react";
import { TabContent, TabPane } from "react-bootstrap";
import ProductTabContentContact from "./ProductTabContentContact";
import ProductTabContentDescription from "./ProductTabContentDescription";
import ProductTabContentSpecification from "./ProductTabContentSpecification";

const ProductDescriptionNavContent = () => {
  return (
    <TabContent id="myTabContent">
      <TabPane eventKey="description">
        <ProductTabContentDescription />
      </TabPane>
      <TabPane eventKey="specification">
        <ProductTabContentSpecification />
      </TabPane>
      <TabPane eventKey="comments">
        <ProductTabContentSpecification />
      </TabPane>
      <TabPane eventKey="contact">
        <ProductTabContentContact />
      </TabPane>
    </TabContent>
  );
};

export default ProductDescriptionNavContent;
