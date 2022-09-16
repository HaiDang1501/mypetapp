import { Col, Row } from "antd";
import "../../sass/Layout/Footer.scss";
import footerLogo from "../../assets/main/footer-logo.jpg"
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <Row justify="space-around" align="top" className="footer-wrapper">
      <Col span={5} className="footer-wrapper__section">
        <Row >
          <img src={footerLogo} alt=""  className="footer-logo"/>
        </Row>
        <Row justify="space-around" align="middle" className="footer-service">
          <Col><i className="fa-brands fa-facebook footer-service__item"></i></Col>
          <Col><InstagramOutlined className="footer-service__item"/></Col>
          <Col> <TwitterOutlined className="footer-service__item"/></Col>
        </Row>
      </Col>
      <Col span={5} className="footer-wrapper__section">
        <h2 className="footer-title">Contact Us</h2>
        <ul className="footer-info">
          <li>Address: 123 abc, abc, abc, Ho Chi Minh City</li>
          <li>Hotline: +1 (2) 345 6789</li>
          <li>Phone no: +1 (2) 345 6789</li>
          <li>Email: abc@gmail.com</li>
        </ul>
      </Col>
      <Col span={5} className="footer-wrapper__section">
        <h2 className="footer-title">Service</h2>
        <ul className="footer-info">
          <li>Take care</li>
          <li>Hotel</li>
          <li>Walking with pet</li>
          <li>Health care</li>
        </ul>
      </Col>
      <Col span={6} className="footer-wrapper__section">
        <h2 className="footer-title">Other</h2>
        <p className="footer-info">
          For more information about services, pet, etc. Enter your email and
          we'll send you it.{" "}
        </p>
        <form  className="footer-form">
            <input type="text" className="footer-input" placeholder="Enter your email"/>
            <input type="submit" className="footer-submit"/>
        </form>
      </Col>
    </Row>
  );
};

export default Footer;
