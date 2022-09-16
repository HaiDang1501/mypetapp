import { Button, Checkbox, Col, Row } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import "../../sass/PetMart/PetMart.scss";
import FeaturePetItem from "../../components/core/FeaturePetItem";
import { dataFeaturedPet } from "../../modules/Home/data";
import "../../sass/Home/FeaturedPet.scss";
import { selectColorData, selectAge } from "./data";

const PetMart = () => {
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log(`checked = ${checkedValues}`);
  };
  return (
    <Row justify="space-between" align="top" className="pet-mart">
      <Col span={3.5}>
        <Row>
          <h2 className="pet-mart__title">Filter </h2>
          <h2 className="pet-mart__title--css" style={{ color: "#333" }}>
            By
          </h2>
        </Row>
        <div className="pet-mart__line"></div>
        <div className="pet-mart__item">
          <h3 className="title__item">Color</h3>
          <div className="pet-mart__item--line"></div>
          <div className="color-item__container">
            {selectColorData.map((color) => {
              return (
                <div
                  key={color.colorCode}
                  style={{ background: `${color.colorCode}` }}
                  className="color-item"
                >
                  {" "}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pet-mart__item">
          <h3 className="title__item">Age</h3>
          <div className="pet-mart__item--line"></div>
          <Checkbox.Group onChange={onChange} className="age__item">
            {selectAge.map((age) => {
              return (
                <Row>
                  <Col span={24}>
                    <Checkbox key={age.age} value={age.age} checked={age.checked}>{" "}{age.description}</Checkbox>
                  </Col>
                </Row>
              );
            })}
          </Checkbox.Group>
        </div>
      </Col>
      <Col span={20}>
        <Row justify="center">
          <h2 className="pet-mart__title">Guinea Pig </h2>
        </Row>
        <div className="pet-mart__line"></div>
        {/* get card data ground by color and age from check box  */}
        <div className="featured-pet__container">
          {dataFeaturedPet.map((data, index) => {
            return <FeaturePetItem dataPet={data} key={index} />;
          })}
        </div>
      </Col>
    </Row>
  );
};

export default PetMart;
