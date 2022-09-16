import { Col, Row, Image } from "antd";
import "../../sass/Home/Review.scss";
import mainCat from "../../assets/main/main-cat.jpg";

const Review = () => {
  return (
    <>
      <div className="home-review__line"></div>
      <Row>
        <Col span={20} offset={2} className="home-review">
          <Row justify="space-around" align="middle">
            <Col span={10} >
              <div className="home-review__frame">
                <Image width={200} src={mainCat} className="home-review__img" />
              </div>
            </Col>
            <Col span={10} style={{margin: "4rem auto"}}>
              <h2 className="home-review__title">
                How to take care ___ of your pet ?
              </h2>
              <p className="home-review__content">
                bes oiw ngur ddi ddeem ddax khuya roofibes oiw ngur ddi ddeem
                ddax khuya roofibes oiw ngur ddi ddeem ddax khuya roofibes oiw
                ngur ddi ddeem ddax khuya roofi
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Review;
