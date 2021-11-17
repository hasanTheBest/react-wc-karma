import React, { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  className?: string;
  children?: ReactNode;
  description?: string;
  title: string;
}

const StyledSingleFooterWidget = styled.div``;

const SingleFooterWidget = (props: PropsType) => {
  return (
    <StyledSingleFooterWidget className={props?.className}>
      <h6>{props.title}</h6>
      <p>{props?.description}</p>

      {props?.children}
    </StyledSingleFooterWidget>
  );
};

export default SingleFooterWidget;
