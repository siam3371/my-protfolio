import React, {useEffect}from 'react';
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { ProgressBar} from 'react-bootstrap'; 

const About = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const jwtToken = 65;
    const myProgress = 100;
    const cssProgress = 100;
    const javascriptProgress = 80;
    const reactProgress = 80;
    const mongodbProgress = 70;
    const nodeJsProgress = 70;
    return (
        <div className="m-2  " data-aos="fade-up"     >
            <h1 className=" text-success ">About Me</h1> 
             <div className="row d-flex align-items-center">
                 <div className="col-lg-6 col-md-6 col-12" data-aos="fade-right"    >
                     <img className="img-fluid" src="https://shakilhossain-portfolio.netlify.app/static/media/man.4035a491.jpg" alt="" /> 
                  </div>
                  <div className="col-lg-6 col-md-6 col-12" data-aos="fade-left">
                       {/* My Skills */}
           <h1 className="color">My Skills</h1>

<div className=" bottom">
<ProgressBar now={myProgress} variant=" " className="mb-2 " label={`${myProgress}% HTML`} />  
<ProgressBar variant="info" now={cssProgress} className="mb-2" label={`${cssProgress}% CSS`} />
<ProgressBar now={javascriptProgress} variant="success" className="mb-2" label={`${javascriptProgress}% JavaScript.`} /> 
<ProgressBar variant="info" now={reactProgress} className="mb-2" label={`${reactProgress}% React Js`} />
<ProgressBar now={mongodbProgress} variant="success" className="mb-2" label={`${mongodbProgress}%  Mongodb`} /> 
<ProgressBar variant="warning" now={nodeJsProgress} className="mb-2" label={`${nodeJsProgress}% NodeJs`} />
<ProgressBar variant="info" now={jwtToken} className="mb-2 color" label={`${jwtToken}% Jwt Token`} />
  </div>
{/* End My Skills */}
                      <p className="color mt-5">Hey, I am a Junior Front-End Developer.To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Front-End Web Development and use these skills in providing quality service to the company.</p>
 <button className="button-33 mt-3" role="button"><a  className="text-decoration-none fw-bolder text-success" href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Download Resume</a></button> <br />
 
                  </div>
             </div>
         </div>
    );
};

export default About;