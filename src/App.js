import './App.css';

import Navbar from './Component/Navbar';
import PreNavbar from './Component/PreNavbar';
import{ BrowserRouter as Router} from'react-router-dom';
import Slider from './Component/Slider';
import data from'./data/data.json';
import Offers from './Component/Offers.jsx';
import Header from './Component/Header.jsx';
import StarProduct from './Component/Starproduct.jsx';
// import HotaccessoriesMenu from './Component/HotaccessoriesMenu.jsx';



function App() {
  return (
    <Router>
    <PreNavbar/>
    <Navbar/>
  <Slider start={data.banner.start}/>
  <Offers offer={data.offer}/>
  <Header text="STAR PRODUCTS"/>
  <StarProduct starProduct={data.starProduct}/>
  <Header text="HOT ACCESSORIES"/>
  {/* <HotaccessoriesMenu/> */}
  {/* <Route exact path='/music'> */}

  {/* </Route> */}
    
    </Router>
  );
}

export default App;
