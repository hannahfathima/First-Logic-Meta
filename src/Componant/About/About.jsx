import React from 'react'
import './About.scss'
const About = () => {
  return (
    <div className='About-Section'>
      <div className="about">
        <div className="about-content">
        <div className="heading-small">
            <p>ABOUT FIRST LOGIC</p>
        </div>
        <div className="main-hedaing">
         <p>Realize The Future Of Digital Intelligence</p>

        </div>


        <div className="container-fluid">
            <div className="row rowws">
                <div className="col-lg-6 imaage">
                 <div className="clients-exp-main">
                   <div className="caard">
                    <div className="exp-carrd">
                       <div className="exp-client-text">
                        <p>Over 200+ Clients</p>
                       </div>
                    </div>
                    <div className="exp-carrd2">
                    <div className="exp-client-text">
                        <p>11 Years Experience in IT</p>
                       </div>
                    </div>
                   </div>
                 </div>
                </div>
                <div className="col-lg-6 elements ">
                  <p>We are a team of professionals who assist companies in modernizing with innovative and attentive business development solutions to boost sales and revenue. We help you make the most of this digital era by providing sought‐after business development solutions for all niches. We came together from various backgrounds with one vision: to bring a lean, user-centric approach to product innovation and software development by completely understanding the business needs before building anything.</p>

                  <div className="more-about">
                        <button>More About Us  </button>
                    </div>
                    </div>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
