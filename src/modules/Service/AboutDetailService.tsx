import { Col, Row } from "antd";
import "../../sass/Service/AboutDetailService.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import takecare from "../../assets/main/takecare.png";
import health from "../../assets/main/health.png";
import walking from "../../assets/main/walking.png";
import night from "../../assets/main/night.png";
const AboutDetailService = () => {
  return (
    <Row justify="center" className="about-service__wrapper">
      <Col span={8} className="about-service__section14">
        <div className="about-service__section1">
          <h2 className="about-service__section1-title">Our Pet Care </h2>
          <h2
            className="about-service__section1-title"
            style={{ color: "#C79572" }}
          >
            {"   "} Services
          </h2>
          <p className="about-service__description">
            Include hair trimmng, grooming, nail polish, nail care, etc.
          </p>
        </div>
        <div className="about-service__section4">
          <h3 className="about-service__section4-title">
            Our Pet Care Services
          </h3>
          <p className="about-service__description">
            Include hair trimmng, grooming, nail polish, nail care, etc.
          </p>
        </div>
      </Col>
      <Col span={6.5} className="about-service__section2356">
        <div className="about-service__section2">
          <LazyLoadImage
            src={takecare}
            alt="spa for your pet"
            effect="blur"
            className="about-service__img"
          />
          <p className="about-service__description">
            Include hair trimmng, grooming, nail polish, nail care, etc.
          </p>
        </div>
        <div className="about-service__section5">
          <LazyLoadImage
            src={walking}
            alt="walking with your pet"
            effect="blur"
            className="about-service__img"
          />

          <p className="about-service__description">
            Include hair trimmng, grooming, nail polish, nail care, etc.
          </p>
        </div>
      </Col>
      <Col span={6} className="about-service__section2356">
        <div className="about-service__section3">
          <LazyLoadImage
            src={health}
            alt="hospital for your pet"
            effect="blur"
            className="about-service__img"
          />
          <p className="about-service__description">
            Include hair trimmng, grooming, nail polish, nail care, etc.
          </p>
        </div>
        <div className="about-service__section6">
          <LazyLoadImage
            src={night}
            alt="take care of your pet when you absent"
            effect="blur"
            className="about-service__img"
          />
          <p className="about-service__description">
            Include hair trimmng, grooming, nail polish, nail care, etc.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default AboutDetailService;
