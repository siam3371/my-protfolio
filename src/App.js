import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home/Home';
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
   <Route path="/projects">
     <Projects></Projects>
      </Route>
   <Route path="/about"> 
   <About></About>
     </Route>
   <Route path="/contact">
     <Contact></Contact>
    </Route>
 </Switch>
 </Router>
    </div>
  );
}

export default App;
