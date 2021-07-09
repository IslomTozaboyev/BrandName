import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Citys from '../Citys';
import Header from '../Header/header';
import Home from '../Home/home';
import Testimonial from '../testimonial/testimonial';
import About from '../About/about';
import Pricing from '../Pricing/pricing';
import Location from '../location/location';
import Footer from '../Footer/footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';


const cities = [
  {
      img:"http://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/bneGeneric_Russia_Moscow_City_office_.jpg",
      title:"Moscow",
      text:"Расположена на западе России, на реке Москве в центре Восточно-Европейской равнины, в междуречье Оки и Волги.",
  },
  {
      img:"http://www.atorus.ru/public/ator/data/f1c2fe.jpg",
      title:"London",
      text:"Лондон относится к глобальным городам высшего ранга и ведущим мировым финансовым центрам.",
  },
  {
      img:"https://cdnimg.rg.ru/i/gallery/128a20e3/1_43374fb4.jpg",
      title:"Tashkent",
      text:"Tashkent City Park городской парк в центре Ташкента, самая масштабная рекреационная парковая зона в Узбекистане. Расположен на",
  },
]

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Citys data={cities} />
      <Testimonial />
      <About />
      <Pricing />
      <Location />
      <Footer/>
    </div>
  );
}

export default App;
