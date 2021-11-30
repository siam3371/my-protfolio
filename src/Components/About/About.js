import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <h1 className="mt-3 text-success">About Me</h1> 
             <div className="row d-flex align-items-center">
                 <div className="col-lg-6">
                     <img src="https://shakilhossain-portfolio.netlify.app/static/media/man.4035a491.jpg" alt="" /> 
                  </div>
                  <div className="col-lg-6">
                      <p>Hey, I am a Junior Front-End Developer.To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Front-End Web Development and use these skills in providing quality service to the company.</p>
 <button className="button-33 mt-3" role="button"><a  className="text-decoration-none fw-bolder text-success" href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Get Resume</a></button> <br />
 
                  </div>
             </div>
         </div>
    );
};

export default About;