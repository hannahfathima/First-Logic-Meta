import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import './Navbar.scss';

const Navbar = () => {
  return (
   

    <div className="mainnaav">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid" id='main-navbar-bodyy'>
    <div className="imgg-div-navv">
    <a className="navbar-brand" href="#"><img src="/public/Group Logo.svg" alt="" /></a>
    </div>
   

    <button className="navbar-toggler naav-iccon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss active"  href="#">Home</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss active" href="#">About Us </a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss active" href="#">Services</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link navigationss disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss active" href="#">Technology</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss active" href="#">Case Studies</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss active" href="#">Career</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link navigationss  active" href="#"> Contact Us</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#"><button>Register</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
