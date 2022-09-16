
import { Carousel } from "antd";
import "../../sass/Home/Slider.scss";
import container1 from "../../assets/main/image/contain1.jpg";
import container4 from "../../assets/main/image/contain4.webp";
import container5 from "../../assets/main/image/contain5.webp";
import container2 from "../../assets/main/image/contain2.webp";
import container3 from "../../assets/main/image/contain3.jpg";

const Slider = () => {

  return (
    <Carousel autoplay >
      <div className="slide-container ">
        <div className="slide-content">
          <h2 className="slide-content__title">
            Do you want to have little friends?
          </h2>
          <p className="slide-content__intro">
            Come here with your friends. We have everything that you need.
          </p>
        </div>
        <div className="slide-img1">
          <img src={container1} alt="" className="img1" />
        </div>
        <div  className="slide-img2">
          <img src={container4} alt="" className="img2" />
          <button className="button-next next">
            Next | <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="slide-container1 ">
        <div className="slide-img3">
          <img src={container5} alt="" className="img3" />
        </div>
        <div className="slide-img4">
          <img src={container2} alt="" className="img4" />
        </div>
        <div className="slide-content1">
          <h2 className="slide-content__title1">
            To take care of your pet, come here with us.
          </h2>
          <p className="slide-content__intro1">
            Come here with your friends. We have everything that you need
          </p>
          <button className="button-next1 next">
            Next | <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="slide-container1 ">
        <div className="slide-img3">
          <img src={container3} alt="" className="img3" />
        </div>
        <div className="slide-img4">
          <img src={container2} alt="" className="img4" />
        </div>
        <div className="slide-content1">
          <h2 className="slide-content__title1">
            To take care of your pet, come here with us.
          </h2>
          <p className="slide-content__intro1">
            Come here with your friends. We have everything that you need
          </p>
          <button className="button-next1 next">
            Next | <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
