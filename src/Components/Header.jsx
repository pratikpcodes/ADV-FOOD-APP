
import React from 'react';
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white p-6 border-b border-2 border-black   ">
      <div className="container mx-auto ">
        <div className="flex justify-around items-center">
          <div className='logo'>
            <a href="#" >
              <img className='h-12 w-12 ' src={logo} alt="no" />
            </a>
            
          </div>
          <div>
            <h1 className="text-md font-extrabold leading-tight">Food Heist</h1>
            <p className="mt-0 text-md">A single stop for your food cravings</p>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-md font-bold hover:text-gray-300">Home</a>
            <a href="#" className="text-md font-bold hover:text-gray-300">About</a>
          
            <a href="#" className="text-md font-bold hover:text-gray-300">Portfolio</a>
            <a href="#" className="text-md font-bold hover:text-gray-300">Contact</a>
          </nav>
          <div className="flex items-center">
            <button className="ml-4 p-2 rounded-sm hover:bg-white hover:text-purple-800 text-md font-bold">Log In</button>
            <button className="ml-4 p-2 rounded-sm hover:bg-white hover:text-purple-800 text-md font-bold">Cart</button>

            
            {/* <button className="ml-4 p-2 hover:bg-white hover:text-purple-800 text-md font-bold ">Sign Up</button> */
            }


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// hover: text-gray-300::::leading-tight::line height