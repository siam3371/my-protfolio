import React, { useState } from 'react';

const Projects = () => {
  const [isLoading, SetIsloading] = useState(true)
  if(isLoading){
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  }
    return (
<div className="mt-5 ">
  <h1 className="text-success">My Projects</h1>
<div className="row">
<div className="col-lg-4 col-md-6 col-12">
<div className="card" style={{width:"400px"}}>
  <img src="https://i.ibb.co/pj0pry0/Screenshot-289.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Car Sales</h2>
    <p className="card-text"> The name Aston Martin is derived partly from the name of its founder, Lionel Martin, and partly for a stretch of road in Hertfordshire, England, used for racing,</p>
     <a className="m-2 text-decoration-none" href="https://github.com/siam3371/niche-car">Client Site Code </a> 
     <a className="m-2 text-decoration-none" href="https://github.com/siam3371/niche-cars-server">Server Site Code </a> 
     <a className="text-decoration-none" href="https://cars-firebase.web.app/">Live Site</a>
   </div>
</div>
</div>
<div className="col-lg-4 col-md-6 col-12">
<div className="card" style={{width:"400px"}}>
  <img src="https://i.ibb.co/tK95mny/Screenshot-288.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Food Delivery</h2>
    <p className="card-text"> Potato skins, chicken strips, toasted ravioli and mozzarella sticks served with Hot & Grilled nachos smothered in cheddar cheese, beef, black olives, onions, 
</p>
<a className="m-2 text-decoration-none" href="https://github.com/siam3371/food-delivery-client-">Client Site Code </a> 
     <a className="m-2 text-decoration-none" href="https://github.com/siam3371/food-server">Server Site Code </a> 
     <a className="text-decoration-none" href="https://food-delevery-7d8f3.web.app/">Live Site</a>
   </div>
</div>
</div>
<div className="col-lg-4 col-12 col-md-6">
<div className="card" style={{width:"400px"}}>
  <img src="https://i.ibb.co/2s9S4TK/Screenshot-287.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Health Care</h2>
    <p className="card-text"> The name Aston Martin is derived partly from the name of its founder, Lionel Martin, and partly for a stretch of road in Hertfordshire, England, used for racing,</p>
    <a className="m-2 text-decoration-none" href="https://github.com/siam3371/health-care-website">Client Site Code </a> 
      <a className="text-decoration-none" href="https://health-care-91dd5.web.app/home">Live Site</a>
   </div>
</div>
</div>
<div className="col-lg-4 col-12 col-md-6">
<div className="card" style={{width:"400px"}}>
  <img src="https://i.ibb.co/vBHZLr7/Screenshot-290.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Honda Cbr</h2>
    <p className="card-text">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.</p>
    <a className="m-2 text-decoration-none" href="https://github.com/siam3371/honda-cbr">Github Link </a> 
      <a className="text-decoration-none" href="https://frosty-ptolemy-2d3831.netlify.app/">Live Site</a>
   </div>
</div>
</div>
</div>
</div>
    );
};

export default Projects;