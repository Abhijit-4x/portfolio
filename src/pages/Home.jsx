import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
        <Navbar />
        <div className='fixed w-full h-full top-[10vh] z-0 bg-red-100'>
          <div className='w-full h-[90vh] relative mt-[2rem] '>
              <img className='object-cover w-[90%] h-[50%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[90%]  m-auto shadow-lg'
                  src="https://images.pexels.com/photos/3034869/pexels-photo-3034869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="background-img" />
              <img className='object-cover w-[90%] h-[50%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[90%] absolute top-0 left-[50%] translate-x-[-50%] m-auto block'
                  src="https://images.pexels.com/photos/18665196/pexels-photo-18665196.png?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                  alt="background-img" />
          </div>
        </div>
    </>
  )
}

export default Home