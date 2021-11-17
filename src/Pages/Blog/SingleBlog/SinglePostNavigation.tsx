import React from "react";
import { Col, Row } from "react-bootstrap";
import PostNavigationArrow from "./PostNavigationArrow";

const SinglePostNavigation = () => {
  return (
    <div className="navigation-area">
      <Row>
        <PostNavigationArrow
          direction="left"
          title="Space The Final Frontier"
        />
        <PostNavigationArrow direction="right" title="Telescopes 101" />
      </Row>
    </div>
  );
};

export default SinglePostNavigation;
