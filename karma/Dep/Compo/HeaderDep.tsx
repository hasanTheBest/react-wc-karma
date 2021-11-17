import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import KarmaNavDropdown from "./Header/KarmaNavDropdown";
import logoImg from "../resource/img/logo.png";

const Header: React.FC = () => {
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
    <header className="header_area sticky-header">
      <div className="main_menu">
        <Navbar expand="lg" variant="light" className="main_box">
          <Container>
            <NavbarBrand className="logo_h" href="index.html">
              <img src={logoImg} alt="Logo" />
            </NavbarBrand>
            <NavbarToggle aria-controls="navbarSupportedContent" />
            <NavbarCollapse id="navbarSupportedContent">
              <Nav className="menu_nav ml-auto">
                <NavItem>
                  <NavLink active>Home</NavLink>
                </NavItem>

                <KarmaNavDropdown title="Shop" item={shopItems} />
                <KarmaNavDropdown title="Blog" item={blogItems} />
                <KarmaNavDropdown title="Pages" item={pageItems} />

                <NavItem>
                  <NavLink href="contact.html">Contact</NavLink>
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
      </div>
    </header>
  );
};
export default Header;
