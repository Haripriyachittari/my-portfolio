import React from 'react';
import { motion } from "framer-motion";


const Loader = () => {
  return (
    <div >
        <motion.div 
      initial={
        {
          transform:"translateX(0%)"
        }
      }
      animate={{
        transform:"translateX(-100%)",
        transition: {ease:[0.455,0.03,0.515,0.955],duration:2.5}
      }}
      
      
      className="absolute bg-[#0a192f] h-screen w-full z-10">
        <motion.div 
        initial={
          {
            opacity:"100%",
          }
        }
        animate={{
          opacity:"0%",
          transition:{ease:[0.455,0.03,0.515,0.955],duration:2.4}
        }}


        className="flex h-screen justify-center items-center">
        <motion.div className='w-5 h-5 rounded-full bg-pink-600 m-2 animate-bounce'></motion.div>
        <motion.div className='w-5 h-5 rounded-full bg-pink-600 m-2 animate-bounce'></motion.div>
        <motion.div className='w-5 h-5 rounded-full bg-pink-600 m-2 animate-bounce'></motion.div>
        </motion.div>
        
      </motion.div>
      
    </div>
  )
}

export default Loader
