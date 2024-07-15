import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (
    <div className='overflow-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-800'>
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      
      <div className="lg:px-16 p-2 md:p-5 ">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
      
    </div>
  )
}

export default App