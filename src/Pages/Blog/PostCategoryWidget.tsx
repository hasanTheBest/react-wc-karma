import React from "react";
type CategoryWidgetType = {
  catName: string;
  postCount: number;
};

const PostCategoryWidget = () => {
  return (
    <div className="single_sidebar_widget post_category_widget">
      <h4 className="widget_title">Post Catgories</h4>
      <ul className="list cat-list">
        {[
          "Technology",
          "Art",
          "Fashion",
          "Lifestyle",
          "Food",
          "Architecture",
          "Programing",
          "Coding",
        ].map((c, i) => (
          <li key={c + i}>
            <a href="#" className="d-flex justify-content-between">
              <p>{c}</p>
              <p>{String(Math.round(Math.random() * 100)).padStart(2, "0")}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="br"></div>
    </div>
  );
};

export default PostCategoryWidget;
