import React from 'react';
import fetchedImgSrc from '../assets/driver.jpeg'

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${fetchedImgSrc})`}}
    className="bg-no-repeat bg-cover lg:bg-top bg-center relative">
     
    <div className="bg-black w-full h-full absolute opacity-50 z-0"></div>
    <div className="flex flex-col gap-10 items-center py-20 relative z-10">
          
        <h1 className="text-2xl lg:text-6xl text-white font-serif">Find your drive</h1>
        <h2 className="text-white text-sm lg:text-xl">Explore our car sharing marketplace</h2>
        <div className="border rounded-md lg:rounded-full bg-white lg:w-2/3 p-2 lg:mt-24 w-5/6">

            <div className="flex flex-col gap-8 py-8 mx-4 lg:hidden">
                
                    <span className="mb-2">Where</span>
                    <form className="">
                        <input className="w-full border-2 border-gray-300 px-2 py-3 text-gray-300 flex flex-row justify-between" type="text"placeholder="address"/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg> 
                        

                    </form>
                
        
                    <span className="mb-2">From</span>
                   <form className="w-full "> 
                    <input className="w-full border-2 border-gray-300 px-2 py-3 text-gray-300" type="datetime-local" placeholder="Choose date"/>
                   </form>
                
                
                    <span className="mb-2">Until</span>
                    <form>
                        <input className="w-full border-2 border-gray-300 px-2 py-3 text-gray-300" type="datetime-local" placeholder="Choose date"/>
                       </form>
                </div>
               
            </div>
            <div className="mt-60 hidden lg:block">
                <div className="lg:text-2xl text-center text-white font-semibold">Find the perfect car to explore</div>
                <div className=" lg:text-2xl text-white font-semibold text-center">the cities of lagos</div>
            </div>
            <button type="button" className="hidden lg:block bg-blue-600 text-white rounded-md px-7 py-3 ">Browse
                cars</button>
    
        </div>
       
</div>
  )
}

export default Hero