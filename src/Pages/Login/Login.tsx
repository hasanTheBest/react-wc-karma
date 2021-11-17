import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <section className="login_box_area section_gap">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="login_box_img">
              <img className="img-fluid" src="img/login.jpg" alt="" />
              <div className="hover">
                <h4>New to our website?</h4>
                <p>
                  There are advances being made in science and technology
                  everyday, and a good example of this is the
                </p>
                <a className="primary-btn" href="registration.html">
                  Create an Account
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
