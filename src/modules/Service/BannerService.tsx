import { CheckOutlined } from "@ant-design/icons";
import { Col, Row, Image } from "antd";
import "../../sass/Service/BannerService.scss";
import bannerService1 from "../../assets/main/bannerService1.webp";
import bannerService2 from "../../assets/main/bannerService2.jpg";

const BannerService = () => {
  return (
    <Row justify="space-between" align="top" className="service-banner">
      <Col span={5.5} >
        <div className="service-frame1">
          <Image width={250} height={313} src={bannerService1} className="service-frame__img1" />
        </div>
      </Col>
      <Col span={5.5}>
        <div className="service-frame2">
          <Image width={250} height={313} src={bannerService2} className="service-frame__img2" />
        </div>
      </Col>
      <Col span={12} className="service-banner__info">
        <Row>
          <h1 className="banner-info__title">Our Pet Care</h1>
          <h1 className="banner-info__title" style={{ color: "#fff" }}>
            Services
          </h1>
        </Row>
        <ul className="banner-info__description">
          <li>
            <CheckOutlined style={{ color: "#fff" }} />
            {"  "}thu 2 la ngay dau tuan
          </li>
          <li>
            {" "}
            <CheckOutlined style={{ color: "#fff" }} />
            {"  "}be luon co gang cham ngoan
          </li>
          <li>
            <CheckOutlined style={{ color: "#fff" }} />
            {"  "}thu 3 thu 4 thu 5
          </li>
          <li>
            <CheckOutlined style={{ color: "#fff" }} />
            {"  "}moi ngay deu luon co gang
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default BannerService;
