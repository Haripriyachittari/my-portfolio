import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
  return (
    <div className='w-full  p-1 text-center text-gray-900 bg-gray-300'>
         <div className='flex justify-center items-center gap-8 my-2'>
         <a href="https://www.linkedin.com/in/haripriya-chittari-aa1022159/"  target='_blank'><FaLinkedin size={25}/></a>
         <a href="https://github.com/Haripriyachittari" target='_blank' ><FaGithub size={25}/></a>
          <a href="/" target="_blank"><HiOutlineMail size={25}/></a>
         </div>
        <p>@2022 built by <span className='underline text-pink-600'>Haripriya Chittari</span>. all rights reserved</p>
    </div>
  )
}

export default Footer
