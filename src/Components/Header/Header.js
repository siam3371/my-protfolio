import React from 'react';
import {   NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-background text-success  fs-5">
        <div className="container-fluid">

        <h2 class="navbar-brand fw-bold fs-3 ">Maruf Hossain Siam</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-lg-0 d-flex justify-content-end ">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold"  to="/home" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold"  to="/projects"  aria-current="page"  >Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold"  to="/about"  aria-current="page"  >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold"   to="/contact" aria-current="page"  >Contact Me</NavLink>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    );
};

export default Header;