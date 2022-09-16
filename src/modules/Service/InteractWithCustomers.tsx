import { Col, Row } from "antd";
import { dataInteractCustomers } from "./data";
import "../../sass/Service/InteractWithCustomers.scss";

const InteractWithCustomers = () => {
  return (
    <Row justify="center">
      <Col span={20} offset={2} className="interact-customers">
        {dataInteractCustomers.map((item, index) => {
          return (
            <div key={index} className="interact-customers__item">
              <img src={item.src} alt={item.alt} className="interact-customer__img" />
              <p className="interact-customer__content">
                {item.description}
              </p>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default InteractWithCustomers;
