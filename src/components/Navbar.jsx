import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
        <div className="flex justify-between w-full h-[10vh] shadow-md shadow-my-color-light items-center z-10 px-10">
            <Link to="/">
              <img className='w-[8rem] scale-y-[0.85] rounded' src={require("../assets/logo.png")} alt="logo_img" />
            </Link>
            <div>
              <ul className='flex gap-5 '>
                  <Link to="/">
                    <li 
                      className=' text-[1.5rem] hover:bg-my-color-dark hover:text-white p-4 rounded active:scale-[0.85] transition-colors duration-[300ms] shadow-md hover:shadow-gray-700 hover:shadow-inner'>
                        Home
                    </li>
                  </Link>
                  <Link to="/">
                    <li 
                      className=' text-[1.5rem] hover:bg-my-color-dark hover:text-white p-4 rounded active:scale-[0.85] transition-colors duration-[300ms] shadow-md hover:shadow-gray-700 hover:shadow-inner'>
                        Portfolio
                    </li>
                  </Link>
                  <Link to="/">
                    <li 
                      className=' text-[1.5rem] hover:bg-my-color-dark hover:text-white p-4 rounded active:scale-[0.85] transition-colors duration-[300ms] shadow-md hover:shadow-gray-700 hover:shadow-inner'>
                        About
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li 
                      className=' text-[1.5rem] hover:bg-my-color-dark hover:text-white p-4 rounded active:scale-[0.85] transition-colors duration-[300ms] shadow-md hover:shadow-gray-700 hover:shadow-inner'>
                        Contact
                    </li>
                  </Link>


              </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;