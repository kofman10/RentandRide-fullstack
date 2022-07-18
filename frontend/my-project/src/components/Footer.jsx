import React from 'react'
import './footer.css'
import carImage from '../assets/carimage.png'


const Footer = () => {
  return (
    <>
    <footer className='footer' > 
   <div className ="hidden lg:block">
     <button className ="explore"> Explore Blog</button>
   </div>
  
     <div className ="hidden lg:block">
        <div style={{backgroundImage: `url(${carImage})`}} className ="text-center invite-container">
            <h2 className ="invite-text1"> ARE YOU READY TO MAKE EXTRA INCOME WITH YOUR CAR? JOIN US.</h2>
            <h3 className ="invite-text2"> List your cars on Ride n Rent </h3>
          </div>
       
       <div className ="top-footer">
         <img src="rent n ride images/Logo.png" alt="logo" />

           <a href="#" > About Us</a>
           <a href="#" > FAQs </a>
           <a href="#" > Trust & Safety</a>
           <a href="#" > Latest Promotions</a>
           <a href="#" > Terms and Conditions</a>
           <a href="#" > Privacy Policy</a>
           <a href="#" > Contact Us</a> 
       </div>
       <div className ="botton-footer"> 

           <img className ="botton-footer-image" src="rent n ride images/GPTW-Logo-2 1.png" alt="logo" />
     
         <div className ="flex icon-container">
         
           <div className ="mx-3">
             <img src="rent n ride images/dashicons_facebook-alt.png" alt="cone" />
           </div>
           <div className ="mx-3">
             <img src="rent n ride images/ri_instagram-fill.png" alt="sugarcubes" />
           </div>
          
           <div className ="mx-3">
             <img src="rent n ride images/ci_linkedin.png" alt="orange" />
           </div>
           <div className ="mx-3">
             <img src="rent n ride images/bx_bxl-twitter.png" alt="milkbottle" />
           </div>
           <div className ="mx-3">
            <img src="rent n ride images/bx_bxl-twitter.png" alt="milkbottle" />
        </div>
           
         </div>
         <div>
           <div className ="flex justify-center copyright">
             <a href="#" className ="px-5"> © Copyright 2021. Rent n Ride. | All Rights Reserved | Terms and conditions may apply</a>
           </div>
         </div>
       </div>
       
       <div className ="bg-color">
         <div className ="flex font-bold justify-center mb-4">          
         </div>
       </div>
    </div>
    <div className ="bg-black py-8 lg:hidden">
        <div className ="flex gap-5  ml-6"> 
            <img src="rent n ride images/dashicons_facebook-alt.png" alt="cone" />
            <img src="rent n ride images/ri_instagram-fill.png" alt="sugarcubes" />
            <img src="rent n ride images/ci_linkedin.png" alt="orange" />
            <img src="rent n ride images/bx_bxl-twitter.png" alt="milkbottle" />
            <img src="rent n ride images/gridicons_location.png" alt="milkbottle" />

    </div>
     
    <div className ="text-white flex flex-col gap-8 mt-10 ml-7 text-[18px] opacity-75"> 
    <a href="#">About Us</a>
    <a href="#">FAQs</a>
    <a href="#">Careers</a>
    <a href="#">Hosting</a>
    <a href="#">Makes</a>
    <a href="#">Contact</a>
</div>
     <hr className ="mt-10 mx-3 mb-7" />
     <img className ="ml-3" src="rent n ride images/GPTW-Logo-2 1.png" alt="" />
     <div className ="flex flex-row gap-6 text-white opacity-75 text-[14px] mt-4 ml-3">
        <span>©2021 Rent n Ride</span>
        <span>privacy</span>
        <span>Terms</span>
     </div>
    </div>
</footer>
    </>
  )
}

export default Footer