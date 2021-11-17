import React from "react";
import { Col, Form, FormControl, FormGroup, Button } from "react-bootstrap";

const SinglePostCommentForm = () => {
  return (
    <div className="comment-form">
      <h4>Leave a Reply</h4>
      <Form>
        <FormGroup className="form-inline">
          <Col lg="6" md="6" className="form-group name">
            <FormControl
              type="text"
              id="name"
              placeholder="Enter Name"
              onFocus={() => {
                console.log("this.placeholder = ''");
              }}
              onBlur={() => {
                console.log("this.placeholder = 'Enter Name'");
              }}
            />
          </Col>
          <Col lg="6" md="6" className="form-group email">
            <FormControl
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email address"
              onFocus={() => {
                console.log("this.placeholder = ''");
              }}
              onBlur={() => {
                console.log("this.placeholder = 'Enter Email Address'");
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <FormControl
            type="text"
            id="subject"
            placeholder="Subject"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Subject'");
            }}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl
            as="textarea"
            className="mb-10"
            rows={5}
            name="message"
            placeholder="Message"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Message'");
            }}
            required
          ></FormControl>
        </FormGroup>
        <Button as="a" variant="primary" href="#" className="submit_btn">
          Post Comment
        </Button>
      </Form>
    </div>
  );
};

export default SinglePostCommentForm;
