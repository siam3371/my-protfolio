import React from 'react';
import About from '../../About/About';
 import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import './Home.css'
const Home = () => {
    return (
        <div className="mt-5">   
            <div className="row d-flex align-items-center" >
                <div className="col-lg-6 col-12 col-md-6">
                    <img style={{width:"300px", height:"300px"}} src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/121595414_209242543951503_387317870968098158_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG6ycjnZB6WfeohFG1ZghqEOVi7mYpvrp45WLuZim-unoOMTZ9T229SRnBmsXDVkZBB9hTD3qBu8VPJy9zYwn5E&_nc_ohc=nKO9VUrzrj8AX-bVR5y&tn=p3QVB-EGNvBkEbQ9&_nc_ht=scontent.fzyl2-1.fna&oh=fd34be8bea78b531884454055e9236e3&oe=61CD3425" alt="" />
                </div>
                    <div className="col-lg-6  col-12 col-md-6 ">
                        <button  class="button-81" role="button"><a  className="text-decoration-none  " href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Download Resume</a></button>
                        <button class="button-81" role="button"><a href="" className="text-decoration-none">Hire Me </a></button>
                    </div>
            </div>
           
           <Projects></Projects>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;