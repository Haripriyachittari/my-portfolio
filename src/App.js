import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import { motion } from "framer-motion";



function App() {
  return (
    <div>
      <motion.div 
      initial={
        {
          height:"100%"
        }
      }
      animate={{
        height:"0%",
        transition:{ease:[0.455,0.03,0.515,0.955],duration:3.2}
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
          transition:{ease:[0.455,0.03,0.515,0.955],duration:2.9}
        }}


        className="flex h-screen justify-center items-center">
        <motion.div className='w-5 h-5 rounded-full bg-pink-600 m-2 animate-bounce'></motion.div>
        <motion.div className='w-5 h-5 rounded-full bg-pink-600 m-2 animate-bounce'></motion.div>
        <motion.div className='w-5 h-5 rounded-full bg-pink-600 m-2 animate-bounce'></motion.div>
        </motion.div>
        
      </motion.div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Timeline/>
      <Work/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
