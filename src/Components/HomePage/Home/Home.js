import React from 'react';
import About from '../../About/About';
 import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import './Home.css'
const Home = () => {
    return (
        <div className="bg-img  ">   
            <div className="row d-flex align-items-center" >
                <div className="col-lg-6 col-12 col-md-6">
            <h2>                    Font End Web Developer
</h2>
                 </div>
                    <div className="col-lg-6  col-12 col-md-6 ">
                        <button  className="button-81" role="button"><a  className="text-decoration-none  " href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Download Resume</a></button>
                        <button className="button-81 m-3" role="button"><a href="" className="text-decoration-none">Hire Me </a></button>
                    </div>
            </div>
           
           <Projects></Projects>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;