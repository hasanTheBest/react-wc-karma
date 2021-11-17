import React from "react";
import { Col, Row } from "react-bootstrap";
import { postMeta, postTags } from "../BlogItemArticle";
import { authorSocialIcon } from "../BlogSidebar";
import PostMeta from "../PostMeta";
import PostTag from "../PostTag";
import BlogDetailOthers from "./BlogDetailOthers";
import BlogDetails from "./BlogDetails";
import PostSocialLinks from "./PostSocialLinks";

const SinglePost = () => {
  return (
    <Row className="single-post">
      <Col lg="12">
        <div className="feature-img">
          <img
            className="img-fluid"
            src="../../../resource/img/blog/feature-img1.jpg"
            alt=""
          />
        </div>
      </Col>
      <Col lg="3" md="3">
        <div className="blog_info text-right">
          <PostTag {...postTags} />
          <PostMeta {...postMeta} />
          <PostSocialLinks />
        </div>
      </Col>
      <Col lg="9" md="9" className="blog_details">
        <BlogDetails />
      </Col>
      <Col lg="12">
        <BlogDetailOthers />
      </Col>
    </Row>
  );
};

export default SinglePost;
