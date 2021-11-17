import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CategoriesDep: React.FC = () => {
  return (
    <section className="category-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img
                    className="img-fluid w-100"
                    src="img/category/c1.jpg"
                    alt=""
                  />
                  <a
                    href="img/category/c1.jpg"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img
                    className="img-fluid w-100"
                    src="img/category/c2.jpg"
                    alt=""
                  />
                  <a
                    href="img/category/c2.jpg"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img
                    className="img-fluid w-100"
                    src="img/category/c3.jpg"
                    alt=""
                  />
                  <a
                    href="img/category/c3.jpg"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Product for Couple</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img
                    className="img-fluid w-100"
                    src="img/category/c4.jpg"
                    alt=""
                  />
                  <a
                    href="img/category/c4.jpg"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="single-deal">
              <div className="overlay"></div>
              <img
                className="img-fluid w-100"
                src="img/category/c5.jpg"
                alt=""
              />
              <a
                href="img/category/c5.jpg"
                className="img-pop-up"
                target="_blank"
              >
                <div className="deal-details">
                  <h6 className="deal-title">Sneaker for Sports</h6>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default CategoriesDep;
