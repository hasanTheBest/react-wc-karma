import React from "react";
import { authorSocialIcon } from "../BlogSidebar";

const PostSocialLinks = () => {
  return (
    <ul className="social-links">
      {authorSocialIcon.map((s) => (
        <li key={s}>
          <a href="#">
            <i className={`fa fa-${s.toLowerCase()}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PostSocialLinks;
