import React, { useState } from 'react';
import './Choose.scss';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';

const Choose = () => {
  const [activeSection, setActiveSection] = useState('whyChoose');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  

  return (
    <div className='why-choose-us'>
      <div className="choose-div">
        <div className="effective-div">
          <div className="paargaraph-head">
            <p>EFFECTIVE USE OF TECHNOLOGY</p>
          </div>
          <div className="hed-div" id='why-mainhead'>
            <p>We are Focused on Strengths & Willing to Take Risks</p>
          </div>
          <div className="choooses row">
            <div className="whyy-chossses col-lg-3 col-sm-12">
              <button onClick={() => handleButtonClick('whyChoose')}>Why Choose Us</button>
            </div>
            <div className="whyy-chossses col-lg-3 col-sm-12">
              <button onClick={() => handleButtonClick('missionVision')}>Mission & Vision</button>
            </div>
            <div className="whyy-chossses col-lg-3 col-sm-12">
              <button onClick={() => handleButtonClick('ourStrength')}>Our Strength</button>
            </div>
            <div className="whyy-chossses col-lg-3 col-sm-12">
              <button onClick={() => handleButtonClick('ourProducts')}>Our Products</button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {activeSection === 'whyChoose' && (
        <div className="headiing-whychoose">
          <div className="headd-box-whychoose">
            <p>Why Choose Us</p>
          </div>
          <div className="caard-why-choose">
            <div className="caaard1">
              <div className="imaage-divv"></div>
              <div className="headingg-div">
                <p>Expertise</p>
              </div>
              <div className="parag-divv">
                <p>Extensive experience in delivering high-quality software solutions across various industries.</p>
              </div>
            </div>

            <div className="caaard1">
              <div className="imaage-divv"></div>
              <div className="headingg-div">
                <p>Client Focused</p>
              </div>
              <div className="parag-divv">
                <p>We prioritize understanding your business needs to provide software solutions that align with your unique requirements.</p>
              </div>
            </div>

            <div className="caaard1">
              <div className="imaage-divv"></div>
              <div className="headingg-div">
                <p>Innovation</p>
              </div>
              <div className="parag-divv">
                <p>Constantly strive to innovate and explore new technologies to provide cutting-edge solutions and drive the future.</p>
              </div>
            </div>

            <div className="caaard1">
              <div className="imaage-divv"></div>
              <div className="headingg-div">
                <p>Innovation</p>
              </div>
              <div className="parag-divv">
                <p>Constantly strive to innovate and explore new technologies to provide cutting-edge solutions and drive the future.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'missionVision' && (
        <div className="misson-visionn">
          <div className="headd-box-whychoos">
            <p>Mission & Vision</p>
          </div>
          <div className="container-fluid">
            <div className="row missson-contenttt">
              <div className="col-lg-6 col-sm-12  contentt-colum1">
                <div className="imagegiff">
                  <img src="/public/mission.gif" alt="" /><span>Mission</span>
                </div>
                <p>To deliver flawless, result-driven business solutions that put our clients' objectives ahead of those of their top rivals. We work hard to turn your ideas into reality by enhancing them and effectively putting them into practice to produce a final result. When it comes to achieving business objectives, we are the name for excellence, originality, and simplicity.</p>
              </div>
              <div className="col-lg-6 col-sm-12  contentt-colum1">
                <div className="imagegiff">
                  <img src="/public/vision.gif" alt="" /><span>Vision</span>
                </div>
                <p>To deliver flawless, result-driven business solutions that put our clients' objectives ahead of those of their top rivals. We work hard to turn your ideas into reality by enhancing them and effectively putting them into practice to produce a final result. When it comes to achieving business objectives, we are the name for excellence, originality, and simplicity.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'ourStrength' && (
        <div className="our-stength">
          <div className="headd-box-whychoos">
            <p>Our Strength</p>
          </div>
          <div className="container-fluid">
            <div className="row employee-main">
              <div className="col-lg-4 employee-caard">
                <div className="p-texxt">
                  <p>50+ Employee Strength</p>
                </div>
              </div>
              <div className="col-lg-4 employee-caard">
                <div className="p-texxt">
                  <p>200+ Projects Handed-over</p>
                </div>
              </div>
              <div className="col-lg-4 employee-caard">
                <div className="p-texxt">
                  <p>Top Client Review Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'ourProducts' && (
      <div className="our-products">
      <div className="headd-box-whychoos">
        <p>Our Products</p>
      </div>
      <div className="our-prod-contents">
        <Slider {...settings}>
          <div className="image1">
            <img src="/public/product1 1.svg" alt="" />
          </div>
          <div className="image1">
            <img src="/public/product2 1.svg" alt="" />
          </div>
          <div className="image1">
            <img src="/public/product3 1.svg" alt="" />
          </div>
          <div className="image1">
            <img src="/public/product4 1.svg" alt="" />
          </div>
          <div className="image1">
            <img src="/public/product5 1.svg" alt="" />
          </div>
          <div className="image1">
            <img src="/public/product6 1.svg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
      )}
    </div>
  );
};

export default Choose;
