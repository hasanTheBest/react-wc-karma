import React from "react";
import { Col, Button, Form, FormGroup, FormControl } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form
      className="row contact_form"
      id="contactForm"
      noValidate
      // action="contact_process.php"
      // method="post"
    >
      <Col md={6}>
        <FormGroup>
          <FormControl
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Enter Your Name'");
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Enter Your Email'");
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Subject"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Enter Your Subject'");
            }}
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <FormControl
            as="textarea"
            name="message"
            id="message"
            rows={1}
            placeholder="Enter Message"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Enter Your Message'");
            }}
          />
        </FormGroup>
      </Col>
      <Col md={12} className="text-right">
        <Button
          type="submit"
          value="submit"
          variant="primary"
          className="primary-btn"
        >
          Send Message
        </Button>
      </Col>
    </Form>
  );
};

export default ContactForm;
