import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryType } from "./CategorySidebarFilterByCategories";

const SidebarCategoryItem = (props: CategoryType) => {
  const [open, setOpen] = useState(false);

  const { name, count, child } = props;
  const nameFormatted = name.trim().split(" ").join("-");

  return (
    <li className="main-nav-list">
      <Button
        aria-controls={nameFormatted}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        variant="link"
        as="a"
      >
        <span className="lnr lnr-arrow-right"></span>
        {name}
        <span className="number">({count})</span>
      </Button>
      <Collapse in={open}>
        <ul id={nameFormatted}>
          {child?.map(({ name, count }) => (
            <li className="main-nav-list child" key={count}>
              <Link to={name}>
                {name}
                <span className="number">({count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  );
};

export default SidebarCategoryItem;
