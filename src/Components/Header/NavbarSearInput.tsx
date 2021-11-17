import React from "react";
import { Container, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const StyledSearchInput = styled.div``;

const NavbarSearInput = () => {
  return (
    <StyledSearchInput id="search_input_box">
      <Container>
        <Form className="d-flex justify-content-between">
          <FormControl
            type="text"
            id="search_input"
            placeholder="Search Here"
          />
          <button type="submit" className="btn"></button>
          <span
            className="lnr lnr-cross"
            id="close_search"
            title="Close Search"
          ></span>
        </Form>
      </Container>
    </StyledSearchInput>
  );
};

export default NavbarSearInput;
