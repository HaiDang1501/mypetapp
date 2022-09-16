import { Col, Row } from "antd";
import "../../sass/PetMart/PetDeatil.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import mainCat from "../../assets/main/main-cat.jpg";

const PetDetail = () => {
  return (
    <div>
        <section>
            <Row justify="center" align="middle" className="pet-detail__section1">
                <Col span={10} className="pet-img__wrapper">
                    <div className="pet-sub__frame">
                        <LazyLoadImage 
                            alt=""
                            src={mainCat}
                            effect="blur"
                            className="pet-sub__img"
                        />
                    </div>
                    <div className="pet-main__frame">
                        <LazyLoadImage 
                            alt=""
                            src={mainCat}
                            effect="blur"
                            className="pet-main__img"
                        />
                    </div>
                </Col>
                <Col span={10}>
                    <div className="pet-detail__section1">
                        <div className="pet-section1__line"></div>
                        <Row>
                            <h2 className="pet-section1__title">Pet</h2>
                            <h2 className="pet-section1__title">Information</h2>
                        </Row>
                        <div className="pet-section1__line"></div>
                    </div>
                </Col>
            </Row>
        </section>  
    </div>
  )
}

export default PetDetail
