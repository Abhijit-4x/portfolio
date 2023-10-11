import React from 'react'

const About = () => {
  return (
    <>
      <div className='fixed w-full bg-red-100 z-[-10] '>
        <div className='flex flex-col w-[80%] min-h-[90vh] bg-pink-50 m-auto' >
          <div className='flex justify-between m-[2rem]'>
          <h1 className='text-[8rem] font-bold tracking-tighter text-gray-600'>About <span className='uppercase text-[6rem] text-my-color-dark'>me</span></h1>
          <img className='w-[200px] object-contain'
            src={require("../assets/my_photo.png")} 
            alt="my_photo" 
          />
          </div>
          <p className='w-[90%] text-black text-[1.5rem] mx-auto font-semibold'>
            I'm Abhijit, a passionate individual hailing from the picturesque landscapes of Kerala, India. Currently, I'm pursuing my engineering degree in Computer Engineering. 
            My journey in the world of technology has been driven by an insatiable curiosity and an unyielding desire for knowledge. As an enthusiast, I'm constantly seeking opportunities 
            to broaden my horizons and embrace new challenges. Coding, for me, is more than a skill; it's a medium through which I can breathe life into my creative ideas. The ability to 
            turn thoughts into functional software is a fascinating journey that I eagerly embark upon. I'm excited about the endless possibilities that technology offers and look forward 
            to contributing my skills and innovation to the ever-evolving field of computer technologies.
          </p>
          
          <figure class="max-w-screen-md mx-auto text-center my-[4rem]">
              <svg class="w-10 h-10 mx-auto mb-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <blockquote>
                  <p class="text-[2rem] italic font-medium text-gray-900">"Believe yourself and you are halfway there"</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <cite class="pr-3 font-medium text-gray-400">Theodore Roosevelt</cite>
              </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}

export default About