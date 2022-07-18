import React from 'react'
import carkey from "../assets/carkey.jpeg"
import car8 from '../assets/car8.jpeg'
import woman from '../assets/woman.jpeg'
import bus from '../assets/bus.jpg'

const Layout = () => {
  return (
    <>
    <section className="relative bg-blue-50 bg-opacity-40">
        <div className="pt-20 pb-10 lg:mx-20">
            <h3 className="text-2xl lg:text-5xl font-serif text-center lg:mb-28 mb-12 ">How Rent n Ride works

                <div className="border-b-[3px] border-blue-600 container mx-auto w-[69px] lg:w-1/12 mt-3"></div>
                <div className="ml-8">
                    <div className="border-b-[3px] border-blue-600 container mx-auto w-[69px] lg:w-1/12 mt-1"></div>
                </div>
            </h3>
            <div className=" container flex flex-1 flex-col lg:flex-row  gap-16">
                <div className="flex flex-col  gap-12 lg:text-2xl relative container  text-center lg:text-left ">
                    <div className="">
                        <div className="border border-black rounded-full w-8 h-8 text-center items-center">1</div>
                        <div>
                            <h4 className="mb-4">Find the perfect car</h4>
                            <p>Enter a location and date and browse thousands of car shared by local host.</p>
                        </div>
                    </div>
                    <div>
                        <div className="border border-black rounded-full w-8 h-8 text-center items-center">2</div>
                        <div>
                            <h4 className="mb-4">Book your trip</h4>
                            <p>Book on the rent n ride web app,choose a protection plan and say hi to your host!</p>
                        </div>
                    </div>
                    <div>
                        <div className="border border-black rounded-full w-8 h-8  text-center items-center">3</div>
                        <div>
                            <h4 className="mb-4">Hit the road</h4>
                            <p>Have the car delivered or pick it up from your host.Check in with the app,grab the keys
                                and hit the road!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" lg:block ">
                        <img className="lg:border lg:rounded-t-full w-full h-[154px] lg:w-[42rem] lg:h-[31rem] object-cover"
                            src={carkey} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="">

            <div className="hidden lg:block border-b-[3px] border-blue-600 container mx-auto w-[69px] lg:w-1/12 mt-3"></div>
            <div className="ml-8 hidden lg:block">
                <div className="border-b-[3px] border-blue-600 container mx-auto w-[69px] lg:w-1/12 mt-1"></div>
            </div>
            <h4 className="text-2xl lg:text-5xl text-center my-6 font-serif font-medium">Endless options</h4>
            <p className="text-sm text-center lg:w-[44rem] mx-auto lg:text-xl">Whether it's an SUV for a family, a pickup
                truck for some errands, or a classic
                sports car for a night out, find the perfect car for all kinds of occasions and budgets
                on Rent n Ride.</p>
            <div className="flex justify-center mt-6">
                <a href=""><button type="button"
                        className=" bg-blue-600 text-white rounded-md px-7 py-3 hover:shadow-xl hover:shadow-blue-400">Browse
                        cars</button></a>
            </div>
            <p className="lg:mt-16 lg:ml-20 text-center lg:text-left ">Browse by make</p>


        </div>

        <div className="hidden swiper lg:flex justify-center items-center mt-4 ">
            <div className="swiper-wrapper">
                <div className="swiper-slide ">
                    <div className="grid grid-cols-4 mx-20 gap-4 bg-gray-100">
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src={car8} alt="" />
                            </div>
                            <div className=" text-center  my-10 ">Toyota</div>
                        </div>
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car7.jpeg" alt=""/>
                            </div>
                            <div className="text-center items-center my-10">Nissan</div>
                        </div>
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car5.jpeg" alt=""/>
                            </div>
                            <div className="text-center items-center my-10">Mercedez Benz</div>
                        </div>
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car6.jpeg" alt=""/>
                            </div>
                            <div className="text-center items-center my-10">Honda</div>
                        </div>
                    </div>


                </div>
                <div className="swiper-slide">
                    <div className="grid grid-cols-4 mx-20 gap-4 bg-gray-100">
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car3.jpeg" alt=""/>
                            </div>
                            <div className=" text-center  my-10 ">Lexus</div>
                        </div>
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car.jpeg" alt=""/>
                            </div>
                            <div className="text-center items-center my-10">BMW</div>
                        </div>
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car4.jpeg" alt=""/>
                            </div>
                            <div className="text-center items-center my-10">Acura</div>
                        </div>
                        <div
                            className="bg-white h-[352px] border-0 rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 transition ease-out duration-300">
                            <div className="h-[239px]">
                                <img className=" w-full h-full object-cover" src="rent n ride images/car2.jpeg" alt=""/>
                            </div>
                            <div className="text-center items-center my-10">Hyundai</div>
                        </div>
                    </div>
                </div>

                ...
            </div>
        

        </div>



        <div className="lg:flex flex-row mt-20 gap-32 mx-20 relative hidden">
            <div className="mt-20"> 
            <div className="bg-black h-[540px] w-[540px] absolute z-0 left-[23px] bg-opacity-80"></div>
            <div>
                <div className="relative z-10 w-[540px] h-[609px]">
             <img className="mt-[39px] w-full h-full object-cover" src={woman} alt="" />
                </div>
            </div>
            </div>
            <div className="flex flex-col">
           <span className="text-5xl font-semibold ">Why Rent n Ride?</span>
           <span className="text-2xl font-semibold">Skip the rental counter</span>
           <span className="mt-9 text-2xl font-semibold">24/7 support</span>
           <p className="text-2xl font-light mt-5">Customer support is available online 24/7 to answer your questions.</p>
           <span className="mt-9 text-2xl font-semibold">More money for you</span>
           <p className="text-2xl font-light mt-5">Find deals on all kinds of drives — from the everyday to the extraordinary — complete with a better, more convenient experience. Find the perfect vehicle for your budget, starting at ₦15,000 per day.</p>
           <span className="mt-9 text-2xl font-semibold">Convenient delivery options</span>
           <p className="text-2xl font-light mt-5">Get your car delivered right to you or wherever you’re going. Many hosts offer delivery to custom locations or popular points of interest like airports, malls, and hotels.</p>
            </div>
         </div>
    </section>
      
    <section>
        <div className="bg-blue-600 container flex flex-1 flex-col items-center gap-6 lg:hidden">
            <h5 className="text-2xl text-white">Why rent n ride</h5>
            <span className="text-white">skip the rental counter</span>
             <div className ="bg-white flex flex-col items-center py-10 text-xs">
                 <div className="mb-5 mt-1 text-sm font-bold">24/7 support</div>
                   <span className="w-56 text-center">Customer support is available online 24/7 to answer your questions.</span>
             </div>
             <div className ="bg-white flex flex-col items-center py-10 text-xs">
                <div className="mb-5 mt-1 font-bold text-sm">More money for you</div>
                  <span className="w-56 text-center">Find deals on all kinds of drives — from the everyday to the extraordinary — complete with a better, more convenient experience. Find the perfect vehicle for your budget, starting at ₦15,000 per day.</span>
            </div>
            <div className ="bg-white flex flex-col items-center py-10 text-xs mb-20">
                <div className="mb-5 mt-1 font-bold text-sm">Convienient delivery options</div>
                  <span className="w-56 text-center">Get your car delivered right to you or wherever you’re going. Many hosts offer delivery to custom locations or popular points of interest like airports, malls, and hotels.</span>
            </div>
        </div>
       
    </section>


    <section className="bg-blue-50 bg-opacity-40 pb-4">
     <div className="pt-10 mx-4">
     <h6 className = "mx-auto text-center font-serif text-2xl mb-7 font-bold lg:text-5xl lg:w-[671px]">Start building your business plan</h6>
     <p className="mx-auto lg:text-2xl lg:font-thin text-center mb-7 lg:w-[700px]">List your first car to get started today and build your plan to take control of your 
        financial future tomorrow.</p>
        <div className="flex  justify-center">
            <button type="button" className="hover:shadow-lg hover:shadow-blue-500  bg-blue-600 text-white rounded-md p-2 px-7">Get started </button>
        </div>
     </div>
     <figure className="flex justify-end md:hidden lg:hidden mr-3"> 
     <div className=" bg-blue-600 h-8 w-8 border rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="#fff">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
    </div>
</figure>
<div className="hidden lg:block">
<div>
    <h6 className= "text-5xl font-serif font-bold">Fuel your dreams</h6>
    <p className="font-thin w-[577px] mt-4 text-2xl">Stoke your wanderlust with some articles to teach you about 
        our hosts, investments and  aspring entrepreneurs.</p>
        <figure className="ml-[28rem]"> 
        <div className="border-b-[3px] border-blue-600  w-[69px] lg:w-1/12 mt-3"></div>
        <div className="ml-8">
            <div className="border-b-[3px] border-blue-600  w-[69px] lg:w-1/12 mt-1"></div>
        </div>
    </figure>
</div>
<div className="container w-5/6 h-[652px]">
    <img className="h-full w-full object-cover" src={bus} alt=""/>
</div>
</div>
    </section>
    

      </>
  )
}

export default Layout