import React from "react";
import { Col } from "react-bootstrap";
import BlogPost from "./BlogPost";
import PostTag, { PostTagsType } from "./PostTag";
import PostMeta, { PostMetaType } from "./PostMeta";

// import postImg from "../../resource/img/blog/main-blog/m-blog-1.jpg";
const postImg = "resource/img/blog/main-blog/m-blog-1.jpg";

export const postTags: PostTagsType = {
  tags: ["Food", "Technologies", "Politics", "Lifestyle"],
};

export const postMeta: PostMetaType = {
  author: "Mark Twin",
  view: 1.2,
  date: "12 Dec, 2018",
};

const BlogItemArticle = () => {
  return (
    <>
      {new Array(5).fill(1).map((v, i) => (
        <article className="row blog_item" key={i}>
          <Col md="3">
            <div className="blog_info text-right">
              <PostTag tags={postTags.tags} />
              <PostMeta {...postMeta} />
            </div>
          </Col>
          <Col md="9">
            <BlogPost
              title="Astronomy Binoculars A Great Alternative"
              img={postImg.replace("1.jpg", `${i + 1}.jpg`)}
              description="MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction.
            "
            />
          </Col>
        </article>
      ))}
    </>
  );
};

export default BlogItemArticle;
