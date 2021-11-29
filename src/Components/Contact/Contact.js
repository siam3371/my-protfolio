import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="email" name="" id="" placeholder="Enter Your Email" />
             <input type="text" id="https://form.jotform.com/213325172058450" placeholder="Write about our website" />
            <button type="submit">Submit</button>
            <a href="https://form.jotform.com/213325172058450" >jotform </a>
             </form> 
         </div>
         
    );
};

export default Contact;