import "../../sass/Home/FeaturedPet.scss";
import { dataFeaturedPet } from "./data";
import FeaturePetItem from "../../components/core/FeaturePetItem";
const FeaturedPet = () => {
  return (
    <section className="featured-pet">
        <div className="home-border">
            <div className="border-line"></div>
            <div className="border-title">
                <p style={{marginRight: "8px"}}>Featured</p>
                <p style={{color: "#C79572"}}>Pets</p>
            </div>
            <div className="border-line"></div>
        </div>
        <div className="featured-pet__container">
            {dataFeaturedPet.map((data, index) => {
                return(
                    <FeaturePetItem dataPet={data} key={index}/>
                )
            })}
        </div>
    </section>
  )
}

export default FeaturedPet
