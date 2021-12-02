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
 import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App ">
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#666f7d",
        //   },
        // },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#1c7dbd",
          },
          links: {
            color: "#1c7dbd",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> 
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
 {/* <Footer></Footer> */}
 </Router>
    </div>
  );
}

export default App;
