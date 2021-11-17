import React from "react";
import { Col } from "react-bootstrap";

interface PropsType {
  time: number;
  text: string;
}

const ExclusiveCountdown = (props: PropsType) => {
  return (
    <Col className="clockinner1 clockinner">
      <h3 className={props.text.toLowerCase()}>{props.time}</h3>
      <span className="smalltext">
        {props.text === "minutes" || props.text === "seconds"
          ? props.text.slice(0, 3)
          : props.text}
      </span>
    </Col>
  );
};

export default ExclusiveCountdown;
