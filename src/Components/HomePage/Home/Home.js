import React from 'react';
import About from '../../About/About';
 import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
 import Typical from 'react-typical' 
import './Home.css'
import Footer from '../../Footer/Footer';
import MyProtfolio from '../../Myprotfolio/MyProtfolio';
const Home = () => {
 return (
        <div className="bg-img">   
            <div className="row d-flex align-items-center" >
                <div className="col-lg-6 col-12 col-md-6">
                 <h2 className="text-white"><Typical
        steps={[ 'Hi, I am Siam Hossain', 1000, 'I am Jr. Front End Web Developer ', 500 ]}
        loop={Infinity}
        wrapper="p"
      /></h2>
                 </div>
                     <div className="col-lg-6  col-12 col-md-6 ">
                        <button  className="button-81" role="button"><a  className="text-decoration-none  " href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Download Resume</a></button>
                        <button className="button-81 m-3" role="button"><a href="https://www.linkedin.com/in/maruf-hossain-63738b227/" className="text-decoration-none">Linkedin </a></button>
                    </div>
            </div>
           <Projects></Projects>
           <About></About>
          
           <Contact></Contact>
             <Footer></Footer>
         </div>
    );
};

export default Home;