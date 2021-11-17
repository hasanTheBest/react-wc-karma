import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { Link as LinkR } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import KarmaNavDropdown from "./KarmaNavDropdown";
import logoImg from "../../resource/img/logo.png";

const KarmaNavbar = () => {
  const shopItems = [
    "Shop Category",
    "Product Details",
    "Product Checkout",
    "Shipping Cart",
    "Confirmation",
  ];
  const blogItems = ["Blog", "Blog Details"];
  const pageItems = ["Login", "Tracking", "Elements"];

  return (
    <Navbar expand="lg" variant="light" className="main_box">
      <Container>
        <NavbarBrand className="logo_h" href="index.html">
          <img src={logoImg} alt="Logo" />
        </NavbarBrand>
        <NavbarToggle aria-controls="navbarSupportedContent" />
        <NavbarCollapse id="navbarSupportedContent">
          <Nav className="menu_nav ml-auto">
            <NavItem>
              <NavLink active as={LinkR} to="/">
                Home
              </NavLink>
            </NavItem>

            <KarmaNavDropdown title="Shop" item={shopItems} />
            <KarmaNavDropdown title="Blog" item={blogItems} />
            <KarmaNavDropdown title="Pages" item={pageItems} />

            <NavItem>
              <NavLink as={LinkR} to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="navbar-right">
            <NavItem>
              <NavLink href="#" className="cart">
                <span className="ti-bag"></span>
              </NavLink>
            </NavItem>
            <NavItem>
              <button className="search">
                <span className="lnr lnr-magnifier" id="search"></span>
              </button>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default KarmaNavbar;
