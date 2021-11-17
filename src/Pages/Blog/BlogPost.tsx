import React from "react";

interface PostType {
  title: string;
  description: string;
  img: string;
}

const BlogPost = (props: PostType) => {
  return (
    <div className="blog_post">
      <img src={props.img} alt={props.title} />
      <div className="blog_details">
        <a href="single-blog.html">
          <h2>{props.title}</h2>
        </a>
        <p>{props.description}</p>
        <a href="single-blog.html" className="white_bg_btn">
          View More
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
