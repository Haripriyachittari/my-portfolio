import React from 'react'
import {AiFillWechat} from 'react-icons/ai'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex items-center justify-center p-4'>
        <form  method ='POST' action="https://getform.io/f/33f60396-7e67-44ca-8011-78933ad317a1" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me a email - <a href='mailto:hpvarma09@gmail.com' target='_blank'  rel='noreferrer' className='text-pink-600'>hpvarma09@gmail.com</a></p>
            </div>
            <input  className='bg-[#ccd6f6] rounded p-2' type="text" placeholder='Name' name='name'/>
            <input  className=' my-2 p-2 bg-[#ccd6f6] rounded'type="email" placeholder='Email' name='Email'/>
            <textarea className=' bg-[#ccd6f6] rounded p-2' name='message' cols='30' rows='10' placeholder='Message...' ></textarea>
            <button className='my-4  w-[50%] px-10 py-1 group mx-auto flex items-center justify-center  border-2 text-white font-bold bg-pink-600 border-pink-600 rounded-md hover:bg-transparent hover:text-pink-600'>Let's Talk <span className='group-hover:scale-125 duration-300'><AiFillWechat size={25} className=' ml-2'/></span> </button>
        </form>
      
    </div>
  )
}

export default Contact
