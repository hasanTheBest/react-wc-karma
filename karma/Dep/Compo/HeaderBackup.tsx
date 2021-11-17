import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header: React.FC = () => {
  return (
    <header className="header_area sticky-header">
      <div className="main_menu">
        <Navbar className="navbar navbar-expand-lg navbar-light main_box">
          <Container>
            <NavbarBrand className="logo_h" href="index.html">
              <img src="img/logo.png" alt="Logo" />
            </NavbarBrand>
            <NavbarToggle
              // className="navbar-toggler"
              // type="button"
              // data-toggle="collapse"
              // data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            />
            {/* <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> */}
            {/* </NavbarToggle> */}
            <NavbarCollapse
              // className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              {/* <Nav className="nav navbar-nav menu_nav ml-auto"> */}
              <Nav className="menu_nav ml-auto">
                {/* <NavItem className="nav-item active"> */}
                <NavItem>
                  {/* <NavLink  href="index.html"> */}
                  <NavLink>Home</NavLink>
                </NavItem>

                <NavDropdown
                  title="Dropdown"
                  // className="nav-item submenu dropdown"
                >
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    {[
                      " Shop Category",
                      "Product Details",
                      "Product Checkout",
                      "Shipping Cart",
                      "Confirmation",
                    ].map((item: string): JSX.Element => {
                      return (
                        <NavItem>
                          <NavLink>{item}</NavLink>
                        </NavItem>
                      );
                    })}
                    {/* <li >
                      <a  href="category.html">
                        Shop Category
                      </a>
                    </li>
                    <li >
                      <a  href="single-product.html">
                        Product Details
                      </a>
                    </li>
                    <li >
                      <a  href="checkout.html">
                        Product Checkout
                      </a>
                    </li>
                    <li >
                      <a  href="cart.html">
                        Shopping Cart
                      </a>
                    </li>
                    <li >
                      <a  href="confirmation.html">
                        Confirmation
                      </a>
                    </li> */}
                  </ul>
                </NavDropdown>

                {/* <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li >
                      <a  href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li >
                      <a  href="single-blog.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li >
                      <a  href="login.html">
                        Login
                      </a>
                    </li>
                    <li >
                      <a  href="tracking.html">
                        Tracking
                      </a>
                    </li>
                    <li >
                      <a  href="elements.html">
                        Elements
                      </a>
                    </li>
                  </ul>
                </li> */}
                <NavItem>
                  <NavLink href="contact.html">Contact</NavLink>
                </NavItem>
              </Nav>
              <Nav className="navbar-right">
                <NavItem>
                  <NavLink href="#" className="cart">
                    <span className="ti-bag">bag</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <button className="search">
                    <span className="lnr lnr-magnifier" id="search">
                      search
                    </span>
                  </button>
                </NavItem>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>

      {/* Search Input */}
      {/* <div className="search_input" id="search_input_box">
        <div className="container">
          <form className="d-flex justify-content-between">
            <input
              type="text"
              className="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn"></button>
            <span
              className="lnr lnr-cross"
              id="close_search"
              title="Close Search"
            ></span>
          </form>
        </div>
      </div> */}
    </header>
  );
};
export default Header;
