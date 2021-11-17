import React from "react";
interface AuthorType {
  img: string;
  name: string;
  designation: string;
  social: string[];
  description: string;
}
const AuthorWidget = (props: AuthorType) => {
  return (
    <div className="single_sidebar_widget author_widget">
      <img
        className="author_img rounded-circle"
        src={props.img}
        alt={props.name}
      />
      <h4>{props.name}</h4>
      <p>{props.designation}</p>
      <div className="social_icon">
        {props.social.map((s) => (
          <a href="#">
            <i className={`fa fa-${s}`}></i>
          </a>
        ))}
      </div>
      <p>{props.description}</p>
      <div className="br"></div>
    </div>
  );
};

export default AuthorWidget;
