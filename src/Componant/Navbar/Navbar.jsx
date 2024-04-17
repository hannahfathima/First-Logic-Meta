import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import './Navbar.scss';

const Navbar = () => {
  return (
    // <Router> 
    //   <div className='MainNav'>
    //       <div className="navbar">
    //           <div className="left">
    //             <img src="/public/Group Logo.svg" alt="" />
    //           </div>
    //           <div className="right">
    //             <div className="navtext">
    //                 <Link className='navfonts' to="">Home</Link>
    //                 <Link className='navfonts' to="">About Us</Link>
    //                 <Link className='navfonts' to="">Services</Link>
    //                 <Link className='navfonts' to="">Technology</Link>
    //                 <Link className='navfonts' to="">Case Studies</Link>
    //                 <Link className='navfonts' to="">Career</Link>
    //                 <Link className='navfonts' to="">Contact Us</Link>
    //                 <Link to='' className='reg-Link'>Register</Link>
    //             </div>
    //             {/* <div className="register">
                     
    //             </div> */}
    //           </div>
    //       </div>
    //   </div>
    // </Router>

    <div className="mainnaav">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid" id='main-navbar-bodyy'>
    <div className="imgg-div-navv">
    <a className="navbar-brand" href="#"><img src="/public/Group Logo.svg" alt="" /></a>
    </div>
   

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active"  href="#">Home</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#">About Us </a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#">Services</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#">Technology</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#">Case Studies</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#">Career</a>
        </li>
        <li className="nav-item" id='navbar-fontt-itemms'>
          <a className="nav-link active" href="#"> Contact Us</a>
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
