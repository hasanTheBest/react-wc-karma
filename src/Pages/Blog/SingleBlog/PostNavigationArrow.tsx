import React from "react";
import { Col } from "react-bootstrap";
import arrowImg from "../../../resource/img/blog/prev.jpg";

interface NavArrowType {
  direction: "left" | "right";
  title: string;
}
const PostNavigationArrow = (props: NavArrowType) => {
  return (
    <Col
      lg="6"
      md="6"
      className={`col-12 nav-${
        props.direction
      } flex-row d-flex justify-content-${
        props.direction === "left" ? "start" : "end"
      } align-items-center`}
    >
      {props.direction === "left" ? (
        <div className="thumb">
          <a href="#">
            <img
              className="img-fluid"
              src={arrowImg}
              alt={`Arrow Indicating left`}
            />
          </a>
        </div>
      ) : (
        <div className="detials">
          <p>Next Post</p>
          <a href="#">
            <h4>{props.title}</h4>
          </a>
        </div>
      )}

      <div className="arrow">
        <a href="#">
          <span
            className={`lnr text-white lnr-arrow-${props.direction}`}
          ></span>
        </a>
      </div>

      {props.direction === "left" ? (
        <div className="detials">
          <p>Prev Post</p>
          <a href="#">
            <h4>{props.title}</h4>
          </a>
        </div>
      ) : (
        <div className="thumb">
          <a href="#">
            <img
              className="img-fluid"
              src={arrowImg.replace("prev", "next")}
              alt={`Arrow Indicating next`}
            />
          </a>
        </div>
      )}
    </Col>
  );
};

export default PostNavigationArrow;
