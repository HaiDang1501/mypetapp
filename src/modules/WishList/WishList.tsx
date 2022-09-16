import { Col, Row, Image } from "antd";
import "../../sass/WishList/WishList.scss";
import mainCat from "../../assets/main/main-cat.jpg";
import YourStory from "./YourStory";
import { dataYourStory } from "./data";
import YourWishList from "./YourWishList";
const WishList = () => {
  return (
    <div className="wish-list__background">
      <Row justify="center" align="middle" className="wish-list__wrapper">
        <Col span={6}>
          <div className="wish-list__frame">
            <Image
              width={250}
              height={250}
              src={mainCat}
              className="wish-list__avatar"
            />
          </div>
        </Col>
        <Col span={11}>
          <Row className="wish-list__profile">
            <p className="wish-list__topic">Name: </p>
            <p className="wish-list__outline">abc</p>
          </Row>
          <Row className="wish-list__profile">
            <p className="wish-list__topic">Phone No: </p>
            <p className="wish-list__outline">0123456789</p>
          </Row>
          <Row className="wish-list__profile">
            <p className="wish-list__topic">Address: </p>
            <p className="wish-list__outline">HCM</p>
          </Row>
        </Col>
      </Row>
      {dataYourStory.map((data, index)=> <YourStory key={index} dataStory={data} />)}
      <YourWishList />
    </div>
  );
};

export default WishList;
