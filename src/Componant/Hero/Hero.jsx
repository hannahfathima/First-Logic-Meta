import React, { useEffect } from 'react';
import './Hero.scss';

const Hero = () => {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        } else {
          entry.target.classList.remove('slide-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.90, // Adjust as needed
    });

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='Hero-body'>
      <div className="hero-div">
        <div className="hero-heading">
          <p>WELCOME TO FIRST LOGIC META LAB</p>
        </div>
        <div className="hero-main-heading">
          <div className="headings animate slide-from-left">
            <h1>Innovative Solutions</h1>
          </div>
          <div className="headings animate slide-from-right">
            <h1>for a Changing World</h1>
          </div>
        </div>

        {/* ....................Imagebannerdiv............ */}

        <div className="imagebanner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 imageside slide-from-left animate">
                <img src="/public/vite.svg" alt="" />
              </div>
              <div className="col-lg-6 font-side">
                <div className="paragraph slide-from-right animate">
                  <p>Our user-centered design approach creates software solutions that are easy to use and deliver maximum impact. Our focus on user experience ensures that our software solutions meet the needs of both businesses and end-users.</p>
                </div>
                <div className="buttons slide-from-right animate">
                  <button className="button">Get Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="underline"></div>

      <div id='enguiryy-iitems'>
        <div className="row" id='sociel-enquery'>
          <div className="col-lg-4 col-md-4 col-sm-12" id='sociel'>
            <img src="/public/2-mobile 1.svg" alt="" /><span>+91 7012 48 38 28</span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12" id='sociel'>
            <img src="/public/3-mail 1.svg" alt="" /><span>Info@firstlogicmetalab.com</span>
          </div>
          <div className="col-lg-4 col-sm-12" id='sociel'>
            <img src="/public/1-time 1.svg" alt="" /><span>9am - 6pm (Mon - Sat)</span>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Hero;
