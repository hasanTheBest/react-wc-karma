import React from "react";
import { Col } from "react-bootstrap";

interface PropsType {
  catImgSrc: string;
  catTitle: string;
  colLg: number;
  colMd: number;
}

const CategorySingleDeal = (props: PropsType) => {
  return (
    <>
      <Col lg={props.colLg} md={props.colMd}>
        <div className="single-deal">
          <div className="overlay"></div>
          <img
            className="img-fluid w-100"
            src={props.catImgSrc}
            alt="Category item Image"
          />
          <a href={props.catImgSrc} className="img-pop-up" target="_blank">
            <div className="deal-details">
              <h6 className="deal-title">{props.catTitle}</h6>
            </div>
          </a>
        </div>
      </Col>
    </>
  );
};

export default CategorySingleDeal;
