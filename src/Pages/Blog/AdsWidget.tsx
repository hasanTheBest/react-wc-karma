import React from "react";
import adsImg from "../../resource/img/blog/add.jpg";

const AdsWidget = () => {
  return (
    <div className="single_sidebar_widget ads_widget">
      <a href="#">
        <img className="img-fluid" src={adsImg} alt="Advertisement Image" />
      </a>
      <div className="br"></div>
    </div>
  );
};

export default AdsWidget;
