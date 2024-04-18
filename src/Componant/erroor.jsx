
// @media(min-width:576px) and (max-width:768px) {
//     .whyy-chossses{
//         margin-bottom: 12px !important;
        
//     }

// .choose-div{

            
// width: 100% !important;
// // background-color: aqua;
// height: auto !important;
// padding-top: 20px;
// .effective-div {
// width: 96% !important;
// // padding-bottom: 20px !important;
// height: 300px !important;

              
// .paargaraph-head {
// width: 100% !important;
// height: 19px !important;
// margin: auto !important;
// /* margin-left: 40px; */
// text-align: center !important;

// p{
//     text-align: center !important;
//     font-size: 20px !important;
// }
// }



// #why-mainhead {
// width: 90% !important;
// height: auto !important;
// margin: auto !important;
//   p {
//     font-family: "Inter" !important;
//     font-size: 27px !important;
   
//     text-align: center !important;
// }
// }
// }


// }
       
    
   



//         .headiing-whychoose {
//             width: 100% !important;
//             // background: #0a0f0f !important; 
//             height: auto !important;
   
       
//             padding-top: 40px;
        

//                  .caard-why-choose {
//                 width: 88% !important;
//                 height: auto !important;
//               display: block !important;
//                 margin-top: 20px !important;
//                 margin: auto !important;
           
//             }

//          .caard-why-choose {
//             display: flex !important;
//             flex-wrap: wrap;
//             .caaard1 {
//                 width: 290px;
//                 height: 310px;
//                 margin: auto;
//                 margin-top: 28px;
//                 top: 2991px;
//                 background-color: #333333;
//                 left: 100px;
//                 gap: 0px;
//                 opacity: 0px;

//            .imaage-divv {
//             width: 290px;
//             height: 100px !important;
//                     top: 2991px;
//                     left: 100px;
//                     background-color: #05CBF2;
//                     gap: 0px;
//                     opacity: 0px;
//                 }
//             }

         
//          }
//         }

    
//         .misson-visionn {
//             width: 100%;
//             height: auto !important;
//             // background-color: #05CBF2 !important;
//             top: 2877px;
//             gap: 0px;
          
//             border: 1px 0px 0px 0px;
//             opacity: 0px;
//             padding-top: 40px;

//           .contentt-colum1 {
             
//                 height: auto !important;
//                 margin-bottom: 20px !important;
               
//             }
//         }

//        .our-stength {
//             width: 100%;
//             // background: rgb(5, 5, 10);
//             height: auto;
           
//             margin: auto;
//             .employee-main {
//                 width: 100%;
            
//                 height: auto;
//                 padding: 19px;
//                 margin: auto;
//                 border: 1px 0px 0px 0px;
//                 opacity: 0px;

//          .employee-caard {
//                     width: 296px;
//                     height: 220px;
//                     margin-top: 20px !important;
//                        margin: auto;
//                     background-color: #333333;
//                     text-align: center;
//                     padding: 75px;
//                 }
//             }
//         }
//     .our-products{
//         height: auto !important;
//         margin: auto !important;
       
//         .our-prod-contents {
//             width: 100%;
//             height: auto !important;
//             // background: chocolate;
    
//             opacity: 0px;
//             text-align: center;
//             padding-top: 50px;
//             margin: auto !important;


//            .content-img-div {
//                width: 50% !important;
//              height: auto; 
//                 // background: black;
//                 /* top: 4367px; */
//                 /* left: 109px; */
//                 margin: auto !important;
//                  display: block;
//                  .image1 {
//                     width: 100px;
//                     // /* background: darkorange; */
//                     height: 100px;
//                     top: 4367px;
//                     left: 109px;
//                     gap: 0px;
//                     opacity: 0px;
//                     margin: auto !important;
//                 }
//             }

//         }
//     }


// }











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

      <div className="happy-clients" ref={statsRef}>
      <div className="row happy-client-rows">
        <div className="col-lg-3 client-columns">
          <p className='t-f-s'>{stats.happyClients}</p>
          <p className='happy-clientsss'>Happy Clients</p>
        </div>
        <div className="col-lg-3 client-columns">
          <p className='t-f-s'>{stats.cupsOfCoffee}</p>
          <p className='happy-clientsss'>Cups of Coffee</p>
        </div>
        <div className="col-lg-3 client-columns">
          <p className='t-f-s'>{stats.skilledExperts}</p>
          <p className='happy-clientsss'>Skilled Experts</p>
        </div>
        <div className="col-lg-3 client-columns">
          <p className='t-f-s'>{stats.mediaFollowers}</p>
          <p className='happy-clientsss'>Media Followers</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Study