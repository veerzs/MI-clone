import './App.css';

import Navbar from './Component/Navbar';
import PreNavbar from './Component/PreNavbar';
import{BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Slider from './Component/Slider';
import data from'./data/data.json';
import Offers from './Component/Offers.jsx';
import Header from './Component/Header.jsx';
import StarProduct from './Component/Starproduct.jsx';
import HotAccessories from'./Component/Hotaccessories.jsx'
import HotaccessoriesMenu from './Component/HotaccessoriesMenu.jsx';



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
  <HotaccessoriesMenu/> 
  <Routes>

  <Route exact path="music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
    </Route>

  <Route exact path="smartDevices" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}> 
  </Route>
  <Route exact path="home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}> 
</Route>

  <Route exact path="lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}> 
  </Route>

  <Route exact path="mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}> 
  </Route>
  </Routes>
  
    </Router>
  );
}

export default App;
