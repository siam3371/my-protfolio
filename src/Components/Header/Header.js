import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light write-navbar">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-lg-0 d-flex justify-content-end ">
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/home" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/projects"  aria-current="page"  >Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/about"  aria-current="page"  >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"   to="/contact" aria-current="page"  >Contact</NavLink>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    );
};

export default Header;