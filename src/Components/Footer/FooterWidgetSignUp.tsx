import React from "react";
import { Form, FormControl } from "react-bootstrap";

const FooterWidgetSignUp = () => {
  const handleFocusEmail = () => {
    console.log("this.placeholder = ''");
  };

  const handleBlurEmail = () => {
    console.log("this.placeholder = ''");
  };

  return (
    <div className="" id="mc_embed_signup">
      <Form
        className="form-inline"
        target="_blank"
        // noValidate={true}
        // action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
        // method="get"
      >
        <div className="d-flex flex-row">
          <FormControl
            name="EMAIL"
            placeholder="Enter Email"
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            required
            type="email"
          />

          <button className="click-btn btn btn-default">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
          <div style={{ position: "absolute", left: "-5000px" }}>
            <input
              name="b_36c4fd991d266f23781ded980_aefe40901a"
              tabIndex={-1}
              value=""
              type="text"
            />
          </div>
        </div>
        <div className="info"></div>
      </Form>
    </div>
  );
};

export default FooterWidgetSignUp;
