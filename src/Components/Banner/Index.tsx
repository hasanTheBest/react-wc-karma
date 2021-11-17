import React from "react";
import { Col, Row } from "react-bootstrap";
import { StyledBanner } from "./Banner.Styled";
import BannerSingleSlide from "./BannerSingleSlide";

import bannerImg from "../../resource/img/banner/banner-img.png";

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <Col>
        <Row className="fullscreen align-items-center justify-content-start">
          <Col lg="12">
            <div className="active-banner-slider owl-carousel">
              {/* single-slide 1 */}
              <BannerSingleSlide
                title="Nike New Collection!"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation."
                imgUrl={bannerImg}
              />

              {/* single-slide 2 */}
              <BannerSingleSlide
                title="Bata New Collection"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    "
                imgUrl={bannerImg}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </StyledBanner>
  );
};

export default Banner;
