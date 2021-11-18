import React from "react";
import SidebarCategoryItem from "./SidebarCategoryItem";

export interface CategoryType {
  name: string;
  count: number;
  child?: CategoryType[];
}

const CATEGORIES: CategoryType[] = [
  {
    name: "Fruits and Vegetables",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Meat and Fish",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Meat and Fish",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Cooking",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Beverage",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Cooking",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Home and Cleaning",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
  {
    name: "Home Appliance",
    count: Math.round(Math.random() * 100),
    child: [
      {
        name: "Frozen Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Dried Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Fresh Fish",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat Alternative",
        count: Math.round(Math.random() * 100),
      },
      {
        name: "Meat",
        count: Math.round(Math.random() * 100),
      },
    ],
  },
];

const CategorySidebarFilterByCategories = () => {
  return (
    <div className="sidebar-categories">
      <div className="head">Browse Categories</div>
      <ul className="main-categories">
        {CATEGORIES.map((cat, i) => (
          <SidebarCategoryItem key={i} {...cat} />
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebarFilterByCategories;
