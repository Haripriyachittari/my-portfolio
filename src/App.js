import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Work from "./components/Work";




function App() {
  return (
    <div>
      
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
