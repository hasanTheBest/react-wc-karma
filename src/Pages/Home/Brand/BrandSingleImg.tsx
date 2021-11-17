import React from "react";

interface PropsType {
  imgUrl: string;
  brandUrl?: string;
}

const BrandSingleImg = (props: PropsType) => {
  return (
    <a className="col single-img" href={props?.brandUrl}>
      <img
        className="img-fluid d-block mx-auto"
        src={props.imgUrl}
        alt="Brand Image"
      />
    </a>
  );
};

export default BrandSingleImg;
