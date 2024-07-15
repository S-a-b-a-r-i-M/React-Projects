import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.png'
import { motion } from 'framer-motion'

// Animation Configuration
const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        }
    }
})

function Hero() {
  return ( 
    <div className='flex flex-wrap items-center p-5 mx-5'>
    {/* w-full: Makes the column take up the full width of its container on smaller screens (up to lg breakpoint). */}
    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
        <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='text-5xl lg:text-7xl my-4 lg:mt-16'
        >
            Kevin Rush
        </motion.h1>
        <motion.span 
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 
            bg-clip-text text-transparent text-3xl'
        >
            Full Stack Developer
        </motion.span>
        <motion.p 
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className='max-w-2xl md:text-justify tracking-tighter sm:tracking-normal my-2 py-2'
        >
            {HERO_CONTENT}
        </motion.p>
    </div>
    <div className='w-full lg:w-1/2 lg:p-8'>
        <div className="flex justify-center">
            <motion.img 
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.9}}
                src={profilePic} alt="profile picture" 
            />
        </div>
    </div>

    </div>

  )
}
// achieving similar structure using grid
<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 mx-5'>
    {/* w-full: Makes the column take up the full width of its container on smaller screens (up to lg breakpoint). */}
        <div>
            <h1 className='text-5xl font-thin my-4 lg:text-7xl lg:mt-16'>
                Kevin Rush
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 
                bg-clip-text text-transparent text-3xl'>
                Full Stack Developer
            </span>
            <p className='max-w-xl font-thin my-2 py-2'>
                {HERO_CONTENT}
            </p>
        </div>
        <div>
            <img src={profilePic} alt="profile picture" />
        </div>
    </div>

export default Hero