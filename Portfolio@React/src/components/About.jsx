import React from 'react'
import aboutPic from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const animateConfig = (positionX) => ({
  initial: {x: positionX, opacity: 0},
  animate: {
    x: 0, 
    opacity: 1, 
    transition: {duration: 0.5}
  }
})

function About() {
  return (
    <div className='p-5 mx-5'>
        <h2 className='text-3xl text-center lg:text-4xl my-14'>
          About 
          <span className='text-neutral-500 ml-2'>Me</span>
        </h2>
        <div className="flex flex-wrap">
          <motion.div 
            variants={animateConfig(-100)}
            initial="initial"
            whileInView="animate" // this will animate when the component is in view not while mount like animate
            className="w-full lg:w-1/2 flex justify-center lg:items-start"
          >
            <img className="rounded-md" src={aboutPic} alt="about picture"/>
          </motion.div>
          <motion.div 
            variants={animateConfig(100)}
            initial="initial"
            whileInView="animate"
            className="w-full lg:w-1/2 flex justify-center tracking-tighter sm:tracking-normal lg:pl-6"
          >
            <p className='max-w-2xl md:text-justify my-2'>{ABOUT_TEXT}</p>
          </motion.div>
        </div>
    </div>
  )
}

export default About