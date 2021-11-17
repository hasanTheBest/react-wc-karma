import React from "react";
import { Link as LinkR } from "react-router-dom";
import { NavDropdown, NavItem, NavLink } from "react-bootstrap";

interface PropsType {
  title: string;
  item: string[];
}
const KarmaNavDropdown = (props: PropsType): JSX.Element => {
  return (
    <NavDropdown title={props.title}>
      {props.item.map((item: string): JSX.Element => {
        return (
          <NavItem>
            <NavLink as={LinkR} to={item.split(" ").join("-").toLowerCase()}>
              {item}
            </NavLink>
          </NavItem>
        );
      })}
    </NavDropdown>
  );
};

export default KarmaNavDropdown;
