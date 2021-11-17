import React from "react";
import { Col, Row } from "react-bootstrap";

const BlogDetailOthers = () => {
  return (
    <>
      <div className="quotes">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training.
      </div>
      <Row>
        <div className="col-6">
          <img className="img-fluid" src="img/blog/post-img1.jpg" alt="" />
        </div>
        <div className="col-6">
          <img className="img-fluid" src="img/blog/post-img2.jpg" alt="" />
        </div>
        <Col lg={12} className="mt-25">
          <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower.
          </p>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default BlogDetailOthers;
