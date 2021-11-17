import React from "react";

const TagCloudWidget = () => {
  return (
    <aside className="single-sidebar-widget tag_cloud_widget">
      <h4 className="widget_title">Tag Clouds</h4>
      <ul className="list">
        {[
          "Technology",
          "Fashion",
          "Architecture",
          "Fashion",
          "Food",
          "Technology",
          "Lifestyle",
          "Art",
          "Adventure",
          "Food",
          "Lifestyle",
          "Adventure",
        ].map((t) => (
          <li>
            <a href="">{t}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagCloudWidget;
