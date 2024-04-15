import React from 'react'
import './Study.scss'

const Study = () => {
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

      <div className="happy-clients">
        <div className="row happy-client-rowws">
          
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>257</p>
             <p className='happy-clientsss'>Happy Clients</p>
            </div>
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>3840</p>
             <p className='happy-clientsss'> Cups of Coffee</p>
            </div>
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>108 </p>
             <p className='happy-clientsss'>Skilled Experts</p>
            </div>
            <div className="col-lg-3 client-clumnss">
             <p className='t-f-s'>34365</p>
             <p className='happy-clientsss'> Media Followers</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Study