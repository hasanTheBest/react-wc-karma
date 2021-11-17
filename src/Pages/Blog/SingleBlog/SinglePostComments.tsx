import React from "react";
import SinglePostComment from "./SinglePostComment";

const SinglePostComments = () => {
  return (
    <div className="comments-area">
      <h4>05 Comments</h4>
      {new Array(5).fill(1).map((n, i) => (
        <SinglePostComment
          key={i}
          count={i + 1}
          user="Emily Bronette"
          comment="Never say goodbye till the end comes!"
          date={new Date().toLocaleDateString(undefined, undefined)}
        />
      ))}
    </div>
  );
};

export default SinglePostComments;
