import React from "react";
import { Col } from "react-bootstrap";

interface PropsType {
  imgSrc: string;
  title: string;
  description: string;
}

const SingleFeature = (props: PropsType) => {
  return (
    <Col lg="3" md="6" sm="6">
      <div className="single-features">
        <div className="f-icon">
          <img src={props.imgSrc} alt={props.title} />
        </div>
        <h6>{props.title}</h6>
        <p>{props.description}</p>
      </div>
    </Col>
  );
};

export default SingleFeature;
