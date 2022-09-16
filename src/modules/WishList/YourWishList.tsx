import { Row } from "antd";
import FeaturePetItem from "../../components/core/FeaturePetItem";
import "../../sass/WishList/WishList.scss";
import "../../sass/Home/FeaturedPet.scss"
import { dataFeaturedPet } from "../Home/data";


const YourWishList = () => {
  return (
    <div className="your-wish-list__wrapper">
        <Row justify="center">
            <h2 className="your-wish-list__title">Your</h2>
            <h2 className="your-wish-list__title" style={{color: "#C79572"}}>wishlist</h2>
        </Row>
        {/* List card data with category take query parma */}
        <div className="featured-pet__container">
          {dataFeaturedPet.map((data, index) => {
            return <FeaturePetItem dataPet={data} key={index} />;
          })}
        </div>
    </div>
  )
}

export default YourWishList
