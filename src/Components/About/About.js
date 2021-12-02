import React, {useEffect}from 'react';
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    return (
        <div className="m-2  "     >
            <h1 className=" text-success ">About Me</h1> 
             <div className="row d-flex align-items-center">
                 <div className="col-lg-6 col-md-6 col-12">
                     <img className="img-fluid" src="https://shakilhossain-portfolio.netlify.app/static/media/man.4035a491.jpg" alt="" /> 
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                      <p className="about-text">Hey, I am a Junior Front-End Developer.To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Front-End Web Development and use these skills in providing quality service to the company.</p>
 <button className="button-33 mt-3" role="button"><a  className="text-decoration-none fw-bolder text-success" href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Get Resume</a></button> <br />
 
                  </div>
             </div>
         </div>
    );
};

export default About;