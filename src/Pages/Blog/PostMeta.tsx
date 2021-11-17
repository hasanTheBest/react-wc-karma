import React from "react";

export interface PostMetaType {
  author: string;
  date: string;
  view: number;
}

const PostMeta = (props: PostMetaType) => {
  return (
    <ul className="blog_meta list">
      <li>
        <a href="#">
          {props.author}
          <i className="lnr lnr-user"></i>
        </a>
      </li>
      <li>
        <a href="#">
          {props.date}
          <i className="lnr lnr-calendar-full"></i>
        </a>
      </li>
      <li>
        <a href="#">
          {props.view}M Views<i className="lnr lnr-eye"></i>
        </a>
      </li>
      <li>
        <a href="#">
          06 Comments<i className="lnr lnr-bubble"></i>
        </a>
      </li>
    </ul>
  );
};

export default PostMeta;
