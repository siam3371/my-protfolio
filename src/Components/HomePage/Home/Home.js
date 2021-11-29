import React from 'react';
 import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';

const Home = () => {
    return (
        <div> 
           <a href="https://docs.google.com/document/d/1HOk9YmUEpim_5iDswbZvzwNF-7dhvLZ9nYuatzYD5TI/edit?usp=sharing" target="_blank">Download Resume</a>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;