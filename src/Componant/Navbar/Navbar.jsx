import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import './Navbar.scss';

const Navbar = () => {
  return (
    <Router> {/* Wrap your component with BrowserRouter */}
      <div className='MainNav'>
          <div className="navbar">
              <div className="left">
                <img src="/public/Group Logo.svg" alt="" />
              </div>
              <div className="right">
                <div className="navtext">
                    <Link className='navfonts' to="">Home</Link>
                    <Link className='navfonts' to="">About Us</Link>
                    <Link className='navfonts' to="">Services</Link>
                    <Link className='navfonts' to="">Technology</Link>
                    <Link className='navfonts' to="">Case Studies</Link>
                    <Link className='navfonts' to="">Career</Link>
                    <Link className='navfonts' to="">Contact Us</Link>
                    <Link to='' className='reg-Link'>Register</Link>
                </div>
                {/* <div className="register">
                     
                </div> */}
              </div>
          </div>
      </div>
    </Router>
  );
}

export default Navbar;
