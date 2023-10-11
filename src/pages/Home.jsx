import React from 'react'

const Home = () => {
  return (
    <>
        
        <div className='fixed w-full h-full top-[10vh] z-[-10] bg-red-100'>
          <div className='w-full h-[90vh] relative mt-[2rem] '>
            <div className="group">
              <img className='object-cover w-[90%] h-[50%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[90%] absolute top-0 left-[50%] translate-x-[-50%]  m-auto shadow-lg shadow-black rounded'
                  src="https://images.pexels.com/photos/3034869/pexels-photo-3034869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="background-img" />
              <img className='object-cover w-[90%] h-[50%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[90%] overflow-hidden
                              absolute left-[50%] translate-x-[-50%] top-[-90%] transform group-hover:translate-y-[100%] ease-in-out
                              transition-all duration-[500ms] '
                  src="https://images.pexels.com/photos/18665196/pexels-photo-18665196.png?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                  alt="background-img" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Home