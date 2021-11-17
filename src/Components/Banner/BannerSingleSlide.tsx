import React from "react";
import { Col, Row } from "react-bootstrap";

interface PropsType {
  title: string;
  content: string;
  imgUrl: string;
}

const BannerSingleSlide = (props: PropsType) => {
  return (
    <Row className="row single-slide align-items-center d-flex">
      <Col lg="5" md="6">
        <div className="banner-content">
          <h1>{props.title}</h1>
          <p>{props.content} </p>
          <div className="add-bag d-flex align-items-center">
            <a className="add-btn" href="">
              <span className="lnr lnr-cross"></span>
            </a>
            <span className="add-text text-uppercase">Add to Bag</span>
          </div>
        </div>
      </Col>
      <Col lg="7">
        <div className="banner-img">
          <img className="img-fluid" src={props.imgUrl} alt="Banner Image" />
        </div>
      </Col>
    </Row>
  );
};

export default BannerSingleSlide;
