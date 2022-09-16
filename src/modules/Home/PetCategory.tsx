import "../../sass/Home/PetCategory.scss";
import { dataPetCategory } from "./data";

const PetCategory = () => {
  return (
    <section className="pet-category">
      <div className="home-border">
        <div className="border-line"></div>
        <div className="border-title">
          <p style={{ color: "#C79572", marginRight: "8px" }}>Pets</p>
          <p>Category</p>
        </div>
        <div className="border-line"></div>
      </div>
      <div className="pet-category__container">
        {dataPetCategory.map((data) => {
          return (
            <div className="pet-category__item" key={data.alt}>
              <img
                src={data.src}
                alt={data.alt}
                className="pet-category__img"
              />
              <p className="pet-category__title">{data.title}</p>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default PetCategory;
