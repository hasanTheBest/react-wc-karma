import React from "react";
import { getJSDocTags } from "typescript";

export interface PostTagsType {
  tags: string[];
}

const PostTag = (props: PostTagsType) => {
  return (
    <div className="post_tag">
      {props.tags.map((t: string, i) => (
        <a className={i === 0 ? "active" : ""} href="#">
          {t}
          {i !== props.tags.length - 1 ? "," : ""}
        </a>
      ))}
    </div>
  );
};

export default PostTag;
