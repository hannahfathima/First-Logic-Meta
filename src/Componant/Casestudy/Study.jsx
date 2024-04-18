import React, { useState, useEffect, useRef } from 'react';
import './Study.scss'

const Study = () => {

  
  const [stats, setStats] = useState({
    happyClients: 0,
    cupsOfCoffee: 0,
    skilledExperts: 0,
    mediaFollowers: 0
  });


  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start counting animation
          startCountAnimation();
          observer.unobserve(entry.target);
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    const counts = {
      happyClients: 257,
      cupsOfCoffee: 3840,
      skilledExperts: 108,
      mediaFollowers: 34365
    };

    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 50; // Interval between each count increase

    Object.keys(counts).forEach((key) => {
      const step = Math.ceil((counts[key] - stats[key]) / (duration / interval));
      const timer = setInterval(() => {
        setStats((prevStats) => ({
          ...prevStats,
          [key]: prevStats[key] + step
        }));
      }, interval);

      // Clear the interval when count reaches the target
      setTimeout(() => {
        clearInterval(timer);
        setStats((prevStats) => ({
          ...prevStats,
          [key]: counts[key]
        }));
      }, duration);
    });
  };
  return (
    <div className='Case-study-main'>
      <div className="case-study-div">
        <div className="heaadings">
            <div className='p-heading'><p>WHAT WE DID</p></div>
            <div className='h-heading'><p>Our Case Studies</p></div>
        </div>

        <div className="row imgiss-caard">
           



        <div className="col-lg-3 iimmgis">
         <div className="imagiis">
            <img src="/public/case-image-1 1.svg" alt="" />
           </div>
           <div className="p-caards">
               <p>
               Artable Interio
               </p>
           </div>
            <div className="p1-caards">
                <p>
                Responsive Website
                </p>
            </div>
         </div>


         <div className="col-lg-3 iimmgis">
         <div className="imagiis">
         <img src="/public/case-image-2 1.svg" alt="" />
           </div>
           <div className="p-caards">
             <p>Thara Cart</p>
           </div>
            <div className="p1-caards">
                <p>E-Commerce Website & Mobile App</p>
            </div>
         </div>


         <div className="col-lg-3 iimmgis">
         <div className="imagiis">
         <img src="/public/case-image-3 1.svg" alt="" />
           </div>
           <div className="p-caards">
         <p>Watarain</p>
           </div>
            <div className="p1-caards">
                    <p>Mobile Application & Website</p>
            </div>
         </div>



         <div className="col-lg-3 iimmgis">
         <div className="imagiis">
         <img src="/public/case-image-4 1.svg" alt="" />
           </div>
           <div className="p-caards">
             <p>Redolent</p>
           </div>
            <div className="p1-caards">
                 <p>UI/UX Design</p>
            </div>
         </div>


      

        </div>
      </div>

      <div className="happy-clients " ref={statsRef}>
        <div className="row happy-client-rowws">
          
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>{stats.happyClients}</p>
             <p className='happy-clientsss'>Happy Clients</p>
            </div>
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>{stats.cupsOfCoffee}</p>
             <p className='happy-clientsss'> Cups of Coffee</p>
            </div>
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>{stats.skilledExperts} </p>
             <p className='happy-clientsss'>Skilled Experts</p>
            </div>
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>{stats.mediaFollowers}</p>
             <p className='happy-clientsss'> Media Followers</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Study