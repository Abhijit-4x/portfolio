import React from 'react'

const Portfolio = () => {
  return (
    <>
    <div className='fixed w-full bg-red-100 z-[-10] '>
      <div className='flex flex-col justify-evenly w-[80%] min-h-[90vh] bg-pink-50 m-auto text-white' >
        <h1 className='text-[3rem] font-bold mx-auto text-gray-600'>My Work</h1>
        <div className='w-[80%] flex gap-[1rem] p-[1.5rem] rounded-[0.5rem] bg-my-color-light ml-auto'>
          <img 
            className='object-contain w-[400px] rounded'
            src={require("../assets/cineflix_snap.png")} alt="project_screenshot" />
          <p className='flex flex-col'>
            <span className='text-[2rem] font-bold'>
              Cineflix - Your Online Streaming Platform</span>
            An online streaming app is a digital platform that allows users to watch a wide variety of movies, TV shows, and other video content over the internet.
            Users can access and enjoy this content on-demand, typically from the comfort of their own devices, including smartphones, tablets, smart TVs, and computers. 
            Streaming apps provide a convenient way for users to explore, select, and view content based on their preferences and schedules, often offering features like 
            user profiles, personalized recommendations, and the ability to pause, rewind, or fast-forward through videos. These apps have become a fundamental part of modern
            entertainment, providing easy access to an extensive library of audiovisual content.</p>
        </div>
        <div className='w-[80%] flex gap-[1rem] p-[1.5rem] rounded-[0.5rem] bg-my-color-light mr-auto'>
          <img 
            className='object-contain w-[400px] rounded'
            src={require("../assets/todo_snap.png")} alt="project_screenshot" />
          <p className='flex flex-col'>
            <span className='text-[2rem] font-bold'>
              Todo List - Best way to play your day</span>
              A todo app is a digital tool designed to help users manage tasks, prioritize activities, and stay organized. It allows users to create a list of tasks or to-dos,
              set deadlines or due dates, and track their progress. Users can add, edit, and remove tasks as needed, making it easy to adapt to changing priorities. Some todo apps 
              also offer features like categorization, subtasks, and reminders to enhance task management. These apps provide a simple and efficient way for individuals to keep 
              track of their responsibilities, improve productivity, and reduce the risk of forgetting important tasks. Todo apps are a valuable tool for both personal and 
              professional use, ensuring that important activities are completed in a timely manner.</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Portfolio