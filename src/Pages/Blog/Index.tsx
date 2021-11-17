import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyledBlog } from "./Blog.Styled";
import BlogItemArticle from "./BlogItemArticle";
import BlogPagination from "./BlogPagination";
import BlogSidebar from "./BlogSidebar";

const Blog: React.FC = () => {
  return (
    <StyledBlog className="blog_area">
      <Container>
        <Row>
          <Col lg="8">
            <div className="blog_left_sidebar">
              <BlogItemArticle />
              <BlogPagination />
            </div>
          </Col>
          <Col lg="4">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </StyledBlog>
  );
};

export default Blog;
