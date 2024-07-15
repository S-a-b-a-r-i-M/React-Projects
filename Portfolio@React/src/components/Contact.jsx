import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'

const animateConfig = (positionX) => ({
  initial: {x: positionX, opacity: 0},
  animate: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5}
  }
})

function Contact() {
  return (
    <div className='text-center p-5 space-y-4'>
        <motion.h2 
          initial={{y: -50, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration: 0.5}}
          className='text-3xl lg:text-4xl mb-10'
          >
            Get In Touch
        </motion.h2>
        <motion.p 
          variants={animateConfig(-100)}
          initial="initial"
          whileInView={"animate"}
          className='text-neutral-400'
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          variants={animateConfig(100)}
          initial="initial"
          whileInView={"animate"} 
          className='text-neutral-400'
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          variants={animateConfig(-100)}
          initial="initial"
          whileInView={"animate"} 
         className='text-neutral-400 underline'
         >
          {CONTACT.email}
        </motion.p>
    </div>
  )
}

export default Contact