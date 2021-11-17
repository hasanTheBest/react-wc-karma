import React from "react";
import { FormControl, FormGroup, InputGroup } from "react-bootstrap";

const NewsletterWidget = () => {
  return (
    <div className="single-sidebar-widget newsletter_widget">
      <h4 className="widget_title">Newsletter</h4>
      <p>
        Here, I focus on a range of items and features that we use in life
        without giving them a second thought.
      </p>
      <FormGroup className="d-flex flex-row">
        <InputGroup>
          <div className="input-group-prepend">
            <InputGroup.Text>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </InputGroup.Text>
          </div>
          <FormControl
            type="text"
            id="inlineFormInputGroup"
            placeholder="Enter email"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Enter email'");
            }}
          />
        </InputGroup>
        <a href="#" className="bbtns">
          Subcribe
        </a>
      </FormGroup>
      <p className="text-bottom">You can unsubscribe at any time</p>
      <div className="br"></div>
    </div>
  );
};

export default NewsletterWidget;
