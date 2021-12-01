import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CarSales from './Components/HomePage/CarSales/CarSales';
import FoodDelivery from './Components/HomePage/FoodDelivery/FoodDelivery';
import HealthCare from './Components/HomePage/HealthCare/HealthCare';
import Home from './Components/HomePage/Home/Home';
import HondaCbr from './Components/HomePage/HondaCbr/HondaCbr';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App"> 
  <Router>
  <Header></Header>
 <Switch>
   <Route exact path="/">
     <Home></Home>
   </Route> 
   <Route path="/home">
     <Home></Home>
     </Route>
     <Route path="/carSales">
       <CarSales></CarSales>
     </Route>
     
     <Route path="/foodDelivery">
        <FoodDelivery></FoodDelivery>
     </Route>
      <Route path="/healthCare">
        <HealthCare></HealthCare>
      </Route>
      <Route path="/hondaCbr">
         <HondaCbr></HondaCbr>
      </Route>
   <Route path="/projects">
     <Projects></Projects>
      </Route>
   <Route path="/about"> 
   <About></About>
     </Route>
   <Route path="/contact">
     <Contact></Contact>
    </Route>
    <Route path="/blogs">
    <Blogs></Blogs>
    </Route>
 </Switch>
 <Footer></Footer>
 </Router>
    </div>
  );
}

export default App;
