import './sass/App.scss';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import PetDetail from './modules/PetMart/PetDetail';
import PetCategory from './modules/Home/PetCategory';
import DetailService from './modules/Service/DetailService';
import PetMart from './modules/PetMart/PetMart';
import Review from './modules/Home/Review'
function App() {

  return (
    <div className="App">
      <Header />
      <PetMart />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
