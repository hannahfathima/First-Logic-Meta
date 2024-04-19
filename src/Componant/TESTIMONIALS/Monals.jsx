import React from 'react'
import Slider from 'react-slick';
import './Monals.scss'



const Monals = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      };
  return (
    <div className='monalss'>
       <div className="Monals-body">

<div className="monals-headingss">
    <p>TESTIMONIALS</p>
</div>

<div className="monals-bodu-contents">
<div className="monals-icon">
    <img src="/public/quote black 1.svg" alt="" />
</div>

<div className="monalss-caards">
    <div className="row monaals-roww">
    <Slider {...settings}>
    <div className="caaard-first" >

<div className="col-lg-3 monals-columns" id='testi-caaard'>
                <div className="contents-caards">
                    <div className="pro-pic-dv">
                        <div className="pro-pic">
                                   <img src="/public/profile 1.svg" alt="" />                   </div>
                        <div className="pro-pic-name">
                                  <p className='font-p'>Name One </p>
                                  <p className='font-p'>Job</p>
                               
                        </div>
                    </div>


                    <div className="p-review-head">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="p-review">
                        <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                    </div>
                </div>
        </div>
</div>
        <div>
        <div className="col-lg-3 monals-columns" id='testi-caaard1'>
                <div className="contents-caards">
                    <div className="pro-pic-dv">
                        <div className="pro-pic">
                                   <img src="/public/profile 1.svg" alt="" />                   </div>
                        <div className="pro-pic-name">
                                  <p className='font-p'>Name One </p>
                                  <p className='font-p'>Job</p>
                               
                        </div>
                    </div>


                    <div className="p-review-head">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="p-review">
                        <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                    </div>
                </div>
        </div>
        </div>

 <div>       <div className="col-lg-3 monals-columns" id='testi-caaard2'>
                <div className="contents-caards">
                    <div className="pro-pic-dv">
                        <div className="pro-pic">
                                   <img src="/public/profile 1.svg" alt="" />                   </div>
                        <div className="pro-pic-name">
                                  <p className='font-p'>Name One </p>
                                  <p className='font-p'>Job</p>
                               
                        </div>
                    </div>


                    <div className="p-review-head">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="p-review">
                        <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                    </div>
                </div>
        </div>
        </div>

        <div>
        <div className="col-lg-3 monals-columns" id='testi-caaard3'>
                <div className="contents-caards">
                    <div className="pro-pic-dv">
                        <div className="pro-pic">
                                   <img src="/public/profile 1.svg" alt="" />                   </div>
                        <div className="pro-pic-name">
                                  <p className='font-p'>Name One </p>
                                  <p className='font-p'>Job</p>
                               
                        </div>
                    </div>


                    <div className="p-review-head">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="p-review">
                        <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                    </div>
                </div>
        </div>
        </div>
        </Slider>
    </div>
</div>

<div className="monal-icon-lastt">
<div className="monals-icon-2">
    <img src="/public/quote black 1.svg" alt="" />
</div>

</div>
</div>


       </div>
    </div>
  )
}

export default Monals
