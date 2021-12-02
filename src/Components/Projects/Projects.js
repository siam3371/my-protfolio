import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({duration:2000})
},[])
  const [isLoading, SetIsloading] = useState(true)
  if(isLoading){
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  }
    return (
      /*  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" */
<div className="container" >
   <h1 className="text-success">My Projects</h1>
<div className="row">
<div className="col-lg-6 col-md-6 col-12 ">
<div className="card" style={{width:"400px"}} >
  <img src="https://i.ibb.co/cCr9hY9/Screenshot-292.png" className="card-img-top  " alt=""/>
  <div className="card-body">
    <h2 className="card-title">Car Sales</h2>
    <p className="card-text"> The name Aston Martin is derived partly from the name of its founder, Lionel Martin, and partly for a stretch of road in Hertfordshire, England, used for racing,</p>
      <Link to="/carSales">    <button className="button-81 m-3" role="button">Explore Page</button>   
</Link>
   {/*   <a className="m-2 text-decoration-none" href="https://github.com/siam3371/niche-car">Client Site Code </a> 
     <a className="m-2 text-decoration-none" href="https://github.com/siam3371/niche-cars-server">Server Site Code </a> 
     <a className="text-decoration-none" href="https://cars-firebase.web.app/">Live Site</a> */}
   </div>
</div>
</div>
<div className="col-lg-6 col-md-6 col-12">
<div className="card" style={{width:"400px"}} >
  <img src="https://i.ibb.co/XW1D3RD/Screenshot-298.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Food Delivery</h2>
    <p className="card-text"> Potato skins, chicken strips, toasted ravioli and mozzarella sticks served with Hot & Grilled nachos smothered in cheddar cheese, beef, black olives, onions, 
</p>
<Link to="/foodDelivery"><button className="button-81 m-3" role="button">Explore Page</button>   
 </Link>

{/* <a className="m-2 text-decoration-none" href="https://github.com/siam3371/food-delivery-client-">Client Site Code </a> 
     <a className="m-2 text-decoration-none" href="https://github.com/siam3371/food-server">Server Site Code </a> 
     <a className="text-decoration-none" href="https://food-delevery-7d8f3.web.app/">Live Site</a> */}
   </div>
</div>
</div>
<div className="row mt-3">
<div className="col-lg-6 col-12 col-md-6">
<div className="card" style={{width:"400px"}} >
  <img src="https://i.ibb.co/JtvMr0d/Screenshot-306.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Health Care</h2>
    <p className="card-text"> The name Aston Martin is derived partly from the name of its founder, Lionel Martin, 
    and partly for a stretch of road in Hertfordshire, England, used for racing,</p>
<Link to="healthCare">    <button className="button-81 m-3" role="button">Explore Page</button>   
</Link>
    {/* <a className="m-2 text-decoration-none" href="https://github.com/siam3371/health-care-website">Client Site Code </a> 
      <a className="text-decoration-none" href="https://health-care-91dd5.web.app/home">Live Site</a> */}
   </div>
</div>
</div>
<div className="col-lg-6 col-12 col-md-6 ">
<div className="card ms-3" style={{width:"400px"}} >
  <img src="https://i.ibb.co/wRzgVy8/Screenshot-312.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title">Honda Cbr</h2>
    <p className="card-text">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.</p>
    <Link to="/hondaCbr">    <button className="button-81 m-3" role="button">Explore Page</button>   </Link> 
    {/* <a className="m-2 text-decoration-none" href="https://github.com/siam3371/honda-cbr">Github Link </a> 
      <a className="text-decoration-none" href="https://frosty-ptolemy-2d3831.netlify.app/">Live Site</a> */}
   </div>
</div>
</div>
</div>
</div>
</div>
    );
};

export default Projects;