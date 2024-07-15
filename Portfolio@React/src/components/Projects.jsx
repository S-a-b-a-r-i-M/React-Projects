import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'


const animateConfig =(initialPositionX, duration=0.5) => ({
    initial: {x: initialPositionX, opacity: 0},
    animate: {
        x: 0,
        opacity: 1,
        transition: {duration: duration}
    }
})

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-14'>
        <motion.h2 
            initial={{y: -50, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{duration: 0.5}}
            className='text-3xl text-center lg:text-4xl mb-20'
        >
            Projects
        </motion.h2>
        <div className='mb-4'>
            {PROJECTS.map((project, idx) => (
                <div key={idx} className='flex flex-wrap lg:justify-center mb-8'>
                    <motion.div 
                        variants={animateConfig(-100)}
                        initial="initial"
                        whileInView="animate"
                        className='w-full lg:w-1/4'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='rounded mb-4'
                            height={150}
                            width={150}
                        />
                    </motion.div>
                    <motion.div 
                        variants={animateConfig(100)}
                        initial="initial"
                        whileInView="animate"
                        className='max-w-2xl w-full lg:w-3/4'
                    >
                        <h6 className='font-semibold mb-2'>{project.title}</h6>
                        <p className='text-neutral-400 text-sm mb-4'>{project.description}</p>
                        {project.technologies.map((tech, idx) => (
                            <span key={idx} className='text-sm text-purple-700 bg-neutral-900 rounded-md mr-2 px-2 py-1'>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Projects