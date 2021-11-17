import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BlogSidebar from "../BlogSidebar";
import SinglePost from "./SinglePost";
import SinglePostCommentForm from "./SinglePostCommentForm";
import SinglePostComments from "./SinglePostComments";
import SinglePostNavigation from "./SinglePostNavigation";

const SingleBlog: React.FC = () => {
  return (
    <section className="blog_area single-post-area section_gap">
      <Container>
        <Row>
          <Col lg="8" className="posts-list">
            <SinglePost />
            <SinglePostNavigation />
            <SinglePostComments />
            <SinglePostCommentForm />
          </Col>
          <Col lg="4" className="col-lg-4">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleBlog;
