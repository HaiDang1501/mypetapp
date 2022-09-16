import "../../sass/Service/DetailService.scss";
import catServiceDetail from "../../assets/main/cat-service-detail.png";
import catNote from "../../assets/main/note.png";
import lesgic from "../../assets/main/lesgic.png";
import { dataCheckoutService } from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const DetailService = () => {
  return (
    <div className="service-detail__wrapper">
      <div className="service-detail__cover">
        <div className="service-detail__frame">
          <img src={catNote} alt="cat note" className="service-detail__img1" />
          <p className="service-detail__info">
            Come with us to beautify your pet
          </p>
        </div>
        <img
          src={catServiceDetail}
          alt="cat detail"
          className="service-detail__img2"
        />
      </div>
      <div className="service-detail__container">
        <table className="service-detail__table" >
          <thead className="table-service__topic">
            <tr>
              <th>Procedure</th>
              <th>Silver</th>
              <th>Gold</th>
              <th>Platinum</th>
              <th>Diamond</th>
            </tr>
          </thead>
          <tbody>
            {dataCheckoutService.map(item => {
              return(
                <tr key={item.procedure}>
                  <th className="table-service__header">{item.procedure}</th>
                  <td>
                    {item.silver ? <LazyLoadImage src={lesgic} effect="blur" alt="silver" className="table-service__tick" />: ""}                    
                  </td>
                  <td>
                    {item.gold ? <LazyLoadImage src={lesgic} effect="blur" alt="gold" className="table-service__tick" />: ""}                    
                  </td>
                  <td>
                    {item.platinum ? <LazyLoadImage src={lesgic} effect="blur" alt="platinum" className="table-service__tick" />: ""}                    
                  </td>
                  <td>
                    {item.diamond ? <LazyLoadImage src={lesgic} effect="blur" alt="silver" className="table-service__tick" />: ""}                    
                  </td>
                </tr>  
              )
            })}
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default DetailService;
