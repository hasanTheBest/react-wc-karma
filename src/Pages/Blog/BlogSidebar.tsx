import React from "react";
import AuthorWidget from "./AuthorWidget";
import SearchWidget from "./SearchWidget";

import authorImg from "../../resource/img/blog/author.png";
import PopularPostWidget from "./PopularPostWidget";
import AdsWidget from "./AdsWidget";
import NewsletterWidget from "./NewsletterWidget";
import TagCloudWidget from "./TagCloudWidget";
import PostCategoryWidget from "./PostCategoryWidget";

export const authorSocialIcon: string[] = [
  "facebook",
  "twitter",
  "github",
  "behance",
];

const BlogSidebar = () => {
  return (
    <aside className="blog_right_sidebar">
      <SearchWidget />
      <AuthorWidget
        name="Charlie Barber"
        designation="Senior blog writer"
        img={authorImg}
        description="Boot camps have its supporters andit sdetractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get. Boot camps have itssuppor ters andits detractors.
        "
        social={authorSocialIcon}
      />
      <PopularPostWidget />
      <PostCategoryWidget />
      <AdsWidget />
      <NewsletterWidget />
      <TagCloudWidget />
    </aside>
  );
};

export default BlogSidebar;
