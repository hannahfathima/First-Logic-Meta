import React, { useState, useEffect, useRef } from 'react';
import './Study.scss';

const Study = () => {
  const [stats, setStats] = useState({
    happyClients: 0,
    cupsOfCoffee: 0,
    skilledExperts: 0,
    mediaFollowers: 0
  });

  // Refs for each section
  const happyClientsRef = useRef(null);
  const cupsOfCoffeeRef = useRef(null);
  const skilledExpertsRef = useRef(null);
  const mediaFollowersRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountAnimation(entry.target.dataset.stat);
        }
      });
    };

    const observeSection = (ref) => {
      if (ref.current) {
        const observer = new IntersectionObserver(observerCallback);
        observer.observe(ref.current);
        return () => observer.disconnect();
      }
    };

    observeSection(happyClientsRef);
    observeSection(cupsOfCoffeeRef);
    observeSection(skilledExpertsRef);
    observeSection(mediaFollowersRef);
  }, []);

  const startCountAnimation = (stat) => {
    const counts = {
      happyClients: 257,
      cupsOfCoffee: 3840,
      skilledExperts: 108,
      mediaFollowers: 34365
    };

    const duration = 2000;
    const interval = 50;

    const key = stat;
    const step = Math.ceil((counts[key] - stats[key]) / (duration / interval));
    const timer = setInterval(() => {
      setStats((prevStats) => ({
        ...prevStats,
        [key]: prevStats[key] + step
      }));
    }, interval);

    setTimeout(() => {
      clearInterval(timer);
      setStats((prevStats) => ({
        ...prevStats,
        [key]: counts[key]
      }));
    }, duration);
  };

  return (
    <div className='Case-study-main'>
      {/* Your existing JSX code for case studies */}
      {/* ... */}

      <div className="happy-clients">
        <div className="row happy-client-rows">
          <div className="col-lg-3 client-columns" ref={happyClientsRef} data-stat="happyClients">
            <p className='t-f-s'>{stats.happyClients}</p>
            <p className='happy-clientsss'>Happy Clients</p>
          </div>
          <div className="col-lg-3 client-columns" ref={cupsOfCoffeeRef} data-stat="cupsOfCoffee">
            <p className='t-f-s'>{stats.cupsOfCoffee}</p>
            <p className='happy-clientsss'>Cups of Coffee</p>
          </div>
          <div className="col-lg-3 client-columns" ref={skilledExpertsRef} data-stat="skilledExperts">
            <p className='t-f-s'>{stats.skilledExperts}</p>
            <p className='happy-clientsss'>Skilled Experts</p>
          </div>
          <div className="col-lg-3 client-columns" ref={mediaFollowersRef} data-stat="mediaFollowers">
            <p className='t-f-s'>{stats.mediaFollowers}</p>
            <p className='happy-clientsss'>Media Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    
    <style>
        .box{
          height:100px;
        }
        .box p{
          line-height:100px;
          color:#fff;
          text-align:center;
          font-weight:bold;
          letter-spacing:2px;
        }
        .custom-1{
          -webkit-animation-iteration-count: 5;
          animation-iteration-count: 5;


          -webkit-animation-duration: 4s;
           animation-duration: 4s !important;

          -webkit-animation-delay: 3s;
          animation-delay: 3s;
        }



        .custom-2{
          -webkit-animation-iteration-count: 10;
          animation-iteration-count: 10;


          -webkit-animation-duration: 5s !important;
           animation-duration: 5s !important;

          -webkit-animation-delay: 4s;
          animation-delay: 4s;
        }



        .custom-3{
          -webkit-animation-iteration-count: 7;
          animation-iteration-count: 7;


          -webkit-animation-duration: 5s;
           animation-duration: 5s !important;

          -webkit-animation-delay: 5s;
          animation-delay: 5s;
        }


        .custom-4{
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;


          -webkit-animation-duration: 3s;
           animation-duration: 4s !important;

          -webkit-animation-delay: 5s;
          animation-delay: 5s;
        }
    
    </style>

    <title>Hello, world!</title>
  </head>
  <body>

<!--     nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container">
      <a target="_blank" class="navbar-brand" href="https://github.com/daneden/animate.css/">Animate.css</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">

          <li class="nav-item ">
            <a class="nav-link text-light" href="#custom">Custom Animate</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-light" href="#how_to_use">How to use</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-light" href="#" >Video Tutorial</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-light" href="#" >About Me</a>
          </li>
        </ul>
      </div>
  </div>
</nav>
<!--     end nav bar -->
    
    
<!--  start animation section -->

    <div class="container mt-5">
      
      
      
<!--  start animation once time section -->
      <div class="row">
        <div class="col-12 text-center mb-3">
          <h1>Animation once time</h1>
          <p>Just add <strong>'animated'</strong> class and the <strong>name</strong> ( bounce,fadeInUp,zoomInUp etc ) of animation. To find all name of the animation <a target="_blank" href="https://github.com/daneden/animate.css/">click here</a></p>
        </div>
        <div class="col-3">
          <div class="box bg-info animated bounce">
            <p>bounce</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated fadeInUp">
            <p>fadeInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated zoomInUp">
            <p>zoomInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated slideInRight">
            <p>zoomInUp</p>
          </div>
        </div>
      </div>
<!--       end animation once tiem section -->
      
      
      
      
      
      
      
      
      
<!--  start animation infinite time section -->
      <div class="row my-5">
        <div class="col-12 text-center mb-3">
          <h1>Animation infinite time</h1>
          <p>Just add <strong>'animated'</strong> class and the <strong>name</strong> ( bounce,fadeInUp,zoomInUp etc ) of animation also use <strong>infinite</strong> class</p>
          
        </div>
        <div class="col-3">
          <div class="box bg-info animated bounce infinite">
            <p>bounce</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated fadeInUp infinite">
            <p>fadeInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated zoomInUp infinite">
            <p>zoomInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated slideInRight infinite">
            <p>zoomInUp</p>
          </div>
        </div>
      </div>
<!--       end animation infinite tiem section -->
      
      
      
    
      
      
      
      
        <!--  start speed control animation infinite time section -->
      <div class="row my-5">
        <div class="col-12 text-center mb-3">
          <h1>Speed control animation with infinite time</h1>
          <p>Just add <strong>'animated'</strong> class and the <strong>name</strong> ( bounce,fadeInUp,zoomInUp etc ) of animation also use <strong>infinite and slow,slower,fast,faster</strong> class (2s,3s,800ms,500ms)</p>
        </div>
        <div class="col-3">
          <div class="box bg-info animated bounce infinite slow">
            <p>slow & bounce</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated fadeInUp infinite slower">
            <p>slower & fadeInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated zoomInUp infinite fast">
            <p>fast & zoomInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated slideInRight infinite faster">
            <p>faster & zoomInUp</p>
          </div>
        </div>
      </div>
<!--       end speed control animation infinite tiem section -->
      
      
      
      
      
      
  <!--  start animation with delay  infinite time section -->
      <div class="row my-5">
        <div class="col-12 text-center mb-3">
          <h1>Animation with delay and  infinite time</h1>
          <p>Just add <strong>'animated'</strong> class and the <strong>name</strong> ( bounce,fadeInUp,zoomInUp etc ) of animation also use <strong>infinite and delay-2s,delay-3s,delay-4s,delay-5s</strong> class.</p>
          <span class="text-info">delay means animation will start first time after deley time.</span>
        </div>
        <div class="col-3">
          <div class="box bg-info animated bounce infinite delay-2s">
            <p>delay-2s & bounce</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated fadeInUp infinite delay-3s">
            <p>delay-3s & fadeInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated zoomInUp infinite delay-4s">
            <p>delay-4s & zoomInUp</p>
          </div>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated slideInRight infinite delay-5s">
            <p>delay-5s & zoomInUp</p>
          </div>
        </div>
      </div>
<!--       end delay animation infinite tiem section -->
      
      
      
   <!--  start custom animation control with delay  infinite time section -->
      <div class="row my-5" id="custom">
        <div class="col-12 text-center mb-3">
          <h1>Custom animation control</h1>
          <p>To contorl animation as your own way add custom css to the elements with animated and animation name class</p>
          <span class="text-info">If not work your css use css !important</span>
          
        </div>
        <div class="col-3">
          <div class="box bg-info animated bounce custom-1">
            <p>custom-1 & bounce</p>
          </div>
          <span class="text-info">5 times animation <br>duration: 4s <br>animation-delay: 3s</span>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated fadeInUp custom-2">
            <p>custom-2 & fadeInUp</p>
          </div>
          <span class="text-info">10 times animation <br>duration: 5s <br>animation-delay: 4s</span>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated zoomInUp custom-3">
            <p>custom-3 & zoomInUp</p>
          </div>
          <span class="text-info">10 times animation <br>duration: 5s <br>animation-delay: 4s</span>
        </div>
        
        <div class="col-3">
          <div class="box bg-info animated slideInRight custom-4">
            <p>custom-4 & zoomInUp</p>
          </div>
          <span class="text-info">infinite times animation <br>duration: 4s <br>animation-delay: 5s</span>
        </div>
      </div>
<!--       end delay animation infinite tiem section -->
      
      

      
      
      <section id="how_to_use">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <h1>How to use animate.css</h1>
            </div>
            
            <div class="text-left">
              <span><strong>step 1 :</strong></span>
              <p>You nedd to download animate.css or use cdn link of <a href="https://github.com/daneden/animate.css/">animate.css</a></p>
              
              <span><strong>step 2 :</strong></span>
              <p>Use <strong>animated</strong> class to your targetd elements<a href="https://github.com/daneden/animate.css/"> See here</a></p>
              
              <span><strong>step 3 :</strong></span>
              <p>Use <strong>animation name</strong> as class to your targetd elements<a href="https://github.com/daneden/animate.css/"> all name list</a></p>
              
              <span><strong>step 4 :</strong></span>
              <p>If you want to use delay or control speed then you nedd to use delay (like : delay-2s) class and speed (like:fast,faster) class<a href="https://github.com/daneden/animate.css/"> all Class list</a></p>
              
              
              <span><strong>step 5 :</strong></span>
              <p>You can also use custom css for your animation</p>
              
              
            </div>
          </div>
        </div>
      </section>
      
      
      
    </div>
    
    
    <footer class="bg-info py-3 text-light">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h6>I am Nasir Khan</h6>
              <h6>Full Stack Web Developer</h6>
              <h6>nasirkhan.webdev@gmail.com</h6>
              <h6><a class="text-dark" traget="_blank" href="http://nasirkhan.me">Website </a><a class="text-dark ml-2" traget="_blank" href="https://www.youtube.com/channel/UCtaoqhqXkjL6xzMmfpsNu_g">Youtube</a><a class="text-dark ml-2" traget="_blank" href="https://www.linkedin.com/in/nasir-khan-479190181/">Linkedin</a></h6>
              
            </div>
          </div>
      </div>
    </footer>
    
    
    
    

    
    
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>









import React from 'react';
import Slider from 'react-slick';
import './Monals.scss';

const Monals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

        <Slider {...settings}>
          <div className="monals-columns" id='testi-caaard'>
            {/* Content for Slide 1 */}
          </div>
          <div className="monals-columns" id='testi-caaard1'>
            {/* Content for Slide 2 */}
          </div>
          <div className="monals-columns" id='testi-caaard2'>
            {/* Content for Slide 3 */}
          </div>
          <div className="monals-columns" id='testi-caaard3'>
            {/* Content for Slide 4 */}
          </div>
          {/* Add more slides as needed */}
        </Slider>

        <div className="monal-icon-lastt">
          <div className="monals-icon-2">
            <img src="/public/quote black 1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monals;
