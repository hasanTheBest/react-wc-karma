import React from "react";
import { FilterCommonType } from "./CategorySidebarFilterCommon";

const CategoryCommonFilterForm = (props: FilterCommonType) => {
  return (
    <form action="#">
      <ul>
        {props.items &&
          Object.entries(props.items).map(([key, value], i) => (
            <li className="filter-list" key={key}>
              <input
                className="pixel-radio"
                type="radio"
                id={key.toLowerCase()}
                name={props.title.toLowerCase()}
              />
              <label htmlFor="apple">
                {key}
                <span>({value})</span>
              </label>
            </li>
          ))}
      </ul>
    </form>
  );
};

export default CategoryCommonFilterForm;
