import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../sass/WishList/WishList.scss";
import { PlusOutlined } from "@ant-design/icons";
import { dataStoryProps } from "../../@types/interface";

const YourStory = ({ dataStory }: dataStoryProps) => {
  return (
    <div className="your-story__container">
      <div className="your-story__item">
        <div className="your-story--hover">
          <LazyLoadImage
            alt={dataStory.alt}
            src={dataStory.src}
            effect="blur"
            className="your-story__img"
          />
        </div>
        <p className="your-story__name">{dataStory.name}</p>
      </div>
      <div className="your-story__item">
        <div className="your-story__add">
          <PlusOutlined />
        </div>
        <p className="your-story__name">Add pet</p>
      </div>
    </div>
  );
};

export default YourStory;
