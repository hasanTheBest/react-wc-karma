import React from "react";

const Login: React.FC = () => {
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
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
          </div>
          <div className="col-lg-6">
            <div className="login_form_inner">
              <h3>Log in to enter</h3>
              <form
                className="row login_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate
              >
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
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
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
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
                </div>
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <input type="checkbox" id="f-option2" name="selector" />
                    <label htmlFor="f-option2">Keep me logged in</label>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="primary-btn">
                    Log In
                  </button>
                  <a href="#">Forgot Password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
