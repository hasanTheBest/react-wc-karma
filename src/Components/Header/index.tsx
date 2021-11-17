import React from "react";
import styled from "styled-components";
import KarmaNavbar from "./Navbar";
import NavbarSearInput from "./NavbarSearInput";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader className="header_area sticky-header">
      <div className="main_menu">
        <KarmaNavbar />
        <NavbarSearInput />
      </div>
    </StyledHeader>
  );
};

export default Header;
