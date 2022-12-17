import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



const Footer = () => {
  return (
    <div className='w-full  p-1 text-center text-gray-900 bg-gray-300'>
         <div className='flex justify-around items-center gap-8 my-2'>
         <p>
          @2022 built by <span className='text-pink-600 underline'>Haripriya Chittari. </span> All Rights Reserved. 
         </p>
          <div className=' hidden md:flex gap-8 '>
          <a href="https://www.linkedin.com/in/haripriya-chittari-aa1022159/"  target='_blank' rel='noreferrer'><FaLinkedin size={25} className='hover:text-blue-600'/></a>
          <a href="https://github.com/Haripriyachittari" target='_blank' rel='noreferrer' ><FaGithub size={25} className='hover:text-black'/></a>
          <a href='mailto:hpvarma09@gmail.com' target='_blank' rel='noreferrer'><HiOutlineMail size={25} className='hover:text-orange-500'/></a>  </div>
          

         
         </div>
        
         </div>
  )
}
export default Footer;
