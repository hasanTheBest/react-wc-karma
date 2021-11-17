import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";

const ProductDescriptionNavTabs = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="description" id="myTabContent">
      {["Description", "Specification", "Comments", "Reviews"].map((t) => (
        <NavItem key={t}>
          <NavLink eventKey={t.toLowerCase()}>{t}</NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default ProductDescriptionNavTabs;
