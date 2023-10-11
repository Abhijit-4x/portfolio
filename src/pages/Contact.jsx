import React from 'react';
import Github from '../Icons/Github';
import LinkedIn from '../Icons/LinkedIn';
import TwitterX from '../Icons/TwitterX';
import Instagram from '../Icons/Instagram';
import Facebook from '../Icons/Facebook';


const Contact = () => {
    return (
        <>
            <div className='fixed w-full min-h-full bg-red-100 z-[-10]'>
                <div className="flex flex-col justify-evenly items-center w-[90%] md:w-[70%] max-w-[1000px] h-[90vh] m-auto bg-pink-50">
                    <div className='w-[85%] min-h-[400px]  bg-my-color-dark rounded p-[1rem]'>
                        <h1 className='text-[2.5rem] font-bold text-white'>Contact me!</h1>
                        <form className='w-full h-full flex flex-col gap-[2rem]'>
                            <input 
                                className='p-[0.5rem] rounded'
                                type="text" 
                                placeholder='Enter your name'
                                autoComplete='given-name'
                            />
                            <input 
                                className='p-[0.5rem] rounded'
                                type="email" 
                                placeholder='Enter your email'
                                autoComplete='email'
                            />
                            <textarea 
                                className='p-[0.5rem] rounded min-h-[150px] max-h-[250px] overflow-scroll'
                                placeholder='Type your message'
                            />
                            <button 
                                onClick={()=>alert("This function is not added yet!")}
                                className='bg-purple-200 p-[0.75rem] text-[1.5rem] font-bold rounded active:scale-[0.95]' >
                                    Send Message
                            </button>
                        </form>
                    </div>   
                    <div className='flex flex-col w-[85%]'>
                        <h1 className='font-bold text-[2rem] p-[1rem] m-auto'>Find me here</h1>
                        <div className='grid grid-cols-6  place-content-center gap-10'>
                            <Github />
                            <LinkedIn />
                            <TwitterX />
                            <Instagram />
                            <Facebook />
                        </div>
                    </div>
                </div> 
            </div>
        </>
      )
}

export default Contact;