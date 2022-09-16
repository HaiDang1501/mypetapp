import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DataPetProp } from "../../@types/interface";

const FeaturePetItem = ({ dataPet }: DataPetProp) => {
  return (
    <div className="featured-pet__item">
      <LazyLoadImage
        alt={dataPet.alt}
        src={dataPet.src}
        effect="blur"
        className="pet-item__img"
      />
      <div className="pet-item__line"></div>
      <div className="pet-item__cover">
        <div className="pet-cover__description">
          <div className="pet-description__name">{(dataPet.namePet.length > 10) ? (dataPet.namePet.replace(dataPet.namePet.slice(10), "...")) : (dataPet.namePet)}</div>
          <div className="pet-description__line"></div>
          <div className="pet-description__price">
            {dataPet.pricePet.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className="pet-cover__eye">
          <i className="fa-solid fa-eye-slash"></i>
        </div>
        <div className="pet-cover__favorite">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default FeaturePetItem;
