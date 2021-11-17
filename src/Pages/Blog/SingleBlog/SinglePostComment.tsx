import React from "react";
const commenter = "resource/img/blog/c1.jpg";
export interface PostCommentType {
  user: string;
  date: string;
  comment: string;
  count: number;
}

const SinglePostComment = (props: PostCommentType) => {
  return (
    <div
      className={`comment-list ${
        (props.count === 2 || props.count === 3) && "left-padding"
      }`}
    >
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img
              src={commenter.replace("c1.jpg", `c${props.count}.jpg`)}
              alt={props.user}
            />
          </div>
          <div className="desc">
            <h5>
              <a href="#">{props.user}</a>
            </h5>
            <p className="date">{props.date}</p>
            <p className="comment">{props.date}</p>
          </div>
        </div>
        <div className="reply-btn">
          <a href="" className="btn-reply text-uppercase">
            reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePostComment;
