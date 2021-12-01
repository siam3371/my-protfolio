import React from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_qoweaee","template_c0bhwhh",e.target, "user_HGRBcmjRI8177OKzVGrww").then(res =>console.log(res)).catch(error => console.log(error));
    } 
    return (
<>         <h1 className="text-success ">Contact Me</h1>

<div className="text-success d-flex justify-content-center ">
     <form id="contact-form" onSubmit={handleSubmit} >
<div className="form-group">
<label htmlFor="name">Name</label>
<input type="text" name="name" className="form-control  " />
</div>
<div className="form-group">
<label htmlFor="exampleInputEmail1">Email address</label>
<input type="email" className="form-control" name="user_email" aria-describedby="emailHelp" />
</div>
<div className="form-group">
<label htmlFor="message">Message</label>
<textarea className="form-control" name="message" rows="5"></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
 </div>
 </>
    );
};

export default Contact;