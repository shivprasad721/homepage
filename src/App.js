import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Home/Banner_main.js';
import Footer from './components/footer/Footer';
import Service from './components/Home/Service';
import Banner2 from './components/Home/Banner2';
import Banner3 from './components/Home/Banner3';
import Banner4 from './components/Home/Banner4';
import Banner5 from './components/Home/Banner5';
import Susbscribe from './components/Home/Susbscribe'
function App() {
  return (
    <div className="App">
    <Banner/>
    <Service/>
    <Banner2/>
    <Banner3/>
    <Banner4/>
    <Banner5/>
    <Susbscribe/>
    <Footer/>
    </div>
  );
}

export default App;
