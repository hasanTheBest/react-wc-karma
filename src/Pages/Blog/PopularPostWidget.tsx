import React from "react";
import { format } from "timeago.js";

const pPostImg = "resource/img/blog/popular-post/post1.jpg";

interface PopularPostType {
  img: string;
  title: string;
  time: string;
}

const PopularPostWidget = () => {
  const props: PopularPostType = {
    img: pPostImg,
    title: "The Amazing Hubble",
    time: Date(),
  };
  return (
    <div className="single_sidebar_widget popular_post_widget">
      <h3 className="widget_title">Popular Posts</h3>
      {new Array(4).fill(1).map((n, i) => (
        <div className="media post_item">
          <img
            src={props.img.replace("post1.jpg", `post${i + 1}.jpg`)}
            alt={props.title}
          />
          <div className="media-body">
            <a href="blog-details.html">
              <h3>
                {props.title + " "} {i + 1}
              </h3>
            </a>
            <p>{format(props.time)}</p>
          </div>
        </div>
      ))}

      <div className="br"></div>
    </div>
  );
};

export default PopularPostWidget;
