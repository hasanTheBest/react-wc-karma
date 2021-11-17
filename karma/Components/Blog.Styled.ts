import styled from "styled-components";

const StyledBanner = styled.section`
  .latest_blog_area {
  }
  .latest_blog_inner {
  }
  .l_blog_item {
    .l_blog_img {
    }
    .l_blog_text {
      .date {
        margin-top: 24px;
        margin-bottom: 15px;
        a {
          color: $pfont;
          font-size: 12px;
        }
      }
      h4 {
        font-size: 18px;
        color: $dip;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 0px;
        padding-bottom: 20px;
        @include transition;
        &:hover {
          color: $baseColor;
        }
      }
      p {
        margin-bottom: 0px;
        padding-top: 20px;
      }
    }
  }

  /* Causes Area css
============================================================================================ */
  .causes_area {
  }
  .causes_slider {
    .owl-dots {
      text-align: center;
      margin-top: 80px;
      .owl-dot {
        height: 14px;
        width: 14px;
        background: #eeeeee;
        display: inline-block;
        margin-right: 7px;
        &:last-child {
          margin-right: 0px;
        }
        &.active {
          background: $baseColor;
        }
      }
    }
  }
  .causes_item {
    background: #fff;
    .causes_img {
      position: relative;
      .c_parcent {
        position: absolute;
        bottom: 0px;
        width: 100%;
        left: 0px;
        height: 3px;
        background: rgba(255, 255, 255, 0.5);
        span {
          width: 70%;
          height: 3px;
          background: $baseColor;
          position: absolute;
          left: 0px;
          bottom: 0px;
          &:before {
            content: "75%";
            position: absolute;
            right: -10px;
            bottom: 0px;
            background: $baseColor;
            color: #fff;
            padding: 0px 5px;
          }
        }
      }
    }
    .causes_text {
      padding: 30px 35px 40px 30px;
      h4 {
        color: $dip;
        font-family: $primary-font;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
        cursor: pointer;
        &:hover {
          color: $baseColor;
        }
      }
      p {
        font-size: 14px;
        line-height: 24px;
        color: $pfont;
        font-weight: 300;
        margin-bottom: 0px;
      }
    }
    .causes_bottom {
      a {
        width: 50%;
        border: 1px solid $baseColor;
        text-align: center;
        float: left;
        line-height: 50px;
        background: $baseColor;
        color: #fff;
        font-family: $primary-font;
        font-size: 14px;
        font-weight: 500;
        & + a {
          border-color: #eeeeee;
          background: #fff;
          font-size: 14px;
          color: $dip;
        }
      }
    }
  }

  /*================= latest_blog_area css =============*/
  .latest_blog_area {
    background: #f9f9ff;
  }
  .single-recent-blog-post {
    margin-bottom: 30px;
    .thumb {
      overflow: hidden;
      img {
        transition: all 0.7s linear;
      }
    }
    .details {
      padding-top: 30px;
      .sec_h4 {
        line-height: 24px;
        padding: 10px 0px 13px;
        transition: all 0.3s linear;
        &:hover {
          color: $pfont;
        }
      }
    }
    .date {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
    }
    &:hover {
      img {
        transform: scale(1.23) rotate(10deg);
      }
    }
  }
  .tags {
    .tag_btn {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      border: 1px solid #eeeeee;
      display: inline-block;
      padding: 1px 18px;
      text-align: center;
      color: $dip;
      &:before {
        background: $baseColor;
      }
      & + .tag_btn {
        margin-left: 2px;
      }
    }
  }

  /*========= blog_categorie_area css ===========*/
  .blog_categorie_area {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .categories_post {
    position: relative;
    text-align: center;
    cursor: pointer;
    img {
      max-width: 100%;
    }
    .categories_details {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      background: rgba(34, 34, 34, 0.8);
      color: #fff;
      transition: all 0.3s linear;
      display: flex;
      align-items: center;
      justify-content: center;
      h5 {
        margin-bottom: 0px;
        font-size: 18px;
        line-height: 26px;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        //			&:before{
        //				content: "";
        //				height: 1px;
        //				width: 100%;
        //				background: #fff;
        //				position: absolute;
        //				bottom: 0px;
        //				left: 0px;
        //			}
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 26px;
        margin-bottom: 0px;
      }
      .border_line {
        margin: 10px 0px;
        background: #fff;
        width: 100%;
        height: 1px;
      }
    }
    &:hover {
      .categories_details {
        background: rgba(255, 186, 0, 0.8);
      }
    }
  }

  /*============ blog_left_sidebar css ==============*/
  .blog_area {
  }
  .blog_left_sidebar {
  }
  .blog_item {
    margin-bottom: 40px;
  }
  .blog_info {
    padding-top: 30px;
    .post_tag {
      padding-bottom: 20px;
      a {
        font: 300 14px/21px $primary-font;
        color: $dip;
        &:hover {
          color: $pfont;
        }
        &.active {
          color: $primary-color;
        }
      }
    }
    .blog_meta {
      li {
        a {
          font: 300 14px/20px $primary-font;
          color: #777777;
          vertical-align: middle;
          padding-bottom: 12px;
          display: inline-block;
          i {
            color: $dip;
            font-size: 16px;
            font-weight: 600;
            padding-left: 15px;
            line-height: 20px;
            vertical-align: middle;
          }
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
  .blog_post {
    img {
      max-width: 100%;
    }
    .white_bg_btn {
      border: 1px solid #eeeeee;
      text-transform: uppercase;
      font-size: 12px;
      padding: 0 30px;
      line-height: 34px;
      display: inline-block;
      color: $title-color;
    }
  }
  .blog_details {
    padding-top: 20px;
    h2 {
      font-size: 24px;
      line-height: 36px;
      color: $dip;
      font-weight: 600;
      transition: all 0.3s linear;
      &:hover {
        color: $baseColor;
      }
    }
    p {
      margin-bottom: 26px;
    }
  }
  .view_btn {
    font-size: 14px;
    line-height: 36px;
    display: inline-block;
    color: $dip;
    font-weight: 500;
    padding: 0px 30px;
    background: #fff;
  }

  .blog_right_sidebar {
    border: 1px solid #eeeeee;
    background: #fafaff;
    padding: 30px;
    .widget_title {
      font-size: 18px;
      line-height: 25px;
      background: $primary-color;
      text-align: center;
      color: #fff;
      padding: 8px 0px;
      margin-bottom: 30px;
    }
    .search_widget {
      .input-group {
        .form-control {
          font-size: 14px;
          line-height: 29px;
          border: 0px;
          width: 100%;
          font-weight: 300;
          color: #fff;
          padding-left: 20px;
          border-radius: 45px;
          z-index: 0;
          background: $primary-color;
          @include placeholder {
            color: #fff;
          }
          &:focus {
            box-shadow: none;
          }
        }
        .btn-default {
          position: absolute;
          right: 20px;
          background: transparent;
          border: 0px;
          box-shadow: none;
          font-size: 14px;
          color: #fff;
          padding: 0px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
      }
    }
    .author_widget {
      text-align: center;
      h4 {
        font-size: 18px;
        line-height: 20px;
        color: $dip;
        margin-bottom: 5px;
        margin-top: 30px;
      }
      p {
        margin-bottom: 0px;
      }
      .social_icon {
        padding: 7px 0px 15px;
        a {
          font-size: 14px;
          color: $dip;
          transition: all 0.2s linear;
          & + a {
            margin-left: 20px;
          }
          &:hover {
            color: $baseColor;
          }
        }
      }
    }
    .popular_post_widget {
      .post_item {
        .media-body {
          justify-content: center;
          align-self: center;
          padding-left: 20px;
          h3 {
            font-size: 14px;
            line-height: 20px;
            color: $dip;
            margin-bottom: 4px;
            transition: all 0.3s linear;
            &:hover {
              color: $primary-color;
            }
          }
          p {
            font-size: 12px;
            line-height: 21px;
            margin-bottom: 0px;
          }
        }
        & + .post_item {
          margin-top: 20px;
        }
      }
    }
    .post_category_widget {
      .cat-list {
        li {
          border-bottom: 2px dotted #eee;
          transition: all 0.3s ease 0s;
          padding-bottom: 12px;
          a {
            font-size: 14px;
            line-height: 20px;
            color: #777;
            p {
              margin-bottom: 0px;
            }
          }
          & + li {
            padding-top: 15px;
          }
          &:hover {
            border-color: $primary-color;
            a {
              color: $primary-color;
            }
          }
        }
      }
    }
    .newsletter_widget {
      text-align: center;
      p {
      }
      .form-group {
        margin-bottom: 8px;
      }
      .input-group-prepend {
        margin-right: -1px;
      }
      .input-group-text {
        background: #fff;
        border-radius: 0px;
        vertical-align: top;
        font-size: 12px;
        line-height: 36px;
        padding: 0px 0px 0px 15px;
        border: 1px solid #eeeeee;
        border-right: 0px;
      }
      .form-control {
        font-size: 12px;
        line-height: 24px;
        color: #cccccc;
        border: 1px solid #eeeeee;
        border-left: 0px;
        border-radius: 0px;
        @include placeholder {
          color: #cccccc;
        }
        &:focus {
          outline: none;
          box-shadow: none;
        }
      }
      .bbtns {
        background: $primary-color;
        color: #fff;
        font-size: 12px;
        line-height: 38px;
        display: inline-block;
        font-weight: 500;
        padding: 0px 24px 0px 24px;
        border-radius: 0;
      }
      .text-bottom {
        font-size: 12px;
      }
    }
    .tag_cloud_widget {
      ul {
        li {
          display: inline-block;
          a {
            display: inline-block;
            border: 1px solid #eee;
            background: #fff;
            padding: 0px 13px;
            margin-bottom: 8px;
            transition: all 0.3s ease 0s;
            color: $dip;
            font-size: 12px;
            &:hover {
              background: $primary-color;
              color: #fff;
            }
          }
        }
      }
    }
    .br {
      width: 100%;
      height: 1px;
      background: rgb(238, 238, 238);
      margin: 30px 0px;
    }
  }

  .blog-pagination {
    padding-top: 25px;
    padding-bottom: 95px;
    .page-link {
      border-radius: 0;
    }
    .page-item {
      border: none;
    }
  }

  .page-link {
    background: transparent;
    font-weight: 400;
  }

  .blog-pagination .page-item.active .page-link {
    @extend .gradient-bg;
    color: $white;
  }

  .blog-pagination .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #8a8a8a;
    border: none;
  }

  .blog-pagination .page-link .lnr {
    font-weight: 600;
  }

  .blog-pagination .page-item:last-child .page-link,
  .blog-pagination .page-item:first-child .page-link {
    border-radius: 0;
  }

  .blog-pagination .page-link:hover {
    color: #fff;
    text-decoration: none;
    background-color: $baseColor;
    border-color: #eee;
  }

  /*============ Start Blog Single Styles  =============*/

  .single-post-area {
    .social-links {
      padding-top: 10px;
      li {
        display: inline-block;
        margin-bottom: 10px;
        a {
          color: #cccccc;
          padding: 7px;
          font-size: 14px;
          transition: all 0.2s linear;
          &:hover {
            color: $dip;
          }
        }
      }
    }
    .blog_details {
      padding-top: 26px;
      p {
        margin-bottom: 10px;
      }
    }
    .quotes {
      margin-top: 20px;
      margin-bottom: 30px;
      padding: 24px 35px 24px 30px;
      background-color: rgb(255, 255, 255);
      box-shadow: -20.84px 21.58px 30px 0px rgba(176, 176, 176, 0.1);
      font-size: 14px;
      line-height: 24px;
      color: #777;
      font-style: italic;
    }
    .arrow {
      position: absolute;
      .lnr {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .thumb {
      .overlay-bg {
        background: rgba(#000, 0.8);
      }
    }
    .navigation-area {
      border-top: 1px solid #eee;
      padding-top: 30px;
      margin-top: 60px;
      p {
        margin-bottom: 0px;
      }
      h4 {
        font-size: 18px;
        line-height: 25px;
        color: $dip;
      }
      .nav-left {
        text-align: left;
        .thumb {
          margin-right: 20px;
          background: #000;
          img {
            @include transition();
          }
        }
        .lnr {
          margin-left: 20px;
          opacity: 0;
          @include transition();
        }
        &:hover {
          .lnr {
            opacity: 1;
          }
          .thumb {
            img {
              opacity: 0.5;
            }
          }
        }
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
      }
      .nav-right {
        text-align: right;
        .thumb {
          margin-left: 20px;
          background: #000;
          img {
            @include transition();
          }
        }
        .lnr {
          margin-right: 20px;
          opacity: 0;
          @include transition();
        }
        &:hover {
          .lnr {
            opacity: 1;
          }
          .thumb {
            img {
              opacity: 0.5;
            }
          }
        }
      }
    }

    .sidebar-widgets {
      @media (max-width: 991px) {
        padding-bottom: 0px;
      }
    }
  }

  .comments-area {
    background: #fafaff;
    border: 1px solid #eee;
    padding: 50px 30px;
    margin-top: 50px;
    @media (max-width: 414px) {
      padding: 50px 8px;
    }
    h4 {
      text-align: center;
      margin-bottom: 50px;
      color: $dip;
      font-size: 18px;
    }
    h5 {
      font-size: 16px;
      margin-bottom: 0px;
    }
    a {
      color: $dip;
    }
    .comment-list {
      padding-bottom: 48px;
      &:last-child {
        padding-bottom: 0px;
      }
      &.left-padding {
        padding-left: 25px;
      }
      @media (max-width: 413px) {
        .single-comment {
          h5 {
            font-size: 12px;
          }
          .date {
            font-size: 11px;
          }
          .comment {
            font-size: 10px;
          }
        }
      }
    }
    .thumb {
      margin-right: 20px;
    }
    .date {
      font-size: 13px;
      color: #cccccc;
      margin-bottom: 13px;
    }
    .comment {
      color: #777777;
      margin-bottom: 0px;
    }
    .btn-reply {
      background-color: #fff;
      color: $dip;
      border: 1px solid #eee;
      padding: 2px 18px;
      font-size: 12px;
      display: block;
      font-weight: 600;
      @include transition();
      &:hover {
        background-color: $baseColor;
        color: #fff;
      }
    }
  }

  .comment-form {
    background: #fafaff;
    text-align: center;
    border: 1px solid #eee;
    padding: 47px 30px 43px;
    margin-top: 50px;
    margin-bottom: 40px;
    h4 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 18px;
      line-height: 22px;
      color: $dip;
    }
    .name {
      padding-left: 0px;
      @media (max-width: 767px) {
        padding-right: 0px;
        margin-bottom: 1rem;
      }
    }
    .email {
      padding-right: 0px;
      @media (max-width: 991px) {
        padding-left: 0px;
      }
    }
    .form-control {
      padding: 8px 20px;
      background: #fff;
      border: none;
      border-radius: 0px;
      width: 100%;
      font-size: 14px;
      color: #777777;
      border: 1px solid transparent;
      &:focus {
        box-shadow: none;
        border: 1px solid #eee;
      }
    }
    textarea {
      &.form-control {
        height: 140px;
        resize: none;
      }
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-size: 13px;
      color: #777;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: 13px;
      color: #777;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-size: 13px;
      color: #777;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-size: 13px;
      color: #777;
    }
  }
`;
