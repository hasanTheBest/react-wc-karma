import React from "react";
import {
  Form,
  Col,
  FormControl,
  Button,
  FormLabel,
  FormCheck,
} from "react-bootstrap";

const LoginForm = () => {
  return (
    <div className="login_form_inner">
      <h3>Log in to enter</h3>
      <Form
        className="row login_form"
        id="contactForm"
        noValidate
        // action="contact_process.php"
        // method="post"
      >
        <Col md={12} className="form-group">
          <FormControl
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'User Name'");
            }}
          />
        </Col>
        <Col md={12} className="form-group">
          <FormControl
            type="text"
            id="name"
            name="name"
            placeholder="Password"
            onFocus={() => {
              console.log("this.placeholder = ''");
            }}
            onBlur={() => {
              console.log("this.placeholder = 'Password'");
            }}
          />
        </Col>
        <Col md={12} className="form-group">
          <div className="creat_account">
            <FormCheck type="checkbox" id="f-option2" name="selector" />
            <FormLabel htmlFor="f-option2">Keep me logged in</FormLabel>
          </div>
        </Col>
        <Col md={12} className="form-group">
          <Button
            variant="primary"
            type="submit"
            value="submit"
            className="primary-btn"
          >
            Log In
          </Button>
          <a href="#">Forgot Password?</a>
        </Col>
      </Form>
    </div>
  );
};

export default LoginForm;
