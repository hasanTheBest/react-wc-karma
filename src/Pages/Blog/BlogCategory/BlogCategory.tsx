import React from "react";
import { Col, Row } from "react-bootstrap";

import catPostImg1 from "../../../resource/img/blog/cat-post/cat-post-1.jpg";

interface CategoryPostType {
  title: string;
  description: string;
}

const categoryPosts: CategoryPostType[] = [
  { title: "Social Life", description: "Enjoy your social life together" },
  { title: "Politics", description: "Be a part of politics" },
  { title: "Food", description: "Let the food be finished" },
];
const BlogCategory: React.FC = () => {
  return (
    <section className="blog_categorie_area">
      <Col>
        <Row>
          {categoryPosts.map((c: CategoryPostType, i) => (
            <Col lg={4}>
              <div className="categories_post">
                <img
                  src={catPostImg1.replace(
                    "cat-post-1.jpg",
                    `cat-post-${i + 1}.jpg`
                  )}
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="blog-details.html">
                      <h5>{c.title}</h5>
                    </a>
                    <div className="border_line"></div>
                    <p>{c.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </section>
  );
};

export default BlogCategory;
