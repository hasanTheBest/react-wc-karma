import React from "react";

const CategoryFilterSorting = (props: { sortBy: string[]; mr?: string }) => {
  return (
    <div className={`sorting ${props.mr}`}>
      <select>
        {props.sortBy.map((s, i) => (
          <option key={i} value={s.split(" ").join("-").toLocaleLowerCase()}>
            {s.split(" ").join("-").toLocaleLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilterSorting;
