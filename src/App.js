
import './App.css';
import About from './Components/About/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Components/Top/Top';
import Property from './Components/Property/Property';
import New from './Components/New/New';
import Footer from './Components/Footer/Footer';
import Founder from './Components/Founder/Founder';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
     <Top/>
<About/>
<Property/>
<New/>
<Founder/>
<Footer/>
    </div>
  );
}

export default App;
