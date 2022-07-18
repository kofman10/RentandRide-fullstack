import React from 'react'
import logo from '../assets/Logo.jpg'

const Header = () => {
  return (
    <header className="mx-5 py-1">
    <nav className="flex flex-1 justify-between">
        <img className="w-20 h-12" src={logo} alt=""/>
       
        <ul id ="menu"className="lg:flex  justify-end gap-5 items-center hidden mr-9">
            <li className=" border-2 border-black px-2 py-2"><a href="">Lease your car</a></li>
            <li> <a href="/">Careers</a></li>
            <li> <a href="/">Blog</a></li>
            <li> <a href="/">Contact</a></li>
            <li> <a href="#" id="login">login</a></li>
            <a href="#" id="signup"><button type="button" className="bg-blue-600 text-white rounded-md px-7 py-3">Sign
                    Up</button></a>
        </ul>
        <div id="burger" className="flex justify-end lg:hidden items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </div>
    </nav>
</header>
  )
}

export default Header