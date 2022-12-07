import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
             <p className='text-4xl font-bold  inline border-b-4 border-pink-600'>About</p>
            </div>
            <div></div>
        </div>
        <div  className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div>
                <p className='text-4xl font-bold sm:text-right'>
                    Hi, I'm <span className='text-pink-600'>Haripriya,</span> Nice to meet you. Please take a look around.
                </p>
            </div>
            <div>
                <p>I'm passionate about building excellent software that improves the lives around me. I build web applications using the best & latest front end frameworks which gives user dynamic web experience. I am always open to new oppurtunities that challenge me in every step of the way.</p>
            </div>

        </div>

        </div>
      
    </div>
  )
}

export default About
