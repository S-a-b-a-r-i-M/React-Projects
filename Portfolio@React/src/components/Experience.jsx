import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'

const animateConfig =(initialPositionX, duration=0.5) => ({
    initial: {x: initialPositionX, opacity: 0},
    animate: {
        x: 0,
        opacity: 1,
        transition: {duration: duration}
    }
})

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-14'>
        <motion.h2 
            initial={{y:-50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition= {{duration: 0.5}}
            className='text-3xl text-center lg:text-4xl my-20'
        >
            Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="flex flex-wrap lg:justify-center my-8">
                    <motion.div 
                        variants={animateConfig(-100)}
                        initial="initial"
                        whileInView="animate"
                        className="w-full lg:w-1/4"
                    >
                        <p className='text-sm text-neutral-400 mb-2'>{exp.year}</p>
                    </motion.div>
                    <motion.div 
                        variants={animateConfig(100)}
                        initial="initial"
                        whileInView="animate"
                        className='max-w-2xl w-full lg:w-3/4'
                    >
                        <h6 className="text-sm font-semibold mb-2">
                            {exp.role} - <span className="text-purple-100">{exp.company}</span>
                        </h6>
                        <p className='text-sm text-neutral-400 md:text-justify mb-4'>{exp.description}</p>
                        {exp.technologies.map((tech, idx) => (
                                <span key={idx} 
                                className="text-sm text-purple-700 bg-neutral-900 rounded-md py-2 px-1 mr-2">
                                    {tech}
                                </span>
                            )
                        )}
                    </motion.div>
                </div>
            ))}
               
               
        </div>
    </div>
  )
}

export default Experience