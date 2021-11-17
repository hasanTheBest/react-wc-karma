import React from "react";

import loginImg from "../../resource/img/login.jpg";

const LoginSideInfo = () => {
  return (
    <div className="login_box_img">
      <img className="img-fluid" src={loginImg} alt="Login Image" />
      <div className="hover">
        <h4>New to our website?</h4>
        <p>
          There are advances being made in science and technology everyday, and
          a good example of this is the
        </p>
        <a className="primary-btn" href="registration.html">
          Create an Account
        </a>
      </div>
    </div>
  );
};

export default LoginSideInfo;
